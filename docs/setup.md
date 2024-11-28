# Setup
This tutorial prefers using `bash` using other tools such as [source control in vscode ](https://code.visualstudio.com/docs/sourcecontrol/overview), [github desktop](https://desktop.github.com/download/). In your downloads directory. Not that `#` is comment in bash, so copy and pasting the text will be completely fine.

## Cloning the repository
```bash
git clone https://github.com/XBOT-FTC/FTC-Scouting-App.git
```
```bash
cd FTC-Scouting-App
```
::: code-group
```bash [NodeJS]
npm i #Installs the packages using npm
```
```bash [Bun]
bun i #Installs the packages using bun
```
:::
```bash
code . #Opens the vscode in the current directory
```

## Setting up
First create a `.env` file in your workspace. DM JunJie on slack or Johnny for the password
```bash
MONGO_DB_PASSWORD=YOUR_MONGO_DB_PASSWORD
```
Then you run the following command in your terminal
::: code-group
```bash [NodeJS]
npm run dev # Runs the developer version in localhost:3000
```
```bash [Bun]
bun dev # Runs the developer version in localhost:3000
```
:::

## Start coding
The only directory you will be touching is the `app` folder. In the sub-folders, there should be `page.tsx`, edit code there and it will reflect to the localhost you are running. Do not touch the `api` folder and `route.ts`, they are related to the backend code unless you want to modify the behavior of it.

### Creating a new branch
You shouldn't push your code directly to the main branch, instead you would need to make your own branch
```bash
git checkout -b your-branch-name
```

### Committing changes
Before committing your changes, run this command
```bash
git stage . #. means to stage all the changed files for git
```
To commit your changes quickly without triggering git hooks use a `-n` flag to your commit, but it is not suggested.
```bash
git commit -m "your message" -n
```
Normally you would just do this
```bash 
git commit -m "your message"
```

### Pushing changes
Before pushing changes, it is suggested to do a `git pull` then run this command
```bash
git push
```
If this is your new branch, it will prompt something like this
```txt
fatal: The current branch test has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin test // [!code focus]

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```
copy the highlighted text, paste it into the terminal. In my case it is this
```bash
git push --set-upstream origin test
```
