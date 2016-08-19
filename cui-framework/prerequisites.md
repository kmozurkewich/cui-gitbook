## **Getting Started**

### **Important Values**

At the outset of your working with the CUI Framework, we assume that you have an instance that has been provisioned to your team.  As a developer, you will also want to ensure that you have the following set of 'secret' information handy.  The example template below can also be used as environment variables in a Postman client as well to make testing calls directly to the APIs a bit easier.

PLEASE NOTE:  This information is extreemly valuable and should only be shared through secure channels.  Either share with encrypted email, through an encrypted knowledge sharing tool or a secure third party tool such as [One Time Secret](https://onetimesecret.com)

```
realmCode:s-awesome-ui01
uihost:https://s-awesome-ui01.covapp.io
originUri:s-awesome-ui01.covapp.io
clientId:GobbleDg00kSetoFch4rs
clientSecret:s$cr$tSetoFch4rs
apigee:https://api.covapp.io
solutionInstanceId:ddab688e-0109-441c-8a20-878c3aa108fd
platformApiBase:https://s-3rdwave-ui01.covapp.io/p/apiProxy
```


### **Software Requirements**

Additionaly, the CUI Framework uses modern UI toolsets in order to manage dependencies, run tasks and scaffold your app.  You'll want to have the following tools availabe on your workstation before getting started.

**Node & NPM**

* Install [Node](https://nodejs.org/en/)
* Update npm \(`sudo npm install -g npm`, `npm --v` must return version 3 or greater\)

**Yeoman**

* Install [Yeoman](http://yeoman.io/)
  * Install Yeoman with NPM: `npm install -g yo`
  * You can verify Yeoman is installed by running: `yo --version`


**Grunt**

* Install [Grunt](http://gruntjs.com/)
  * Install Grunt with NPM: `npm install -g grunt-cli`
  * You can verify Grunt is installed by running: `grunt --version`



