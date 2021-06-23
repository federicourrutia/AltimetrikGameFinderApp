# What is Git

Git is a Version Control System (VCS). A version control system tracks and manages the changes to the software code. 

## Version control system

Version control systems help software teams to manage changes to source code over time. It keeps track of every modification to the code in a database. If you mess up, you can turn back to an earlier version or just compare the changes that you've made to get a better understanding of what's broken. This also minimizes disruption to all team members. 

### Benefits of version control systems

1. It offers a complete long-term change history of every file. Changes include edits, renaming, deletion and moving of files, including the name of the author, date and written notes on the purpose of each change. 
2. Branching and merging. Creating a 'branch' in VCS tools keep multiple streams of work independent from each other, while also providing the possibility to merge that work back together. There are many different workflows that teams can choose from when they decide how to make use of branching and merging facilities in VCS.
3. Traceability. Being able to trace each change can help not only to debug, it also helps you when trying to understand what the changes are doing and why. 

### Source code management best practices

- Commit often
- Ensure you're working from latest version
- Make detailed notes for every commit
- Review changes before commiting in staging area
- Use branches to work in parallel on separate lines of development
- Agree on a Workflow



### Most common commands

#### Basics

```
git init 
```

Creates an empty Git repository in specified directory. 

```
git clone <repo>
```

Clone repository located at <repo> onto local machine. Original repository can either be local or remote. 

```
git config user.name <name>
```

Define author name to be used for all commits in current repository. Commonly used with the --global flag.

```
git add <directory>
```

Stages all changes in <directory> for next commit. Can use git add . (dot) to add all files to staging. 

```
git commit -m "<message>"
```

Commits the staging content, using <message> as the commit message.

```
git status
```

Lists staged, unstaged and untracked files. 

```
git log
```

Displays the entire commit history.

```
git diff 
```

Show unstaged changes between index and working directory. Displays a lot of lines, consider using UI instead of terminal for this command. 

#### Undoing changes

```
git revert <commit hash>
```

Creates a new commit that undoes all of the changes made in <commit hash>, and applies to the current branch.

```
git reset <file>
```

Removes <file> from the staging area. 

#### Rewriting git history

```
git commit --amend
```

Replaces the last commit with the staged changed and last commit combined. Can be used with nothing staged to edit last commit's message.

```
git rebase <base>
```

Rebase the current branch onto <base>.

```
git reflog
```

Show a log of changes to the local repository's head.



#### Git branches commands

```
git branch <addbranch>
```

Lists all of the branches in your repository. If you add <addbranch>, it creates a new branch with the name <addbranch>.

```
git checkout -b <branch>
```

Create and check out a new branch named <branch>.  Note that it has the -b flag. Checkout is also used to switch branches or restoring working tree files.

```
git merge <branch>
```

Merges <branch> into the current branch.



#### Remote repositories

```
git remote add  <url>
```

Create a new connection to a remote repository. 

```
git fetch <remote> <branch>
```

Fetches a specific <branch> from the repository. If you dont add <branch>, it fetches all remote refs.

```
git pull <remote>
```

Fetch the specified remote's copy of the current branch and immediately merge it into the local copy.

```
git push <remote> <branch>
```

Push the branch to <remote>, along with necessary commits and objects. Creates named branch in the remote repository if it doesn't exist.

#### Tagging

Git has the ability to tag specific points in a repository's history as being important. You can mark release points such as v1.0, v2.0 and so on. 

##### Listing existing tags:

git tag

##### Creating tags

Git supports lightweight and annotated tags.

Lightweight tags is very much like a branch that doesn't change. Mostly temporary tags.

```
git tag v1.0
```

Annotated tags are stored as full objects in the Git database. Contain the tagger name, email and date; have a tagging message and can be signed and verified with GNU Privacy Guard. 

```
git tag -a v1.0 -m "version message"
```

Deleting tags

```
git tag -d <tagname>
```



#### Git stash

The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy. The stash is local to your git repository and are not transferred to the server when you push. 



By default, git stash will stash:

- Staged changes
- Unstaged changes (tracked)

Will not stash:

- New files untracked
- Ignored files



Deleting stash

```
git stash drop
```

Or deleting all stashes

```
git stash clear
```



#### Hooks

Git hooks are scripts that run automatically every time a particular event occurs in a Git repository. For example you can set a hook that prevents you from commiting if the hook detects a problem. 

They are installed in the .git folder /hooks. 

Pre-commit as a hook, for example, is executed every time you run git commit before Git asks the developer for a commit message or generates a commit object. It inspects the snapshot that is about to be committed. This script aborts the commit if it finds any whitespace errors. You can also run a 3rd party test suite, or check code style with Lint. 

Other useful hooks: prepare-commit-msg, commit-msg (same as prepare-commit-msg but called after the user enters a commit message), post-commit (notification purposes), post-checkout. 



### Git merge vs rebase

![Do You Know the Difference Between Git Merge and Git Rebase? | by Vikram  Gupta | Level Up Coding](https://miro.medium.com/max/602/1*cEXnJtDL2tGeoN3KoCJSIw.png)

#### What is git merge?

Git merge is a command that allows you to merge branches from Git. Merging is a common practice for developers. 



#### What is git rebase?

Git rebase is a command that allows developers to integrate changes from one branch to another. Preservers history of a branch.

Rebase compresses all the changes into a single 'patch'. Then it integrates the patch onto the target branch. Unlike merging, rebasing flattens history. Transfers the completed work from one branch to another. Unwanted history is eliminated.



#### Similarities

Git rebase and merge both integrate changes from one branch into another. 



#### Differences

Git rebase moves a feature branch into a master, while git merge adds a new commit preserving the history. 



#### Deciding merge or rebase

Depends on the branching strategy. Git rebase makes sense for individuals, not so much for teams. 



### Git squash

To "squash" in Git means to combine multiple commits into one. There is no such thing as a stand-alone git squash command. Instead, squashing is rather an option when performing other Git commands like interactive rebase or merge. 

It would be a good idea to squash when you have too many commits, or you decide to squash before merging so all the individual commits from the feature branch will be combined to a single commit. 

You can decide to preserve all the individual commits and avoid squashing. 

Usage: 

##### For merging

```
git merge --squash
```

##### For rebasing

```
git rebase -i HEAD~20
```



## 



## Sources

https://git-scm.com/book/en/v2/Git-Basics-Tagging
https://www.atlassian.com/git/tutorials/
https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet
https://www.atlassian.com/es/git/tutorials/saving-changes/git-stash
https://www.atlassian.com/git/tutorials/git-hooks
https://www.youtube.com/watch?v=8JJ101D3knE&ab_channel=ProgrammingwithMosh
https://www.youtube.com/watch?v=CRlGDDprdOQ
https://www.perforce.com/blog/vcs/git-rebase-vs-merge-which-better
https://levelup.gitconnected.com/the-difference-between-git-merge-and-git-rebase-8f7d1b159931
https://www.youtube.com/watch?v=8JJ101D3knE&ab_channel=ProgrammingwithMosh
https://www.youtube.com/watch?v=CRlGDDprdOQ