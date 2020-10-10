<!-- @format -->
- :link: [admin.mynetdisk.top](https://admin.mynetdisk.top)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### 在已有项目安装 typescript

`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

或者

`yarn add typescript @types/node @types/react @types/react-dom @types/jest`

### 配置 typescript.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": false,
    "target": "esnext",
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

### 用 ESlint 来规范 TypeScript 代码

这三个依赖分别是：

eslint: ESLint 的核心代码

@typescript-eslint/parser：ESLint 的解析器，用于解析 typescript，从而检查和规范 Typescript 代码

@typescript-eslint/eslint-plugin：这是一个 ESLint 插件，包含了各类定义好的检测 Typescript 代码的规范

### 安装好这 3 个依赖包之后，在根目录下新建.eslintrc.js 文件，该文件中定义了 ESLint 的基础配置，一个最为简单的配置如下所示：

```js
module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
  },
}
```

### 结合 Prettier 和 ESLint 来规范代码

`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`

其中：

prettier：prettier 插件的核心代码

eslint-config-prettier：解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效

eslint-plugin-prettier：将 prettier 作为 ESLint 规范来使用

### 然后在项目的根目录下创建.prettierrc.js 文件：

```js
module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
  jsxBracketSameLine: true,
  arrowParens: 'avoid',
  insertPragma: true,
  tabWidth: 4,
  useTabs: false,
}
```

### 接着修改.eslintrc.js 文件，引入 prettier：

```js
module.exports = {
    parser:  '@typescript-eslint/parser',
    extends:[
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
    ],
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures":{
            jsx:true
        }
    },
    env:{
        browser: true,
        node: true,
    }
```

上述新增的 extends 的配置中：

prettier/@typescript-eslint：使得@typescript-eslint 中的样式规范失效，遵循 prettier 中的样式规范

plugin:prettier/recommended：使用 prettier 中的样式规范，且如果使得 ESLint 会检测 prettier 的格式问题，同样将格式问题以 error 的形式抛出

### 安装 eslint-config-airbnb 支持阿里巴巴 eslint 规范

安装依赖项。还必须安装 ESLint 插件。

`npm install eslint-config-airbnb-typescript eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8 @typescript-eslint/eslint-plugin@^3.6.1 --save-dev`

### 接着在.eslint.js 中新增如下配置

```js
module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
```

### git 提交规范 commitizen & commitlint

本地安装

`npm install --save-dev commitizen cz-conventional-changelog`

在 package.json 中添加如下配置

```json
"scripts": {
    "commit": "git-cz"
}
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

本地安装 commitlint

For Windows:

`npm install --save-dev @commitlint/config-conventional @commitlint/cli`

然后安装 husky

`npm install husky --save-dev or yarn add -D husky`

在项目根目录下新建文件.huskyrc，或者直接在 package.json 文件中

添加如下配置

```
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```
