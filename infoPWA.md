# How you can convert an existing Angular 9 Application to a PWA app.

## Angular Service Worker Step-By-Step Guide for turning your Application into a PWA

With the Angular Service Worker and the Angular CLI built-in PWA support, it's now simpler than ever to make our web application downloadable and installable, just like a native mobile application.

### To do:

- We will cover how we can configure the Angular CLI build pipeline to generate applications that in production mode are downloadable and installable, just like native apps.
- We will also add an App Manifest to our PWA, and make the application one-click installable.

## Performance Benefits and Offline Support

The performance benefits of installing all our Javascript and CSS bundles on the user browser makes application bootstrapping much faster. How much faster? This could go from several times faster to an order of magnitude faster, depending on the application.

## STEPS

1.  Scaffolding an Angular PWA Application using the Angular CLI

- Upgrade the Angular CLI to the latest version:
  npm install -g @angular/cli@latest
- If you want to try the latest features, it's also possible to get the next upcoming version:
  npm install -g @angular/cli@next
- And with this in place, we can now scaffold an Angular application and add it **Angular Service Worker** support:
  ng new angular-pwa-app --service-worker

* We can also add the Angular Service Worker to an existing application using the following command:
  ng add @angular/pwa --project <name of project as in angular.json>

2. Understanding How To Add Angular PWA Support Manually
   - The application scaffolded is almost identical to an application without PWA support. Let's see what this flag includes, in case you need to upgrade an application manually.
   - We can see that the @angular/service-worker package was added to package.json. Also, there is a new flag serviceWorker set to true in the CLI configuration file angular.json:
     ![image]

**NOTE**

What does the "serviceWorker" flag do?
This flag will cause the production build to include a couple of extra files in the output dist folder.

- The Angular Service Worker file ngsw-worker.js
- The runtime configuration of the Angular Service Worker ngsw.json

**Note** ngsw stand for "Angular Service Worker".

What does the ServiceWorkerModule do?
![image]

This module provides a couple of injectable services:

- SwUpdate for managing application version updates
- SwPush for doing server Web Push notifications

## The Build Configuration file ngsw-config.json

The CLI has also added a new configuration file called ngsw-config.json, which configures the Angular Service Worker runtime behavior, and the generated file comes with some intelligent defaults.

Here is what the file looks like:
![image]

**Important!**
This file contains the default caching behavior or the Angular Service Worker, which targets the application static asset files: the index.html, the CSS and Javascript bundles.

## Caching static files that are the application itself

The files under the app section are the application: a single page is made of the combination of its index.html plus its CSS and Js bundles. These files are needed for every single page of the application and cannot be lazy loaded.

The Service worker will not wait for these files to be requested by the application, instead, it will download them ahead of time and cache them so that it can serve them the next time that they are requested.

This is a good strategy to adopt for the files that together make the application itself (the index.html, CSS and Javascript bundles) because we already know that we will need them all the time.

4.  Running and Understanding the PWA Production Build
    The Angular Service Worker will only be available in production mode, so first do a production build of our application:

        ng build --prod

    ### What is the ngsw.json file?

    This is the runtime configuration file, that the Angular Service worker will use. This file is built based on the ngsw-config.json file, and contains all the information needed by the Angular Service Worker to know at runtime about which files it needs to cache, and when.

5.  Launching an Angular PWA in Production Mode
    Start the application in production mode, and in order to do that, we are going to need a small web server. You can use the server provided by FIREBASE or HEROKU or build your own basic server using ExpressJS.

With the server running, then head over to http://localhost:8080 OR your own Local Server, and see what we have running using the Chrome Dev Tools:

![image]

All the Javascript and CSS files, plus even the index.html have all been downloaded in the background and installed in the browser for later use.

These files can all be found in Cache Storage, using the Chrome Dev Tools:

![image]

### Taking the Application Offline
To confirm that the application is indeed downloaded and installed into the user browser, let's do one conclusive test: let's bring the server down by hitting Ctrl+C.

Finally, hit refresh after shutting down the http-server process: you might be surprised that the application is still running, we get the exact same screen!1
