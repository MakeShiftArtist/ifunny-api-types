{ pkgs, ... }:
{

  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  languages.javascript = {
    enable = true;
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

  # https://devenv.sh/basics/
  enterShell = ''
    git --version # Use packages
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
