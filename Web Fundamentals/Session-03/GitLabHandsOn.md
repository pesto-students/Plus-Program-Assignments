# Git Lab

### Activity 1: Install git and play with a repository
- https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Add a `README.md` (info about your repository for anyone to read) or any other file
- Commit the file

### GitHub

- GitHub hosts repositories for you, so you and others can access them from anywhere.
- It's a collaborative platform
- Allows you to have docs/wiki, make issues (log features/bugs), pull requests and more
---

### Activity 2:  Make a GitHub account and push your local repo to GitHub
- https://github.com/
[![Build Status](https://user-images.githubusercontent.com/11183523/42058552-cd7e8904-7aee-11e8-9543-2d3839887fb4.png)]

### Activity 3: create a branch and push your changes to the branch

Branches are a way to separate your main code base from the code you are working on new content in. You can "check out" a branch to switch over and avoid pushing untested code into publication. Master is the main branch that is started on. Use git status to see what branch you are currently using.

‐ Check to see which branch you are currently on.
```sh
$ git status
```
‐ Creates a new branch.
```sh
$ git branch [branch-name]
```
‐ Switches to a different branch.
```sh
$ git checkout [branch-name]
```
‐ Combines git branch and git checkout into one command. It creates a new branch and switches to it.
```sh
$ git checkout -b [branch-name]
```
Add and commit any changes you have made to the local repositiory before you push to the remote one.
```sh
$ git add [file]
$ git add .
```
Commits all staged files with a message about changes made.
```sh
$ git commit -m "commit message"
```
‐ The origin represents a remote name where you want to push changes
```sh
$ git push origin [branch-name]
```
Deletes branch
```sh
$ git branch -d [branch-name]
```

### Final Activity - Make a PR to main branch
- Make a pull request to the repository below with your name and GitHub info in the `README.md` using either GitHub or the command line