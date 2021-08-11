# An example of Monorepo with Git

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