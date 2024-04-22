{pkgs}: {
  deps = [
    pkgs.nodePackages_latest.typescript-language-server
    pkgs.nodejs_21
    pkgs.nil
    pkgs.vscode-langservers-extracted
  ];
}
