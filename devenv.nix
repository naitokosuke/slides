{ pkgs, ... }:

{
  packages = [ pkgs.git ];

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
    # pnpm version comes from package.json's "packageManager" field.
    corepack.enable = true;
  };
}
