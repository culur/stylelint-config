# `@culur/stylelint-config` changelog.

## [1.0.0](https://github.com/culur/stylelint-config/compare/v0.2.0...v1.0.0) (2022-02-25)

### ⚠ BREAKING CHANGES

- **rules/order:** update order based on `stylelint-config-hudochenkov/order`
- **deps-optional:** remove `tailwindcss` from `optionalDependencies`
- **deps:** bump `stylelint` & `stylelint-config-*` to the latest version

### Features

- **css:** remove duplicated rule `at-rule-empty-line-before` ([3e8ece6](https://github.com/culur/stylelint-config/commit/3e8ece63774abceb92a724683d2cef0577f1a4d7))
- **css:** set indentation to null ([1c72e0f](https://github.com/culur/stylelint-config/commit/1c72e0ff3396c267d3a758b0eea49917c917c78c))
- **index:** re-struct index ([6dfcc90](https://github.com/culur/stylelint-config/commit/6dfcc902e00f31679a4d5b2495563345a3f4c890))
- **rules/order:** update order based on `stylelint-config-hudochenkov/order` ([da7d576](https://github.com/culur/stylelint-config/commit/da7d57683603d5bf08b66ff068f4ec0e3ba20e46))
- **scss:** extends `stylelint-config-*-scss` ([03856d1](https://github.com/culur/stylelint-config/commit/03856d1482bc98396f0463282f3358d9b89ecf89))
- **scss:** overrides customSystax `postcss-sass` & `postcss-scss` ([178584f](https://github.com/culur/stylelint-config/commit/178584f288efc22ca98f26d8fb5aef9a92a3667b))
- **scss:** remove duplicated rules `comment` ([e0cb37e](https://github.com/culur/stylelint-config/commit/e0cb37e92997fdd009f0694bb4ede488bcf57853))
- **scss:** remove duplicated rules `import` ([608ad2f](https://github.com/culur/stylelint-config/commit/608ad2f227821f5ce866155bedcbbfcff755fc81))
- **scss:** remove extends `css` ([9ea3582](https://github.com/culur/stylelint-config/commit/9ea358240f904404a46626efc865f5237bd5cab2))
- **vue:** use `stylelint-config-standard-vue` ([371fdd0](https://github.com/culur/stylelint-config/commit/371fdd0d3e10004d1db7e262bace48b9ff002c91))

### Bug Fixes

- **utils/resolve:** use `require.main?.require` ([1367945](https://github.com/culur/stylelint-config/commit/1367945b0daaf8a347509153eb567c3857a3c145))

### Build System

- **deps-optional:** remove `optionalDependencies` ([3b14dc9](https://github.com/culur/stylelint-config/commit/3b14dc95f022de60b5d3983b13b8fe43d21726ce))
- **deps:** update dependencies ([c757bff](https://github.com/culur/stylelint-config/commit/c757bff2343c52da6fc20a85f8c6e2fbde951edb))

### Code Refactoring

- **types:** update types for `stylelint-config-*` ([f41845a](https://github.com/culur/stylelint-config/commit/f41845aa0a46d1185879a8ad269c31d74b3d2079))
- **types:** use `Config` type from `stylelint` ([0daa6c3](https://github.com/culur/stylelint-config/commit/0daa6c3362e947dd319a4d33cbf0a73e8b512b7e))

# [0.2.0](https://github.com/culur/stylelint-config/compare/v0.1.2...v0.2.0) (2021-07-12)

### Features

- **scss:** add `comment` rules ([731d1b3](https://github.com/culur/stylelint-config/commit/731d1b3b0d2ee6e42a5841c1f8d95b833d77ffc3))
- **scss:** add `import` & `comment` rules ([b844942](https://github.com/culur/stylelint-config/commit/b844942706a22a64c0cfcd38d94d070f235fe88f))
- **scss:** add `import` rules ([2ec4875](https://github.com/culur/stylelint-config/commit/2ec4875e08576190073b32fe23e2d650b2956154))

## [0.1.2](https://github.com/culur/stylelint-config/compare/v0.1.1...v0.1.2) (2021-06-22)

### Bug Fixes

- remove css indentation rule ([3871f0c](https://github.com/culur/stylelint-config/commit/3871f0c899c11a9849330d46ee69ba9494eb5a85))

## [0.1.1](https://github.com/culur/stylelint-config/compare/v0.1.0...v0.1.1) (2021-03-17)

### Bug Fixes

- update import ([9e4beb8](https://github.com/culur/stylelint-config/commit/9e4beb883c7bf5fd22c53033d9805cbdd83f53d2))

# [0.1.0](https://github.com/culur/stylelint-config/compare/v0.0.1...v0.1.0) (2021-02-09)

### Features

- **stylelint:** add config ([68f86e4](https://github.com/culur/stylelint-config/commit/68f86e4583abdacee727fe7d2e52f8e2baa63601))
