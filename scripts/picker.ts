import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { cli, define } from "gunshi";
import prompts from "prompts";
import { execa } from "execa";

const rootDir = fileURLToPath(new URL("..", import.meta.url));

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

const createCommand = define({
  name: "create",
  description: "Create a new slide project",
  args: {
    date: {
      type: "positional",
      description: "Date for the slide (YYYY-MM-DD format)",
    },
    title: {
      type: "string",
      short: "t",
      description: "Title of the slide",
    },
  },
  examples: `
# Create a new slide for today
picker create 2025-01-15

# Create with a title
picker create 2025-01-15 --title "My Presentation"
`.trim(),
  run: async (ctx) => {
    const date = ctx.values.date;

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      console.error(`Invalid date format: ${date}`);
      console.error("Expected format: YYYY-MM-DD");
      process.exit(1);
    }

    const folderPath = path.join(rootDir, date);
    const srcPath = path.join(folderPath, "src");

    // Check if folder already exists
    try {
      await fs.access(folderPath);
      console.error(`Folder already exists: ${date}`);
      process.exit(1);
    } catch {
      // Folder doesn't exist, continue
    }

    const title = ctx.values.title || date;

    // Create folder structure
    await fs.mkdir(srcPath, { recursive: true });
    await fs.mkdir(path.join(srcPath, "images"));
    await fs.mkdir(path.join(srcPath, "public"));

    // Create package.json
    const packageJson = {
      type: "module",
      private: true,
      scripts: {
        dev: "slidev",
        build: "slidev build --out ../dist",
        export: "slidev export --per-slide --dark --output ../slides.pdf",
      },
    };
    await fs.writeFile(
      path.join(srcPath, "package.json"),
      JSON.stringify(packageJson, null, 2) + "\n",
    );

    // Create slides.md
    const slidesContent = `---
theme: seriph
title: ${title}
class: text-center
transition: fade-out
fonts:
  sans: "Kiwi Maru"
  mono: "Fira Code"
---

# ${title}

---

## Slide 2

Content here
`;
    await fs.writeFile(path.join(srcPath, "slides.md"), slidesContent);

    // Create README.md
    const readmeContent = `# ${title}

${date}
`;
    await fs.writeFile(path.join(folderPath, "README.md"), readmeContent);

    console.log(`Created new slide project: ${date}`);
    console.log(`  ${folderPath}/`);
    console.log(`  ├── README.md`);
    console.log(`  └── src/`);
    console.log(`      ├── package.json`);
    console.log(`      ├── slides.md`);
    console.log(`      ├── images/`);
    console.log(`      └── public/`);
    console.log();
    console.log(`Run "pnpm dev" to start editing`);
  },
});

const mainCommand = define({
  name: "picker",
  description: "Slide picker CLI",
  run: () => {
    console.log("Available commands: create, dev, build, export");
    console.log('Run "picker --help" for more information');
  },
});

await cli(process.argv.slice(2), mainCommand, {
  name: "picker",
  version: "1.0.0",
  subCommands: {
    create: createCommand,
    dev: devCommand,
    build: buildCommand,
    export: exportCommand,
  },
});
