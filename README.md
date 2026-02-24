
# Istallation and Set Up

## Pre-condition:
- install Ide (Visual Studio Code)
- install nodeJS LTS (latest stable version) from `https://nodejs.org/en/download`
- install GIT from `https://git-scm.com/install/windows`
- how to set up GIT `https://git-scm.com/book/ms/v2/Getting-Started-First-Time-Git-Setup`

## Run the following commands in git-bash terminal to install poject packages:
- `npm install` -> install all project packages
- `npx ts-node -v` -> if it asks you to install ts-node Accept, try again and you should see a version in your console like 'v10.9.2'

## Set up VS Code User Settings with:
- ctr+p (to open VS Code search menu)
- type: ">Open User Settings" and select the JSON option (search for command to execute which contains this text)
- note!: after this you will have to set up your IDE's colour scheme again

## Copy the below settings and replace your JSON file with the JSON below:
- makes git bash default terminal
- configures formater as Prettier
- configures auto format on Paste or Save
- sets up some useful git settings
- sets up some playwright settings for later

{
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "prettier.printWidth": 200,
    "files.autoSave": "afterDelay",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "explorer.confirmDelete": false,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "git.autofetch": true,
    "git.enableSmartCommit": true,
    "editor.wordWrapColumn": 160,
    "playwright.updateSnapshots": "all",
    "playwright.env": {},
    "playwright.reuseBrowser": true,
    "playwright.showTrace": false,
    "git.confirmSync": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
