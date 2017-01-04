## **Getting Started**

### Target Environment Profile

At the outset of your work with the CUI Framework, we assume that you have an instance that has been provisioned to your team. As a developer, you will also want to ensure that you have the following set of 'secret' information handy.

The example template below is used as your *Target Environment Profile* and is necessary in order to run your IDM application. When you first run your application locally, you will be prompted to enter these values into the profile location in your workstation users' home directory.

We use your *HOME* environment variable to create the directories that house the project environment profile. The *HOME* environment variable is by default created on Linux and OSX operating systems. For Windows users, you will have to create this environment variable if you don't have it setup already. The *HOME* environment variable should resemble `C:\Users\username\`

PLEASE NOTE:  This information is extremely valuable and should only be shared through secure channels.  Either share with encrypted email, through an encrypted knowledge sharing tool or a secure third party tool such as [One Time Secret](https://onetimesecret.com)

```
%YAML 1.2
---
realmCode: s-awesome-ui01
uiHost: "https://s-awesome-ui01.covapp.io"
originUri: s-awesome-ui01.covapp.io
clientId: GobbleDg00kSetoFch4rs
clientSecret: s$cr$tSetoFch4rs
solutionInstanceId: ddab688e-0109-441c-8a20-878c3aa108fd
apigeeHost: "https://api.covapp.io"
platformApiBase: "https://s-3rdwave-ui01.covapp.io/p/apiProxy"
```

As an additional side note, the variables and variable names above are a good template to use as environment variables in a Postman client to make testing calls directly to the APIs easier.

### **Software Requirements**

Additionaly, the CUI Framework uses modern UI toolsets in order to manage dependencies, run tasks and scaffold your app.  You'll want to have the following tools availabe on your workstation before getting started.

#### Node & NPM**

* Install [Node](https://nodejs.org/en/)  (what version of Node????)
* Update npm `sudo npm install -g npm`,
* `npm --v` must return version 3 or greater

#### NVM
* Also, we use NVM (Node Version Manager) to support multiple versions of node required on various projects. [Learn more about NVM](https://github.com/creationix/nvm/blob/master/README.markdown)


#### Yeoman

* Install [Yeoman](http://yeoman.io/)
  * Install Yeoman with NPM: `npm install -g yo`
  * You can verify Yeoman is installed by running: `yo --version`


#### Grunt

* Install [Grunt](http://gruntjs.com/)
  * Install Grunt with NPM: `npm install -g grunt-cli`
  * You can verify Grunt is installed by running: `grunt --version`


