{ pkgs, ... }:

{
  packages = [ pkgs.git ];

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
    pnpm = {
      enable = true;
      package = pkgs.pnpm_10;
    };
  };
}
