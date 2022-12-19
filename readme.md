<div style='display: flex; column-gap: 8px;'>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f44849241bcc4ddea4fe3f0c73dfb234)](https://app.codacy.com/gh/AlexcastroDev/react-native-workspace-typescript-redux?utm_source=github.com&utm_medium=referral&utm_content=AlexcastroDev/react-native-workspace-typescript-redux&utm_campaign=Badge_Grade_Settings)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/83dc76192a93416a9958d995f45c5887)](https://www.codacy.com/gh/AlexcastroDev/react-native-workspace-typescript-redux/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AlexcastroDev/react-native-workspace-typescript-redux&amp;utm_campaign=Badge_Grade)

<img src='https://github.com/AlexcastroDev/react-native-workspace-typescript-redux/actions/workflows/testing.yml/badge.svg' />

<img src='https://github.com/AlexcastroDev/react-native-workspace-typescript-redux/actions/workflows/linter.yml/badge.svg' />
</div>

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





