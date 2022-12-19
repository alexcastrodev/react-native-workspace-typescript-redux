# Modular Core

## Description Project

Collab title: React Native with modular store and TDD

## Instructions

- npx react-native init coreProject --template react-native-template-typescript

- add "jsx": "react-native" on tsconfig.json

- move app.tsx and test to src folder

- update index.js on root

### Project dependencies

- yarn add react-redux axios

- yarn jest @types/jest axios-mock-adapter react-redux axios ts-jest jest-environment-jsdom @types/node @babel/plugin-proposal-private-methods @reduxjs/toolkit @testing-library/react-native -D -W

- create packages/core

- go to packages/core and yarn init

### Continue

- Add on package.json > jest
```js
"transformIgnorePatterns": [
    "node_modules/@company"
]
```

- Add on babel.config.js

```json
{
    "plugins": ["@babel/plugin-proposal-private-methods"]
}
```





