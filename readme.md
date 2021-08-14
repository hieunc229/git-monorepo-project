# Monorepo with Git for TypeScript and JavaScript

This is an example of a project using monorepo approach with git. 

### Advantages of this method are:
- Projects and dependencies can be stored in the same directory or separately
- Easy to work on the project in different workstations
- Resolve code conflict with git, branches for versioning
- Free unlimited private repository with Github or Gitlab
- Module alias available for TypeScript and Javascript (using webpack)

### Disadvantages:
- Migrating from an existing project can be time consuming (each dependency need its own repository)
- Install dependencies of a dependency (need to add manually to the project)

Check out the details about [How to setup monorepo with Git for TypeScript and JavaScript](https://inverr.com/blog/setup-git-monorepo-for-javascript-typescript)

## How to install this project


Basically, this repository is a project, importing Module 1 and Module 2 which are submodules. To install and try this example:

1. Clone the project with `--recursive` to also download submodules.

```ssh
$ git clone --recursive https://github.com/hieunc229/git-monorepo-project.git
```

2. Install node modules 

```ssh
// With yarn
$ yarn

// With NPM
$ npm install
```

3. Run the example

```ssh
// With yarn
$ yarn start

// With NPM
$ npm run start
```

Now, you'll see the output result

```
Speak from Module1
Speak from Module2
```

## Project structures

```
project-root/
    ├── .gitsubmodules
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    └── src/
        ├── index.ts
        ├── packages/
        │   ├── module1 (submodule)/ 
        │   │   ├── package.json
        │   │   └── src/
        │   │       └── index.ts
        │   ├── module2 (submodule)/
        │   │   └── index.ts
        │   └── ...
        └── ...
```

Related repositories:
- module1: https://github.com/hieunc229/git-monorepo-module1/tree/1e5428b4d7d1b646ee0274b5b2e1ae37498e3041
- module2: https://github.com/hieunc229/git-monorepo-module2/tree/ec53f2dee840403edfbec1218ac39b10faa18587

---

## Adding a new submodule

Using the following command to add a new submodule
```ssh
$ git submodule add https://github.com/username/module-name src/packages/module-name 
```