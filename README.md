# Craft Cloud Code & NextJS Boilerplate

> This Cloud Code supports Node.js LTS version, nodemon, Jasmine, ESLint & ES6 modules.

Please read our blog about writing better Cloud Code - https://docs.thebrewery.app/blog/2021/05/20/better-cloud-code 

## The Basics

 - **What is Craft** - A fully-managed serverless API development platform with scalable NodeJS Rest & GraphQL API, easy to use CMS, CRUD, Object and File storage, built-in Hosting, User Management, Push Notifications, System Emails, Cloud functions & Jobs, Real-time messages, and more out of the box.
 
 - **What is Next.js** - A great JavaScript framework that lets you easily build a complete web application with React and server-side rendering. 
 
 - **What is Cloud Code?** - For complex apps, sometimes you just need a bit of logic that isn’t running on web browser or mobile device. Cloud Code makes this possible. Cloud Code is easy to use because it’s built on the same Parse JavaScript SDK that powers thousands of apps. The only difference is that this code runs in your Parse Server rather than running on the user’s mobile device or web browser. When you update your Cloud Code, it becomes available to all web and mobile environments instantly. You don’t have to wait for a new release of your application. This lets you change app behavior on the fly and add new features faster.


## How does this work?

The project is developed as a Next.js boilerplate for Craft applications. The platform allows implementation of server-side logic and has a built-in Express, which is directly mounted to the server. We use Express for handling the Next.js and you may find the respective logic at `cloud/app.js`

## Installation

**1. Clone the repo**

Go to <code>```Craft > My Apps > Your App Settings > Cloud Code Repo```</code> and clone your repo

```
git clone https://gitlab.stratpoint.dev/your-project-name
cd your-project-name
```

**2. Install Dependencies**

```
npm install 

-or-

yarn install
```

**3. ENV Variables**

Make a copy of `.env.example` and name it `.env`

it should be something like this:
```
DATABASE_URI=postgres://postgres:postgres@localhost:5432/test
IS_DEVELOPMENT=1
```

**4. Development**

```
npm run dev

-or-

yarn run dev
```

If everything is okay you should see an output similar to this one:
```
Running on http://localhost:1337
info: Parse LiveQuery Server starts running
Defining routes from exportPathMap
[ ready ] compiled successfully

```
**5. Go wild and unleash your Next.js creativity into the `./src` folder.** 

**6. Open http://localhost:1337 in your browser and see the changes 😉**


## Deploy to The Brewery

Push your changes to master branch and it will automatically deploy via Gitlab CI.



