{ pkgs, ... }:
{

  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  languages.javascript = {
    enable = true;
    nodejs.enable = true;
    npm.enable = true;
  };

  languages.typescript = {
    enable = true;
    lsp.enable = true;
  };

  profiles = {
    # This is used exclusively to manage this file
    nix.module = {
      languages.nix = {
        enable = true;
        lsp.enable = true;
        # lsp.package = pkgs.nixd; # Default
      };
      packages = [ pkgs.nixfmt ];
    };
  };

  # https://devenv.sh/git-hooks/
  git-hooks.hooks.prettier.enable = true;
  git-hooks.hooks.eslint.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
