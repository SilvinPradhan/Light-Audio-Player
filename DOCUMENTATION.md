# AudioPlayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Code Editor

You can use any code editors such as VSCode, Atom, Sublime Text, Notepad++, or any other IDEs. However, VSCode is mostly preferred.

### If you are willing to clone the repo and try it out for yourself.

First: Open up a fresh Vscode window.
Second: Open up your terminal and TYPE: git clone https://github.com/SilvinPradhan/Light-Audio-Player.git

## Install Node_Modules

Do not forget to run "npm install" once you have cloned the repo. It will be necessary for updating of package-lock.json and reinstalling of node_modules.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Methods For Deployment with Firebase

You can follow up the steps from https://firebase.google.com/docs/cli

                    OR

1.  npm install -g firebase-tools

2.  firebase login

    - To further change to any other google accounts, just type "firebase logout"
    - Then it redirect's you to a page for selecting the account of your choice.

3.  firebase init
    At the end of initialization, Firebase automatically creates the following two files at the root of your local app directory:
    - A firebase.json configuration file that lists your project configuration.
    - A .firebaserc file that stores your project aliases.

You're about to initialize a Firebase project in this directory:

1. It will ask you some major questions:
   - Are you ready to proceed? Yes
   - Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. On your keyboard move down to Hosting or any other services like Firestore, Database, Authentication, if needed.
     Else SELECT: Hosting: Configure and deploy Firebase Hosting sites
     And press Space bar to select the feature.
2. === Project Setup ===

- First, let's associate this project directory with a Firebase project. You can create multiple project aliases by running firebase use --add, but for now we'll just set up a default project.
- Please select an option: Use an existing project ? Select a default Firebase project for this directory: Here Select your Firebase Project that you have registered.

6.  === Hosting Setup ===

- Your public directory is the folder (relative to your project directory) that will contain Hosting assets to be uploaded with firebase deploy.

* What do you want to use as your public directory? dist/AudioPlayer (Before hitting Enter, first make your project Production Ready!)

      * For this, go on to a different command-line on your project, and type "ng build --prod"
      * It will create a dist folder which consists of "index.html".

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

7.  Configure as a single-page app (rewrite all urls to /index.html)? Yes
8.  Set up automatic builds and deploys with GitHub? No
9.  IMPORTANT PART: 🤬
    File dist/ProjectName/index.html already exists. Overwrite? No
10. === Deploying ===
    firebase deploy

## Deploy complete!

You can find the Web Application on : https://pwa-apps-6ac75.web.app
