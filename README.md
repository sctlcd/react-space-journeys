# [react-space-journeys](https://react-space-journeys.vercel.app)

<br />
<img src="https://github.com/sctlcd/react-space-journeys/blob/main/design/react-space-journeys-preview.png" alt="react-space-journeys" width="800">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Available Scripts](#availableScripts)

4. [Deployment](#deployment)

   - [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
   - [Deployment – Live website](#deploymentLiveWebsite)

5. [Credits](#credits)

   - [Media](#media)

---

## Introduction <a name="introduction"></a>

Creating a Rick and Morty's space journey using [React](https://reactjs.org/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Back to [top](#tableOfContents)

---

## Run the project locally <a name="#runLocally"></a>

- Runs the app in the development mode.\
  Open http://localhost:3000 to view it in the browser.
  ```
  cd react-space-journeys
  npm i
  npm start
  ```

Back to [top](#tableOfContents)

---

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Back to [top](#tableOfContents)

---

## Deployment <a name="#deployment"></a>

### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite:
   - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
   - Please see `.nvmrc` file at the root of `react-space-journeys` repo.
   - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc. Here is [NVM for Windows](https://github.com/coreybutler/nvm-windows)
2. In GitHub click on the repository nammed [react-space-journeys](https://github.com/sctlcd/react-space-journeys)
3. Clone the repository locally. Run

   ```
   git clone https://github.com/sctlcd/react-space-journeys.git
   ```

4. Install all modules listed as dependencies in package.json

   ```
   cd react-space-journeys
   npm i
   ```

   note: in this app
   ...

5. Runs the app in the development mode.
   Open http://localhost:3000 to view it in the browser.
   ```
   cd react-space-journeys
   npm start
   ```

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

#### Firebase <a name="#firebase"></a>

[react-space-journeys](https://github.com/sctlcd/react-space-journeys) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)

   ```
   npm install -g firebase-tools
   ```

2. Create `firebase.json` and `.firebaserc` at the root of your project with the following content:

   `firebase.json`:

   ```
   {
     "hosting": {
       "public": "build",
       "ignore": [],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

   `.firebaserc`:

   ```
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
   ```

3. After running `npm run build`, deploy using the command `firebase deploy`.

=> live link: https://react-space-journeys.web.app/ (example link - not in use)

Back to [top](#tableOfContents)

#### Vercel <a name="#vercel"></a>

[react-space-journeys](https://github.com/sctlcd/react-space-journeys) live website is currently deployed on [Vercel](https://vercel.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Create a [Vercel](https://vercel.com/) account and/or log in to your [Vercel](https://vercel.com/) account

2. Install Vercel package in the project:
    ```
    npm i vercel
    ```

3. Add a deploy script in the package.json file
    ```
    {
      "scripts": {
        // ...
        "deploy": "vercel --prod"
      },
    }
    ```

4. To login run:
    ```
    npx vercel login
    ```

5. In the terminal run:
    ```
    npm run deploy
    ```

6. Follow the instructions
    ```
    $ npm run deploy

    > react-space-journeys@0.1.0 deploy
    > vercel --prod

    Vercel CLI 34.2.0
    ? Set up and deploy “D:\github\react-threejs\react-threejs-car-racing”? yes
    ? Which scope do you want to deploy to? sctlcd's projects
    ? Link to existing project? no
    ? What’s your project’s name? react-space-journeys
    ? In which directory is your code located? ./
    Local settings detected in vercel.json:
    Auto-detected Project Settings (Create React App):
    - Build Command: react-scripts build
    - Development Command: react-scripts start
    - Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
    - Output Directory: build
    ? Want to modify these settings? no
    🔗  Linked to sctlcds-projects/react-space-journeys (created .vercel and added it to .gitignore)
    🔍  Inspect: https://vercel.com/sctlcds-projects/react-space-journeys/5ftNRUrzpM6NqrxTt1snhqnGLSFo
    ✅  Production: https://react-space-journeys-ldxp3c4yq-sctlcds-projects.vercel.app
    ```

    => live link: https://react-space-journeys.vercel.app/

Back to [top](#tableOfContents)

---

## Credits <a name="credits"></a>

### Media <a name="media"></a>

- [alien_1](https://www.vecteezy.com/png/54484327-alien-space-cartoon) - [Vecteezy](https://www.vecteezy.com/) | copyright [Idalba Granada](https://www.vecteezy.com/members/studiogstock)
- [alien_2](https://www.vecteezy.com/png/54484331-alien-on-asteroid) - [Vecteezy](https://www.vecteezy.com/) | copyright [Idalba Granada](https://www.vecteezy.com/members/studiogstock)
- [alien_3](https://www.vecteezy.com/png/54716481-astronaut-encounters-multi-eyed-space-organism) - [Vecteezy](https://www.vecteezy.com/) | copyright [Kenil Rafaliya](https://www.vecteezy.com/members/vectorboss009)
- [space_ship_1](https://www.vecteezy.com/png/48421954-3d-rendering-of-vibrant-orange-rocket-on-transparent) - [Vecteezy](https://www.vecteezy.com/) | copyright [dan putra](https://www.vecteezy.com/members/111954954489864215394)
- [space_ship_3](https://www.vecteezy.com/png/54484321-alien-in-a-ufo) - [Vecteezy](https://www.vecteezy.com/) | copyright [Idalba Granada](https://www.vecteezy.com/members/studiogstock)
- [space_ship_4](https://www.vecteezy.com/png/23673673-green-alien-spaceship-ufo-ai-generative) - [Vecteezy](https://www.vecteezy.com/) | copyright [Aleksander Polanowski](https://www.vecteezy.com/members/ap301805665560)
- [space_ship_6](https://www.vecteezy.com/png/36572296-ufo-unidentified-flying-object-with-green-alien-inside-creatures-from-outside-planet-earth) - [Vecteezy](https://www.vecteezy.com/) | copyright [Kwee Amanda Alamsyah
](https://www.vecteezy.com/members/amandalamsyah)
- [planet_3](https://www.vecteezy.com/png/37927286-ai-generated-fictional-3d-cartoon-planets-isolated-on-transparent-background) - [Vecteezy](https://www.vecteezy.com/) | copyright [sm wizard](https://www.vecteezy.com/members/sm_wizard)
- [planet_5](https://www.vecteezy.com/png/37929126-ai-generated-fictional-3d-cartoon-planets-isolated-on-transparent-background) - [Vecteezy](https://www.vecteezy.com/) | copyright [sm wizard](https://www.vecteezy.com/members/sm_wizard)
- [title](https://www.freepnglogos.com/images/rick-and-morty-31015.html) - [Freepnglogos](https://www.freepnglogos.com/) | copyright [	John D.](https://www.freepnglogos.com/images/rick-and-morty-31015.html#user)
- [rick](https://www.freepnglogos.com/images/rick-and-morty-30998.html) - [Freepnglogos](https://www.freepnglogos.com/) | copyright [	John D.](https://www.freepnglogos.com/images/rick-and-morty-31015.html#user)
- [portal](https://www.pngkey.com/detail/u2q8u2q8a9o0u2e6_portal-gun-rick-and-morty-portal-gun-rick/) - [pngkey](https://www.pngkey.com/) | copyright [Perler Beads](https://www.pngkey.com/detail/u2q8u2q8a9o0u2e6_portal-gun-rick-and-morty-portal-gun-rick/)
- [portal_gun](https://www.pngkey.com/detail/u2q8a9w7t4r5a9q8_rick-and-morty-png-portal-rick-and-morty/) - [pngkey](https://www.pngkey.com/) | copyright [Png](https://www.pngkey.com/detail/u2q8a9w7t4r5a9q8_rick-and-morty-png-portal-rick-and-morty/)
- [favicon.ico](https://www.flaticon.com/free-icon/planet_2240744?term=space&page=1&position=18&origin=search&related_id=2240744) - [Flaticon](https://www.flaticon.com/) - [smalllikeart](https://www.flaticon.com/authors/smalllikeart)

Back to [top](#tableOfContents)

---
