import fs from "node:fs/promises";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { cli, define } from "gunshi";
import prompts from "prompts";
import { execa } from "execa";

async function getFolders() {
  const folders = (
    await fs.readdir(new URL("..", import.meta.url), { withFileTypes: true })
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((folder) => folder.match(/^\d{4}-/))
    .sort((a, b) => -a.localeCompare(b));
  return folders;
}

async function pickFolder(useLatest: boolean) {
  const folders = await getFolders();

  if (useLatest) {
    return folders[0];
  }

  const result = await prompts([
    {
      type: "select",
      name: "folder",
      message: "Pick a folder",
      choices: folders.map((folder) => ({ title: folder, value: folder })),
    },
  ]);

  return result.folder as string | undefined;
}

async function runSlidev(folder: string, command: string, extraArgs: string[]) {
  await execa("pnpm", ["run", command, ...extraArgs], {
    cwd: new URL(`../${folder}/src`, import.meta.url),
    stdio: "inherit",
  });
}

const devCommand = define({
  name: "dev",
  description: "Start development server for a slide",
  args: {
    yes: {
      type: "boolean",
      short: "y",
      description: "Use the latest folder without prompting",
      default: false,
    },
    open: {
      type: "boolean",
      description: "Open browser automatically",
      default: false,
    },
  },
  run: async (ctx) => {
    const folder = await pickFolder(ctx.values.yes);
    if (!folder) return;

    const editor = process.env.PICKER_EDITOR;
    if (editor) {
      console.log(`use editor ${editor} by env PICKER_EDITOR`);
      execa(editor, [
        fileURLToPath(
          new URL(`../${folder}/src/slides.md`, import.meta.url),
        ),
      ]);
    }

    const extraArgs: string[] = [];
    if (ctx.values.open) {
      extraArgs.push("--open");
    }

    await runSlidev(folder, "dev", extraArgs);
  },
});

const buildCommand = define({
  name: "build",
  description: "Build a slide for production",
  args: {
    yes: {
      type: "boolean",
      short: "y",
      description: "Use the latest folder without prompting",
      default: false,
    },
  },
  run: async (ctx) => {
    const folder = await pickFolder(ctx.values.yes);
    if (!folder) return;

    await runSlidev(folder, "build", []);
  },
});

const exportCommand = define({
  name: "export",
  description: "Export a slide to PDF",
  args: {
    yes: {
      type: "boolean",
      short: "y",
      description: "Use the latest folder without prompting",
      default: false,
    },
  },
  run: async (ctx) => {
    const folder = await pickFolder(ctx.values.yes);
    if (!folder) return;

    await runSlidev(folder, "export", []);
  },
});

const mainCommand = define({
  name: "picker",
  description: "Slide picker CLI",
  run: () => {
    console.log("Available commands: dev, build, export");
    console.log('Run "picker --help" for more information');
  },
});

await cli(process.argv.slice(2), mainCommand, {
  name: "picker",
  version: "1.0.0",
  subCommands: {
    dev: devCommand,
    build: buildCommand,
    export: exportCommand,
  },
});
