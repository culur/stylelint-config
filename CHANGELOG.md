# `@culur/stylelint-config` changelog.

## [1.2.0](https://github.com/culur/stylelint-config/compare/v1.1.0...v1.2.0) (2022-06-02)

### Dependencies

- **deps:** update actions/checkout action to v3 ([1cf131a](https://github.com/culur/stylelint-config/commit/1cf131a0d48073fe7b07fb176e33a91ae324ccbd))
- **deps:** update actions/setup-node action to v3 ([8aba056](https://github.com/culur/stylelint-config/commit/8aba056a78c2e4656a6e21f3bc8da7b7133cf7e6))
- **deps:** update dependencies ([#377](https://github.com/culur/stylelint-config/issues/377)) ([681d27b](https://github.com/culur/stylelint-config/commit/681d27b781468a387d6ee5a7620ecfd6032f510e))
- **deps:** update dependency @culur/prettier-config to v1 ([61ca948](https://github.com/culur/stylelint-config/commit/61ca948192de46420e143369d6266bf3598100cc))
- **deps:** update dependency postcss-html to ^1.4.1 ([19c7274](https://github.com/culur/stylelint-config/commit/19c72743b70ce6710a5d684cfa1057d708e9893a))
- **deps:** update dependency postcss-scss to ^4.0.4 ([d6dbd57](https://github.com/culur/stylelint-config/commit/d6dbd57d636334fe8927dc0c0e5872d6b56aaa65))
- **deps:** update dependency stylelint to v14.8.5 ([8d22d43](https://github.com/culur/stylelint-config/commit/8d22d43dd827d4974ce58f8857f95666e8555df9))
- **deps:** update dependency stylelint-config-hudochenkov to v7 ([80da425](https://github.com/culur/stylelint-config/commit/80da42559f9da5d8948d40d1bf40df93f07c3d00))
- **deps:** update dependency stylelint-config-standard-scss to v4 ([04b5120](https://github.com/culur/stylelint-config/commit/04b51209c3417b92efbe9016055cfa751db5187f))
- **deps:** update dependency stylelint-scss to ^4.2.0 ([e82aba1](https://github.com/culur/stylelint-config/commit/e82aba141568cf129decbfb616ba91b1182ca5e0))
- **deps:** update yarn to v3.2.1 ([b478774](https://github.com/culur/stylelint-config/commit/b4787748af1b3c289e4aefbb3c2f57546dbbbff9))

## [1.0.0](https://github.com/culur/stylelint-config/compare/v0.2.0...v1.0.0) (2022-02-25)

### ⚠ BREAKING CHANGES

- **rules/order:** update order based on `stylelint-config-hudochenkov/order`
- **deps-optional:** remove `tailwindcss` from `optionalDependencies`
- **deps:** bump `stylelint` & `stylelint-config-*` to the latest version

### Features

- **css:** remove duplicated rule `at-rule-empty-line-before` ([3e8ece6](https://github.com/culur/stylelint-config/commit/3e8ece63774abceb92a724683d2cef0577f1a4d7))
- **css:** set indentation to null ([1c72e0f](https://github.com/culur/stylelint-config/commit/1c72e0ff3396c267d3a758b0eea49917c917c78c))
- **index:** re-structure index ([6dfcc90](https://github.com/culur/stylelint-config/commit/6dfcc902e00f31679a4d5b2495563345a3f4c890))
- **rules/order:** update order based on `stylelint-config-hudochenkov/order` ([da7d576](https://github.com/culur/stylelint-config/commit/da7d57683603d5bf08b66ff068f4ec0e3ba20e46))
- **scss:** extends `stylelint-config-*-scss` ([03856d1](https://github.com/culur/stylelint-config/commit/03856d1482bc98396f0463282f3358d9b89ecf89))
- **scss:** overrides customSyntax `postcss-sass` & `postcss-scss` ([178584f](https://github.com/culur/stylelint-config/commit/178584f288efc22ca98f26d8fb5aef9a92a3667b))
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
