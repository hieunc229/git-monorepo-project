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

## 1. How to install this project


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

## 2. Add a new dependency

To add a new dependency, make sure to push it to a git repository.

1. Add the dependency as a submodule under **src/packages**. For example:
```ssh
$ git submodule add https://github.com/username/module-name src/packages/module-name 
```

2. Configure module alias

**For JavaScripts**, add a new alias to the **resolve.alias** property in the **webpack.config.js** file. For React apps created with [CRA](https://inverr.com/blog/%7Bhttps://create-react-app.dev), use [react-app-rewired](https://inverr.com/blog/%7Bhttps://www.npmjs.com/package/react-app-rewired) to override the webpack configurations.

For example:
```js
module.exports = {
    …,
    resolve: {
        alias: {
            ...

            // import Module1 from “module1”
            "module-name": "path/to/src/packages/module-name",
        }
    }
}  
```
**For TypeScript**, add a new alias to the **compilerOptions.paths** in the **tsconfig.extends.json** file.

For example:

```json
{
    "compilerOptions": {
        "baseUrl": "./src",
        "paths": {
            // import Module1 from “module1”
            "module-name": "packages/module-name",
            "module-name/*": "packages/module-name/*",
        }
    }
}
```

3. Feedback or Question

Feel free to [create a thread](https://github.com/hieunc229/git-monorepo-project/issues/new) for question or feedback