# Testing Chromatic project

## About this project

This project is dedicated for testing and developing the design system to validate:

- **Stories:** Component states and interactive behaviors.
- **Styles:** CSS consistency and layout integrity.
- **Chromatic Parameters:** Validation of Chromatic-specific options, snapshot flags, and visual regression settings.

---

## Getting Started

### Installation

To ensure environment stability and avoid compatibility errors, it is **highly recommended** to install dependencies using peer dependency resolution:

```bash
npm install --legacy-peer-deps
```

After installation, run the Storybook Doctor to verify your configuration and detect any potential issues.

### Environment & Secrets

The project uses `.env` files for local development and GitHub Secrets for CI/CD workflows.

**Local Development:** Create a `.env` file in the root directory to store your `CHROMATIC_PROJECT_TOKEN`.
_Note on Script Logic:_ The chromatic script uses a node wrapper to safely inject environment variables.
You must install `dotenv` to use this logic.

```bash
npm install dotenv
```

**CI/CD Deployment:** Ensure the `CHROMATIC_PROJECT_TOKEN` is configured in your GitHub Repository Secrets for automated testing.

### Directory Structure

The repository is organized to separate atomic units from complex test scenarios.

- src/stories/atoms: Smallest functional units (Buttons, Inputs, Icons).

- src/stories/components: Complex UI patterns composed of multiple atoms.

- src/stories/concepts: Specialized tests used to validate Chromatic options and flags (e.g., testing delay, diffThreshold, or forcedColors).

- src/stories/pages: Testing the logic of atoms, components and concepts together.

```
src/
└── stories/
    ├── atoms/
    ├── components/
    ├── concepts/     # Chromatic parameter & flag testing
    └── pages/
```

### Comments

Most components include comments explaining the intent of specific test cases, especially for Play Functions (interaction tests). A primary example is how we manage visual "noise" using the diffThreshold parameter.

For example, the component `ColorGradientBar` generates a complex linear gradient ($color1 \rightarrow color2 \rightarrow color3$) to test the sensitivity of Chromatic’s anti-aliasing and pixel-comparison algorithms.

### Versions

To maintain consistency across development and CI environments, please ensure you are using the following versions:

- **Node**: `v20.x` or higher (I use nvm for managing Node versions).
- **Storybook**: `9.1.17`
- **Chromatic**: `13.2.1`
