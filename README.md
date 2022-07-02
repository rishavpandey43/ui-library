<div align="center">
  <img width="150" src="https://assets-global.website-files.com/61cda68a44d858d793b97e11/621463ea1ff951808b31e0de_skuad-header-logo.svg" alt="Skuad logo">
  <h1 >Skuad Design System</h1>
</div>

**Skuad Design System** contains foundational React UI components, created using Mui components in it's core to provide a consistent look and feel across the Skuad product in terms of both design and functionality.

## Installation

```bash
yarn add @skuad/ui
```

## Collaboration

We're very delighted to have you join the Skuad community. We're always looking for new collaborators to work together.
Please follow the [Skuad Git Contribution Guidelines](https://gitlab.skuad.in/-/snippets/5) to get started.

## Documentation

This UI library consist of a number of components that are used to build the Skuad frontend applications.

It is divided in two main categories:

- **core** - These are the core components that are used to create UI, which is using Mui components in it's core.
- **web** - These are re-usable components responsible for giving consistent UI/UX.

### Core Components

```javascript
import { Button, Alert, Select } from '@skuad/ui';
// or
import { Button, Alert, Select } from '@skuad/ui/core';
```

### Web Components

```javascript
import {
  Table,
  DetailWithAvatar,
  CalloutData,
  CalloutDataSet,
} from '@skuad/ui';
// or
import {
  Table,
  DetailWithAvatar,
  CalloutData,
  CalloutDataSet,
} from '@skuad/ui/web';
```

### Themes

This library also exposes default theme to be used across the Skuad product.

```javascript
import { SkuadDefaultTheme } from '@skuad/ui';
```

## Storybook

All the components in this library are available in the storybook with their dedicated stories.

Skuad UI Storybook is located at [https://ui-storybook.skuad.in/](https://ui-storybook.skuad.in/)
