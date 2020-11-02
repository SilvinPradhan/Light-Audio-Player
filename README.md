# AudioPlayer

npm install -g firebase-tools
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
C:\Users\silvi\AppData\Roaming\npm\firebase -> C:\Users\silvi\AppData\Roaming\npm\node_modules\firebase-tools\lib\bin\firebase.js
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules\firebase-tools\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ firebase-tools@8.14.1
updated 2 packages in 17.36s

C:\Users\silvi\Documents\AudioPlayer>firebase login
Already logged in as silvin.pradhan-2@selu.edu

C:\Users\silvi\Documents\AudioPlayer>firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\silvi\Documents\AudioPlayer

? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: pwa-apps-6ac75 (PWA-apps)
i  Using project pwa-apps-6ac75 (PWA-apps)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist/AudioPlayer
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/AudioPlayer/index.html already exists. Overwrite? No
i  Skipping write of dist/AudioPlayer/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!

C:\Users\silvi\Documents\AudioPlayer>firebase deploy

=== Deploying to 'pwa-apps-6ac75'...

i  deploying hosting
i  hosting[pwa-apps-6ac75]: beginning deploy...
i  hosting[pwa-apps-6ac75]: found 1365 files in dist/AudioPlayer
+  hosting[pwa-apps-6ac75]: file upload complete
i  hosting[pwa-apps-6ac75]: finalizing version...
+  hosting[pwa-apps-6ac75]: version finalized
i  hosting[pwa-apps-6ac75]: releasing new version...
+  hosting[pwa-apps-6ac75]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/pwa-apps-6ac75/overview
Hosting URL: https://pwa-apps-6ac75.web.app
