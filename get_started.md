## **Getting Started**

### **Important Values to Have**

At the outset of your working with the CUI Framework, we assume that you have an instance that has been provisioned to your team.  As a developer, you will also want to ensure that you have the following set of 'secret' information handy.  The example template below can also be used as environment variables in a Postman client as well to make testing calls directly to the APIs a bit easier.

PLEASE NOTE:  This information is extreemly valuable and should only be shared through secure channels.  Either share with encrypted email, through an encrypted knowledge sharing tool or a secure third party tool such as [One Time Secret](https://onetimesecret.com)

```
realmCode:s-awesome-dev01
uihost:https://s-awesome-ui01.covapp.io
originUri:s-awesome-ui01.covapp.io
clientId:GobbleDg00kSetoFch4rs
clientSecret:s$cr$tSetoFch4rs
apigee:https://api.covapp.io
solutionInstanceId:ddab688e-0109-441c-8a20-878c3aa108fd
platformApiBase:https://s-3rdwave-ui01.covapp.io/p/apiProxy
```


### **Prerequisites**

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


### **Start CUI-NG project using Yeoman**

This section assumes you have all the prerequisites installed.

* Install the yeoman generator

  * `sudo npm install -g generator-cui-ng`

* Create new CUI project directory

  * Exit CUI-NG Yeoman project: `cd ../../`
  * Create new project directory: `mkdir cui-ng-new-project`
  * Change directory into your new project directory: `cd cui-ng-new-project`

* Build your starting CUI project

  * Use Yeoman to build your CUI starter project: `yo cui-ng`
  * After you're done going through all the steps you should get a readme that explains how to use and customize the application


## **Start CUI-Styleguide project using Yeoman**

This section assumes you have all the prerequisites installed.

* Clone the [CUI-Styleguide Github Repository](https://github.com/thirdwavellc/cui-styleguide-yeoman)

  * Via SSH \(Recommended\): `git clone git@github.com:thirdwavellc/cui-styleguide-yeoman cui-styleguide-yeoman`
    * SSH Cloning required the use of a [Github SSH Key](https://help.github.com/articles/generating-ssh-keys/)

  * Via HTTP: `git clone https://github.com/thirdwavellc/cui-styleguide-yeoman cui-ng-yeoman`

* Restart your terminal application

* Setup cloned CUI-Styleguide Yeoman project

  * Change directory into the cloned CUI-Styleguide project: `cd cui-styleguide-yeoman/generator-cui-styleguide/`
  * Install project dependencies: `npm install`
  * Link CUI-Styleguide Yeoman to be available to other directories: `sudo npm link`

* Create new CUI-Styleguide project directory

  * Exit CUI-Styleguide Yeoman project: `cd ../../`
  * Create new CUI-Styleguide project directory: `mkdir cui-styleguide-new-project`
  * Change directory into your new project directory: `cd cui-styleguide-new-project`

* Build your starting CUI-Styleguide project

  * Use Yeoman to build your CUI-Styleguide starter project: `yo cui-styleguide`

* Edit Styleguide as needed

  * Launch browersync to see changes in real time in your default browser: `grunt`
  * Make style changes in `custom -> scss -> base/block/elements` folders - add your own files and import them in the corresponding `custom-xyz-dir.scss` file


