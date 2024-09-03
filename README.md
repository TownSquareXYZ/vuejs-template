# Telegram Mini Apps Vue Template

This template demonstrates how developers can implement a single-page application on the Telegram
Mini Apps platform using the following technologies and libraries:

- [Vue](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [@tma.js SDK](https://docs.telegram-mini-apps.com/packages/tma-js-sdk)
- [Vite](https://vitejs.dev/)

> The template was created using [npm](https://www.npmjs.com/). Therefore, it is required to use
> it for this project as well. Using other package managers, you will receive a corresponding error.

## Install Dependencies

If you have just cloned this template, you should install the project dependencies using the
command:

```Bash
yarn install
```

## Scripts

This project contains the following scripts:

- `dev`. Runs the application in development mode.
- `build`. Builds the application for production.
- `lint`. Runs [eslint](https://eslint.org/) to ensure the code quality meets the required
  standards.
- `deploy`. Deploys the application to GitHub Pages.

To run a script, use the `yarn` command:

```Bash
yarn {script}
# Example: yarn dev
```

## Create Bot and Mini App

Before you start, make sure you have already created a Telegram Bot. Here is
a [comprehensive guide](https://docs.telegram-mini-apps.com/platform/creating-new-app) on how to
do it.

## Run

Although Mini Apps are designed to be opened
within [Telegram applications](https://docs.telegram-mini-apps.com/platform/about#supported-applications),
you can still develop and test them outside of Telegram during the development process.

To run the application in the development mode, use the `dev` script:

```bash
yarn dev
```

After this, you will see a similar message in your terminal:

```bash
VITE ready in 275 ms

➜  Local:   http://localhost:8000/vuejs-template
➜  press h + enter to show help
```

To view the application, you need to open the `Local`
link (`http://localhost:8000/vuejs-template` in this example) in your browser:

![Application](src/assets/application.png)

It is important to note that some libraries in this template, such as `@tma.js/sdk`, are not
intended for use outside of Telegram.

Nevertheless, they appear to function properly. This is because the `src/mockEnv.ts` file, which is
imported in the application's entry point (`src/index.ts`), employs the `mockTelegramEnv` function
to simulate the Telegram environment. This trick convinces the application that it is running in a
Telegram-based environment. Therefore, be cautious not to use this function in production mode
unless you fully understand its implications.

### Run Inside Telegram

Although it is possible to run the application outside of Telegram, it is recommended to develop it
within Telegram for the most accurate representation of its real-world functionality.

To run the application inside Telegram, [@BotFather](https://t.me/botfather) requires an HTTPS link.

This template already provides a solution.

Navigate to the `vite.config.ts` file and uncomment the usage of the `basicSsl` function. This
function utilizes
the [@vitejs/plugin-basic-ssl](https://www.npmjs.com/package/@vitejs/plugin-basic-ssl) plugin, which
enables the creation of an HTTPS link. Note that this plugin generates a self-signed certificate,
which browsers will recognize as unsafe, resulting in a warning when accessing the app.

After uncommenting the function, run the `dev` script again and observe the output in your terminal:

```bash
VITE ready in 331 ms

➜  Local:   https://localhost:8000/vuejs-template
➜  press h + enter to show help
```

Visiting the `Local` link (`https://localhost:8000/vuejs-template` in this example) in your
browser, you will see the following warning:

![SSL Warning](src/assets/ssl-warning.png)

This browser warning is normal and can be safely ignored as long as the site is secure. Click
the `Proceed to localhost (unsafe)` button to continue and view the application.

Once the application is displayed correctly, submit this link as the Mini App link
to [@BotFather](https://t.me/botfather). Then, navigate
to [https://web.telegram.org/k/](https://web.telegram.org/k/), find your bot, and launch the
Telegram Mini App. This approach provides the full development experience.

### Expose Dev Server

Sometimes, you might want to view the application on other devices.

To expose your development server to local network devices, go to the `vite.config.ts` file and
uncomment the line defining the `host` option.

Alternatively, you can achieve this by running the command `vite --host`.

Here is an example of the output you will see:

```bash
VITE v5.2.12  ready in 257 ms

➜  Local:   https://localhost:8000/vuejs-template
```

All `Network` links listed here are accessible to devices on the same network. Using these links,
those devices will be able to view the application.

> **Important**
>
> Because we are using self-signed SSL certificates, the Android and iOS Telegram applications will
> not be able to display the application. These operating systems enforce stricter security
> measures, preventing the Mini App from loading. To address this issue, refer
> to [this guide](https://docs.telegram-mini-apps.com/platform/getting-app-link#remote).

## Deploy

This boilerplate uses GitHub Pages as the way to host the application externally. GitHub Pages
provides a CDN which will let your users receive the application rapidly. Alternatively, you could
use such services as [Heroku](https://www.heroku.com/) or [Vercel](https://vercel.com).

### Manual Deployment

This boilerplate uses the [gh-pages](https://www.npmjs.com/package/gh-pages) tool, which allows
deploying your application right from your PC.

#### Configuring

Before running the deployment process, ensure that you have done the following:

1. Replaced the `homepage` value in `package.json`. The GitHub Pages deploy tool uses this value to
   determine the related GitHub project.
2. Replaced the `base` value in `vite.config.ts` and have set it to the name of your GitHub
   repository. Vite will use this value when creating paths to static assets.

For instance, if your GitHub username is `townsquarexyz` and the repository name
is `vuejs-template`, the value in the `homepage` field should be the following:

```json
{
  "homepage": "https://townsquarexyz.github.io/vuejs-template/"
}
```

And `vite.config.ts` should have this content:

```ts
export default defineConfig({
  base: '/vuejs-template/',
  // ...
});
```

You can find more information on configuring the deployment in the `gh-pages`
[docs](https://github.com/tschaub/gh-pages?tab=readme-ov-file#github-pages-project-sites).

#### Before Deploying

Before deploying the application, make sure that you've built it and going to deploy the fresh
static files:

```bash
yarn build
```

Then, run the deployment process, using the `deploy` script:

```Bash
yarn deploy
```

After the deployment completed successfully, visit the page with data according to your
username and repository name. Here is the page link example using the data mentioned above:
https://townsquarexyz.github.io/vuejs-template/

### GitHub Workflow

To simplify the deployment process, this template includes a
pre-configured [GitHub workflow](.github/workflows/github-pages-deploy.yml) that automatically
deploys the project when changes are pushed to the `master` branch.

To enable this workflow, create a new environment (or edit the existing one) in the GitHub
repository settings and name it `github-pages`. Then, add the `master` branch to the list of
deployment branches.

You can find the environment settings using this
URL: `https://github.com/{username}/{repository}/settings/environments`.

In case, you don't want to do it automatically, or you don't use GitHub as the project codebase,
remove the `.github` directory.

### GitHub Web Interface

Alternatively, developers can configure automatic deployment using the GitHub web interface. To do
this, follow the link: `https://github.com/{username}/{repository}/settings/pages`.

## TON Connect

This boilerplate utilizes the [TON Connect](https://docs.ton.org/mandarin/develop/dapps/ton-connect/vue)
project to demonstrate how developers can integrate functionality related to TON cryptocurrency.

The TON Connect manifest used in this boilerplate is stored in the `public` folder, where all
publicly accessible static files are located. Remember
to [configure](https://docs.ton.org/develop/dapps/ton-connect/manifest) this file according to your
project's information.

## Useful Links

- [Platform documentation](https://docs.telegram-mini-apps.com/)
- [Telegram developers community chat](https://t.me/devs)
