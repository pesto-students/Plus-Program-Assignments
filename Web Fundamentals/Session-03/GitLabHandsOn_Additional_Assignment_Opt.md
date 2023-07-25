# Advanced Level Hands-On Assignment for Mastering GitHub

## Objective:
The objective of this assignment is to provide you with advanced hands-on experience with GitHub, including creating and managing branches, resolving conflicts, working with remote repositories, and using Git command line tools.

## Instructions:

Step 1: Create a GitHub Account
If you do not already have a GitHub account, create one at github.com.

Step 2: Create a Repository
Create a new repository on GitHub by clicking on the “+” button on the top right corner of the screen and selecting “New repository” from the drop-down menu. Name your repository “GitHub-Advanced-Hands-On” and select “Public” as the repository type. Check the box that says “Initialize this repository with a README” and click on the “Create repository” button.

Step 3: Clone the Repository
To clone the repository, go to the repository page on GitHub and click on the “Code” button. This will open a menu with a URL that you can use to clone the repository. Open a terminal window and navigate to the directory where you want to clone the repository. Use the following command to clone the repository:

```
git clone <repository URL>
```

Step 4: Create and Manage Branches
Create a new branch called “dev” using the following command:

```
git branch dev
```

Switch to the new branch using the following command:

```
git checkout dev
```

Make changes to the “hello.txt” file by adding the following line to the end of the file:



This is a dev branch change.

Save the file and close it.

Step 5: Commit Changes to the Dev Branch

Add the changes to the dev branch and commit them using the following commands:


```
git add hello.txt
git commit -m "Add dev branch change to hello.txt"
```

Step 6: Push Changes to the Dev Branch
Push the changes to the dev branch using the following command:


```
git push origin dev
```
Step 7: Resolve Conflicts
Switch back to the main branch using the following command:

```
git checkout main
```
Make changes to the “hello.txt” file by adding the following line to the end of the file:


This is a main branch change.

Save the file and close it.

Try to merge the dev branch into the main branch using the following command:


```
git merge dev
```
You will get a conflict error because the same line has been modified in both branches. Open the “hello.txt” file and resolve the conflict by keeping both changes:



Hello, GitHub!
This is a dev branch change.
This is a main branch change.

Save the file and close it.

Add the resolved file to the commit using the following command:


```
git add hello.txt
```
Commit the changes using the following command:


```
git commit -m "Resolve conflict in hello.txt"
```
Step 8: Push Changes to the Main Branch
Push the changes to the main branch using the following command:

```
git push origin main
```
Step 9: Work with Remote Repositories
Create a new repository on your local machine using the following command:


```
git init
```
Add the remote repository using the following command:


```
git remote add origin <repository URL>
```
Fetch the changes from the remote repository using the following command:


```
git fetch
```
Create a new branch called “feature” and switch to it using the following commands:
```
git branch feature
git checkout feature
```
Make changes to the “hello.txt” file by adding the following line to the end of the file:



This is a feature branch

Step 10: Commit and Push Changes to the Feature Branch
Add the changes to the feature branch and commit them using the following commands:


```
git add hello.txt
git commit -m "Add feature branch change to hello.txt"
```
Push the changes to the feature branch using the following command:

```
git push origin feature
```

Step 11: Create a Pull Request
Go to the GitHub repository page and click on the “Pull requests” tab. Click on the “New pull request” button. Select the main branch as the base branch and the feature branch as the compare branch. Review the changes and click on the “Create pull request” button.

Step 12: Merge the Pull Request
Review the pull request and click on the “Merge pull request” button to merge the changes into the main branch.

Step 13: Use Git Command Line Tools
Open a terminal window and navigate to the directory where you cloned the repository. Use the following command to view the commit history:


```
git log
```
Use the following command to view the status of the repository:


```
git status
```
Use the following command to create a new branch and switch to it:


```
git checkout -b <new branch name>
```
Use the following command to delete a branch:

```
git branch -d <branch name>
```
Use the following command to revert to a previous commit:


```
git revert <commit hash>
```
Conclusion:
Congratulations! You have successfully completed an advanced hands-on assignment for mastering GitHub. You have learned how to create and manage branches, resolve conflicts, work with remote repositories, and use Git command line tools. Keep practicing to become even more proficient in GitHub!