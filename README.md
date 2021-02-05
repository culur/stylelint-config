# `@culur/stylelint-config`

[Culur](https://github.com/culur)'s config for [Stylelint](https://stylelint.io).

## Features

### Extends

- Our config uses rules from:
  - [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for stylelint.
  - [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier) - Turns off all rules that are unnecessary or might conflict with prettier.
  - [`stylelint-config-hudochenkov`](https://github.com/hudochenkov/stylelint-config-hudochenkov) - The configurations from the author of [`stylelint-order`](https://github.com/hudochenkov/stylelint-order).
- Plugins from:
  - [`stylelint-order`](https://github.com/hudochenkov/stylelint-order) - A plugin pack of order related linting rules for stylelint.
  - [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss) - A collection of SCSS specific linting rules for stylelint.
- And it also has our custom config for [Tailwind CSS](https://tailwindcss.com/) (e.g. [`at-rule-no-unknown`](https://stylelint.io/user-guide/rules/at-rule-no-unknown)) and more.

### Auto detect environment

The config is smart enough to detect the environment automatically.

- If you've installed `sass` or `dart-sass` or `node-sass`, the config will load the `stylelint-scss` plugin and its configurations.

- If you've installed `tailwindcss`:
  - The rule `at-rule-no-unknown` will ignore all [Tailwind CSS's Directives](https://tailwindcss.com/docs/functions-and-directives).
  - The rule `order/order` (from `stylelint-order`) will be modified from `stylelint-config-hudochenkov/order` to our custom to make it can work with [Tailwind CSS](https://tailwindcss.com).

> **Notice**: Please be careful with global installations. The package will treats them as local installations and the `stylelint-scss` plugin will be loaded.

### Dependencies

The following packages are already installed, so you don't need to install them yourself anymore.

- `stylelint-config-hudochenkov`
- `stylelint-config-standard`
- `stylelint-config-prettier`
- `stylelint-order`
- `stylelint-scss`

## Install

Add `@culur/stylelint-config` dependency to your project.

```bash
# Using npm
npm install @culur/stylelint-config --save-dev

# Using yarn
yarn add @culur/stylelint-config --dev
```

## Usage

If you've installed `@culur/stylelint-config` locally within your project, Just set your stylelint config to:

```json
{
  "extends": ["@culur/stylelint-config"]
}
```

If you've globally installed `@culur/stylelint-config` using the `-g` flag, then you'll need to use the absolute path to `@culur/stylelint-config` in your config e.g.

```json
{
  "extends": "/absolute/path/to/@culur/stylelint-config"
}
```

## Related

### Stylelint

- [Stylelint](https://github.com/stylelint/stylelint) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [Stylelint - Configurations](https://stylelint.io/user-guide/configure) - Document on stylelint configurations.

### Library

- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapid UI development.

### Configuration

- [Stylelint Config Standard](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for stylelint.
- [Stylelint Config Prettier](https://github.com/prettier/stylelint-config-prettier) - Turns off all rules that are unnecessary or might conflict with prettier.
- [Stylelint Config Hudochenkov](https://github.com/hudochenkov/stylelint-config-hudochenkov) - The configurations from the author of [`stylelint-order`](https://github.com/hudochenkov/stylelint-order).

### Plugins

- [Stylelint Order](https://github.com/hudochenkov/stylelint-order) - A plugin pack of order related linting rules for stylelint.
- [Stylelint SCSS](https://github.com/kristerkari/stylelint-scss) - A collection of SCSS specific linting rules for stylelint.
