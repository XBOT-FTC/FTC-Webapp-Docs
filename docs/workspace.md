# Workspace
![Workspace](/workspace.png)

## Explanation
* `.github`: The github workflow files and other configurations related to github
* `.vscode`: VSCode configurations 
* `app`: The working directory for the actual website **this is a nextjs thing**
* `backend`: This doesn't do anything, mainly for testing code outside of the website
* `components`: react components defined globally for other pages to use
* `constants`: A publicly exposed variables, for example the competition name.
* `public`: Images used for the website **this is a nextjs thing**
* `scripts`: internal scripts webapp maintainers will use during the competition
* `store`: Atoms defined from jotai, used in other pages
* `types`: Globally defined types for websites to use
* `utils`: Utility function, such as a counter etc
* `custom-words.txt`: Defining words that don't exist for cspell

## Less important things
* `.eslintrc`: eslint configurations
* `.gitignore`: what git should ignore, for example `node_modules` and `.env`
* `bun.lockb`: a lock file that makes installing packages quicker
* `next.config.mjs`: nextjs configurations
* `package.json`: all the packages listed
* `README.md`: a intro markdown file when you see it on github