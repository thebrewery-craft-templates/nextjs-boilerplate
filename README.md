# Craft Cloud Code & NextJS Boilerplate

> This Cloud Code supports Node.js LTS version, nodemon, Jasmine, ESLint & ES6 modules.

Please read our blog about writing better Cloud Code - https://docs.thebrewery.app/blog/2021/05/20/better-cloud-code 

## The Basics

 - **What is Craft** - A fully-managed serverless API development platform with scalable NodeJS Rest & GraphQL API, easy to use CMS, CRUD, Object and File storage, built-in Hosting, User Management, Push Notifications, System Emails, Cloud functions & Jobs, Real-time messages, and more out of the box.
 
 - **What is Next.js** - A great JavaScript framework that lets you easily build a complete web application with React and server-side rendering. 
 
 - **What is Cloud Code?** - For complex apps, sometimes you just need a bit of logic that isn’t running on web browser or mobile device. Cloud Code makes this possible. Cloud Code is easy to use because it’s built on the same Parse JavaScript SDK that powers thousands of apps. The only difference is that this code runs in your Parse Server rather than running on the user’s mobile device or web browser. When you update your Cloud Code, it becomes available to all web and mobile environments instantly. You don’t have to wait for a new release of your application. This lets you change app behavior on the fly and add new features faster.


## How does this work?

The project is developed as a Next.js boilerplate for Craft applications. The platform allows implementation of server-side logic and has a built-in Express, which is directly mounted to the server. We use Express for handling the Next.js and you may find the respective logic at `cloud/app.js`


<br/>

# Let's start brewing!

### 1. Node Version

We highly recommend the LTS version (Node.js 12 or higher).

### 2. Cloud Code development

#### 2.1. For Parse-based code

All your Parse-based code must reside inside `./cloud` folder.

`./cloud/main.js` is the root file which we import on Craft's cloud. **Don't change the name of the cloud directory nor move it**, or else your Cloud Code will not run properly.

For Parse Cloud Code reference and guide:

- https://docs.parseplatform.org/cloudcode/guide/

#### 2.2. For Express-based code

All your Express-based code must reside inside `./express` folder.

> Remember that Express-based code does not have API authentication/authorization support. You need to implement your own authentication/authorization to make your Express-based API secure.

### 4. Deploying your code

When you `git push` changes to the `master` branch of this repo, Craft automatically deploys the code to the servers that your app is working on.

> Remember every push to the `master` branch triggers a deploy. If you want to push you changes without triggering of a deploy, you can push them to another branch, for example `development` branch and when you are done with all the changes ... just merge it with the `master` branch.

<br/><br/>

# Test Craft Cloud Code locally on your computer

So, you have created your first Craft app that comes with built in cloud code functionality and are now wondering what would be the best way to test it. Of course, one of the obvious solutions would be to do a `git push` every time, then test it through the API Console, another REST or GraphQL client, or your app directly. However, you and I both know that there has to be a better way, right?

## Run a local instance of Cloud Code

Running a local instance of the Parse Server with your Cloud Code is the first step you should take as it will allow you to iterate on your app much faster and consequently allow us to debug it. Here's how:

### 1. Clone the source of your app

You can go to your Gitlab profile and find the repo of your app. It will be in `craft-okd4 > [your project group] > [your app name] > cloud-code-app-name`

After you have the repo URL, go to your terminal and run `git clone <url>`.

### 2. Install the node modules of your app

This will require you to have **node.js** and **npm** installed on your system. We recommend **node.js v12.x** or the latest LTS version. We also recommend using yarn as an alternative. Install yarn globally - `npm install yarn -g`

```
npm install
-or-
yarn install
``` 

### 3. Open the directory in your favorite Editor/IDE

We highly recommend to use Visual Studio Code.

#### 3.1. Configure your local Parse Server

>Please make sure you have PostgreSQL client and server installed on your local machine. You can also install pgadmin4 to manage your database. And create the database that you will use for your local instance. 

Make necessary adjusments to your `parse-config.js` if needed. Keep in mind that this configuration will **only** affect your local Parse Server. It will look something like this:

```javascript
module.exports = {
  databaseURI:
    process.env.DATABASE_URI ||
    "postgres://postgres:postgres@localhost:5432/parse", //format: "postgres://user:password@localhost:5432/dbname"
  appId: process.env.APP_ID || "myAppId",
  clientKey: process.env.CLIENT_KEY || "myClientKey",
  masterKey: process.env.MASTER_KEY || "masterKey",
  serverURL: process.env.SERVER_URL || "http://localhost:1337/parse",
  graphQLServerURL:
    process.env.GRAPHQL_SERVER_URL || "http://localhost:1337/graphql",
  javascriptKey: process.env.JAVASCRIPT_KEY || "myJSKey",
  restAPIKey: process.env.REST_API_KEY || "restAPIKey",
  cloud: process.env.PARSE_CLOUD_CODE || "./cloud/main.js",
  isDev: process.env.IS_DEVELOPMENT || 1, //this will set some rules for local development
  liveQuery: {
    classNames: [], // List of classes (from My Apps > Your App > Dasnboard > Browser) to support for query subscriptions example: [ 'User', 'Posts', 'Comments' ]
  },
  verbose: false, // Set the logging to verbose
};
```

Here, you can change things like your **Application Id** and **Master Key**. You will be running this Parse instance only locally, but it's still a good practice to change your **Master Key**.

In case you want to use the same data as your Craft app, you can simply import it in your local PostgreSQL.

We are using [Adminer](https://www.adminer.org/), a DB management tool and we have a great tutorial on that - [Managing Database Using Adminer](https://serverpilot.io/docs/how-to-manage-your-database-with-adminer/).

If you want to export/import data from your Craft app, you can use your Adminer credentials from your Craft app **Settings** page.

#### 3.2. Run it

After you have set it all up, it's time to run your Cloud Code:

```
npm run dev
-or-
yarn run dev
```

#### 3.3. Check it

Check that everything is working as expected by running:

`curl localhost:1337/parse/health`
<br/><br/>

By the way, this is the code for connecting a JavaScript SDK instance to your local server looks like, in case you would want to test some queries or test your mobile app or frontend app.

```javascript
Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");
Parse.serverURL = "http://localhost:1337/parse/";
```

⚠️ Please note that the **_master key_** should only be used in safe environments and **_never_** on client side.

For more info on how to use Javascript SDK on client side, pls visit the official [Parse Javascript Guide](https://docs.parseplatform.org/js/guide/)

#### 3.4 Sample Cloud Code Function Query (via cURL)

For Parse-based functions:

Query `parse/functions/<function-name>` via POST

```bash
$ curl -X POST \
        -H "X-Parse-Application-Id: your-app-id" \
        -H "X-Parse-Master-Key: your-master-key" \
        http://localhost:1337/parse/functions/hello
{"result":"Hello! and welcome to Cloud Code (Parse) Functions --from Craft Team"}%

```

For Express-based functions:

```bash
$ curl http://localhost:1337/hello_craft
Hello! and welcome to Cloud Code (Express) Functions --from Craft Team%
```

<br/>

#### 3.5 Parse Dashboard

Parse Dashboard is a standalone dashboard for managing your Parse Server apps.

Your app's Parse dashboard is accessible at http://localhost:1337/dashboard

Login credentials:
```
username: admin
password: password
```

<br/><br/>

# Helpful Scripts

These scripts can help you to develop your app for Cloud Code (replace `npm` with `yarn`, in case you use yarn):

`npm run dev` will start your Parse Server in development mode (recommended when working on local).<br/>
`npm start` will start your Parse Server in production mode.<br/>
`npm run watch` will start your Parse Server and restart if you make any changes.<br/>
`npm run lint` will check the linting of your cloud code, tests and index.js, as defined in .eslintrc.json.<br/>
`npm run lint-fix` will attempt fix the linting of your cloud code, tests and index.js.<br/>
`npm run prettier` will help improve the formatting and layout of your cloud code, tests and index.js, as defined in .prettierrc.<br/>
`npm run test` will run any tests that are written in /spec.<br/>
`npm run coverage` will run tests and check coverage. Output is available in the /coverage folder.

<br/>

# Using the Job Scheduler

This library is a minimalist tool that fetches all jobs scheduled objects and schedules cron tasks that will run the scheduled jobs.

Simply create your job, for example

```javascript
Parse.Cloud.job("myJob", (request) => {
  // params: passed in the job call
  // headers: from the request that triggered the job
  // log: the ParseServer logger passed in the request
  // message: a function to update the status message of the job object
  const { params, headers, log, message } = request;
  message("I just started");
  return doSomethingVeryLong(request);
});
```

Then, go to your app, ```Craft > My Apps > Your App > Dashboard > Jobs > Schedule a Job```
, and schedule that job (`myjob`) you have just created.

<br/><br/>

# Updating and Deploying your changes

All changes to your code (i.e. pushing/merging code to master) will be automatically deploy via Gitlab CI/CD workflow.

To check if your deployment is finished and Cloud Code is up and running, pls use this URL to get the status:

```bash
<your cloud code URL>/health
```

And it will response:

```bash
{"status":"ok"}
```

<br/>

# (Optional) Running on Remote Local using Gitpod

Gitpod is an open source Cloud IDE and developer platform automating the provisioning of ready-to-code development environments. It streamlines developer workflows by providing prebuilt, collaborative development environments in your browser.
Designed for applications running in the cloud, Gitpod frees engineering teams from the friction of manually setting-up local dev environments, saving dozens of hours and enabling a new level of collaboration to create applications much more quickly than ever before.

Free Gitpod access comes with free 50 hours/month access

For more info, please visit gitpod.io

Your Cloud Code repo is gitpod-ready, just type this URL format in your browser: 

```https://gitpod.io/#https://your-full-repo-url```

For example:

```https://gitpod.io/#https://gitlab.stratpoint.dev/craft/xxxxx/xxxxx/your-project-name```

<br/>

