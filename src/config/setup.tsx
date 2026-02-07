import {
  Download,
  FileText,
  Settings,
  Terminal,
  Package,
  Palette,
} from "lucide-react";

// VSCode Setup Steps
export const vscodeSteps = [
  {
    id: 1,
    title: "Download necessary files",
    icon: <Download className="size-4" />,
    content: [
      {
        type: "download",
        name: "Fira-code.zip",
        description: "Download and unzip the font's file",
        href: "/setup/fira-code.zip",
      },
      {
        type: "instruction",
        text: "Select all the fonts, right click, and click to Install",
      },
      {
        type: "download",
        name: "vsc-extensions.txt",
        description: "Place this file in downloads folder",
        href: "/setup/vsc-extensions.txt",
      },
      {
        type: "instruction",
        text: "Open the VSCode in downloads directory",
      },
      {
        type: "instruction",
        text: "Install VSC Export & Import extension in VS Code.",
      },
    ],
  },
  {
    id: 2,
    title: "Installing all the extensions",
    icon: <FileText className="size-4" />,
    content: [
      {
        type: "instruction",
        text: "Open Command Palette by pressing the keyboard shortcut",
      },
      {
        type: "shortcut",
        text: "Cmd + Shift + P (Mac) / Ctrl + Shift + P (Windows)",
      },
      {
        type: "instruction",
        text: "Enter the text in prompt and press Enter",
      },
      {
        type: "prompt",
        text: "VSC Export & Import",
      },
      {
        type: "instruction",
        text: "All extensions will start to install automatically",
      },
    ],
  },
  {
    id: 3,
    title: "VS Code Settings",
    icon: <Settings className="size-4" />,
    content: [
      {
        type: "instruction",
        text: "Open Command Palette by pressing the keyboard shortcut",
      },
      {
        type: "shortcut",
        text: "Cmd + Shift + P (Mac) / Ctrl + Shift + P (Windows)",
      },
      {
        type: "instruction",
        text: "Enter the text in prompt and press Enter",
      },
      {
        type: "prompt",
        text: "Preferences: Open Settings (JSON)",
      },
      {
        type: "instruction",
        text: "Copy the settings.json from the code block below",
      },
    ],
  },
];

// Terminal Setup Steps
export const terminalSteps = [
  {
    id: 1,
    title: "Install Terminal Emulator",
    icon: <Terminal className="size-4" />,
    content: [
      {
        type: "instruction",
        text: "Choose your terminal emulator based on your OS:",
      },
      {
        type: "prompt",
        text: "CachyOS: Kitty | Linux: Alacritty",
      },
      {
        type: "instruction",
        text: "Install the terminal using your package manager",
      },
      {
        type: "prompt",
        text: "sudo pacman -S kitty  # or alacritty",
      },
    ],
  },
  {
    id: 2,
    title: "Shell & Framework Setup",
    icon: <Package className="size-4" />,
    content: [
      {
        type: "instruction",
        text: "Install Zsh shell if not already installed",
      },
      {
        type: "prompt",
        text: "sudo pacman -S zsh",
      },
      {
        type: "instruction",
        text: "Install Oh My Zsh framework",
      },
      {
        type: "prompt",
        text: 'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
      },
      {
        type: "instruction",
        text: "Install Starship prompt",
      },
      {
        type: "prompt",
        text: "curl -sS https://starship.rs/install.sh | sh",
      },
    ],
  },
  {
    id: 3,
    title: "Install Plugins & Tools",
    icon: <Package className="size-4" />,
    content: [
      {
        type: "instruction",
        text: "Install zsh-autosuggestions",
      },
      {
        type: "prompt",
        text: "git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions",
      },
      {
        type: "instruction",
        text: "Install zsh-syntax-highlighting",
      },
      {
        type: "prompt",
        text: "git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting",
      },
      {
        type: "instruction",
        text: "Install CLI tools",
      },
      {
        type: "prompt",
        text: "sudo pacman -S fzf bat eza ripgrep fd",
      },
    ],
  },
  {
    id: 4,
    title: "Theme & Colors",
    icon: <Palette className="size-4" />,
    content: [
      {
        type: "instruction",
        text: "Apply Catppuccin Mocha color scheme to your terminal",
      },
      {
        type: "download",
        name: "catppuccin-mocha.conf",
        description: "Download theme config for Kitty",
        href: "/setup/catppuccin-mocha.conf",
      },
      {
        type: "instruction",
        text: "Copy the theme file to your terminal config directory",
      },
      {
        type: "prompt",
        text: "cp catppuccin-mocha.conf ~/.config/kitty/",
      },
    ],
  },
];

// VSCode Settings JSON
export const settingsJson = `{
  "github.copilot.nextEditSuggestions.enabled": true,
  "explorer.confirmDelete": false,
  "workbench.productIconTheme": "fluent-icons",
  "workbench.startupEditor": "none",

  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "redhat.telemetry.enabled": true,
  "code-runner.runInTerminal": true,
  "code-runner.clearPreviousOutput": true,
  "files.autoSave": "onWindowChange",
  "editor.smoothScrolling": true,
  "editor.cursorBlinking": "expand",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.mouseWheelZoom": true,
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "editor.tabSize": 2, // Comfortable terminal text
  "terminal.integrated.smoothScrolling": true, // Smooth scroll in terminal
  "terminal.integrated.cursorBlinking": true,
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false,
    "typescriptreact": true,
    "javascriptreact": true,
    "postcss": true,
    "javascript": true,
    "python": true,
    "java": false,
    "cpp": true,
    "rust": false,
  },
  "explorer.confirmDragAndDrop": false,
  "git-autoconfig.configList": [
    {
      "user.email": "pranabm406@gmail.com",
      "user.name": "pranab-kr",
    },
  ],
  "chat.agent.maxRequests": 40,

  //new
  "editor.copyWithSyntaxHighlighting": false,
  "diffEditor.ignoreTrimWhitespace": false,
  "diffEditor.renderSideBySide": false,
  // "workbench.editor.showTabs": "none",
  // "editor.multiCursorModifier": "ctrlCmd",
  "editor.snippetSuggestions": "top",
  "editor.detectIndentation": false,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "scm.diffDecorations": "none",
  "editor.hover.delay": 500,
  "editor.hover.enabled": "on",
  "editor.lightbulb.enabled": "off",
  "editor.overviewRulerBorder": false,
  "editor.renderLineHighlight": "none",
  "editor.hideCursorInOverviewRuler": true,
  "workbench.tips.enabled": false,
  "mdb.mcp.server": "autoStartDisabled",
  "workbench.activityBar.location": "hidden",
  "workbench.iconTheme": "material-icon-theme",
  "editor.lineHeight": 1.7,

  //for the change color of text inside html tag only
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          "text.html.basic",
          "meta.tag.inline.any.html",
          "meta.tag meta.embedded.block.html",
          "meta.jsx.children",
          "punctuation.definition.text",
        ],
        "settings": {
          "foreground": "#b3b3b3", // <-- pick the exact gray you want
        },
      },
    ],
  },
  "workbench.list.smoothScrolling": true,
  "breadcrumbs.enabled": false,
  "explorer.compactFolders": false,
  "editor.stickyScroll.enabled": false,
  "editor.fontSize": 14,
  "window.commandCenter": false,
  "chat.commandCenter.enabled": false,
  "workbench.layoutControl.enabled": false,
  "chat.viewSessions.orientation": "stacked",
  "chat.editor.fontSize": 12,
  "chat.viewWelcome.enabled": false,
  "chat.viewSessions.enabled": false,
  "window.menuBarVisibility": "compact",
  "git.openRepositoryInParentFolders": "always",

  "vim.handleKeys": {
    "<C-p>": false,
    "<C-w>": false,
    "<C-k>": false,
    "<C-c": false,
  },

  "editor.lineNumbers": "relative",
  "workbench.colorTheme": "Aura Dark (Soft Text)",
}

  `;

// Terminal .zshrc config
export const zshrcConfig = `# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Theme
ZSH_THEME="robbyrussell"

# Plugins
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  z
)

source $ZSH/oh-my-zsh.sh

# Starship prompt
eval "$(starship init zsh)"

# Aliases
alias ls="eza --icons"
alias ll="eza -la --icons"
alias cat="bat"
alias find="fd"
alias grep="rg"`;

// Terminal plugins list for display
export const terminalPlugins = [
  { name: "zsh-autosuggestions", description: "Fish-like autosuggestions" },
  {
    name: "zsh-syntax-highlighting",
    description: "Syntax highlighting for commands",
  },
  { name: "z", description: "Jump around directories quickly" },
  { name: "fzf", description: "Fuzzy finder for files and history" },
  { name: "bat", description: "Cat clone with syntax highlighting" },
  { name: "eza", description: "Modern replacement for ls" },
  { name: "ripgrep", description: "Fast grep alternative" },
  { name: "fd", description: "Simple and fast find alternative" },
];
