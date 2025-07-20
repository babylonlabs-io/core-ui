<p align="center">
    <img alt="Babylon Logo" src="https://github.com/user-attachments/assets/b21652b5-847d-48b2-89a7-0f0969a50900" width="100" />
    <h3 align="center">@babylonlabs-io/core-ui</h3>
    <p align="center">Babylon Core UI</p>
    <p align="center"><strong>React</strong> library</p>
    <p align="center">
      <a href="https://www.npmjs.com/package/@babylonlabs-io/core-ui"><img src="https://badge.fury.io/js/@babylonlabs-io%2Fcore-ui.svg" alt="npm version" height="18"></a>
    </p>
</p>

---

## 🚨 Repository Archived

**This repository has been archived and moved to the Babylon Toolkit monorepo.**

The Babylon Core UI package is now maintained as part of the [Babylon Toolkit monorepo](https://github.com/babylonlabs-io/babylon-toolkit/tree/main/packages/babylon-core-ui).

For the latest updates, issues, and contributions, please visit the new location.

---

## 👨🏻‍💻 Installation

To install the package, run the following command:

```console
npm i @babylonlabs-io/core-ui
```

## 📝 Commit Format & Automated Releases

This project uses [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/)
and [**semantic-release**](https://semantic-release.gitbook.io/) to automate
versioning, changelog generation, and npm publishing.

### ✅ How It Works

1. All commits must follow the **Conventional Commits** format.
2. When changes are merged into the `main` branch:
   - `semantic-release` analyzes commit messages
   - Determines the appropriate semantic version bump (`major`, `minor`, `patch`)
   - Tags the release in Git with release change log
   - Publishes the new version to npm

### 🧱 Commit Message Examples

```console
feat: add support for slashing script
fix: handle invalid staking tx gracefully
docs: update README with commit conventions
refactor!: remove deprecated method and cleanup types
```

> **Note:** For breaking changes, add a `!` after the type (
> e.g. `feat!:` or `refactor!:`) and include a description of the breaking
> change in the commit body.

### 🚀 Releasing

Just commit your changes using the proper format and merge to `main`.
The CI pipeline will handle versioning and releasing automatically — no manual
tagging or version bumps needed.


## 📖 Storybook

To view the component library, run:

```console
npm run storybook
```

##  💪 Usage

Provide examples of how to use the library in a project. Include code snippets and explanations.

```javascript
import { ComponentName } from "@babylonlabs-io/core-ui";

function App() {
  return <ComponentName prop="value" />;
}
```
