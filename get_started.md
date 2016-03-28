## Installation

### Prerequisites

**Node & NPM**
* Install [Node](https://nodejs.org/en/)

**Bower**
* Install [Bower](http://bower.io/)
	* Installing Bower with NPM: ```npm install -g bower```
 	* You can verify bower is installed by running: ```bower --version```

**Yeoman** 
* Install [Yeoman](http://yeoman.io/)
 	* Install Yeoman with NPM: ```npm install -g yo```
 	* You can verify Yeoman is installed by running: ```yo --version```

**Grunt**
* Install [Grunt](http://gruntjs.com/)
	* Install Grunt with NPM: ```npm install -g grunt-cli```
 	* You can verify Grunt is installed by running: ```grunt --version```
 
### Start CUI-NG project using Yeoman

This section assumes you have all the prerequisites installed.

* Clone the [CUI-NG Yeoman Github Repository](https://github.com/thirdwavellc/cui-ng-yeoman)
	* Via SSH (Recommended): ```git clone git@github.com:thirdwavellc/cui-ng-yeoman cui-ng-yeoman```
		* SSH Cloning requires the use of a [Github SSH Key](https://help.github.com/articles/generating-ssh-keys/)
	* Via HTTP: ```git clone https://github.com/thirdwavellc/cui-ng-yeoman cui-ng-yeoman```

* Restart your terminal application

* Setup cloned CUI-NG Yeoman project
	* Change directory into the cloned CUI-NG Yeoman project: ```cd cui-ng-yeoman/generator-cui-ng/```
	* Install project dependencies: ```npm install```
	* Link CUI-NG Yeoman to be available to other directories: ```sudo npm link```

* Create new CUI project directory
	* Exit CUI-NG Yeoman project: ```cd ../../```
	* Create new project directory: ```mkdir cui-ng-new-project```
	* Change directory into your new project directory: ```cd cui-ng-new-project```

* Build your starting CUI project
	* Use Yeoman to build your CUI starter project: ```yo cui-ng```

* Start viewing project changes using Grunt
	* At the project root: ```grunt```
		* This will launch the project your default web browser
		* Any changes made to project files will automatically update the project in the browser
 
## Start CUI-Styleguide project using Yeoman

This section assumes you have all the prerequisites installed.

* Clone the [CUI-Styleguide Github Repository](https://github.com/thirdwavellc/cui-styleguide-yeoman)
	* Via SSH (Recommended): ```git clone git@github.com:thirdwavellc/cui-styleguide-yeoman cui-styleguide-yeoman```
		* SSH Cloning required the use of a [Github SSH Key](https://help.github.com/articles/generating-ssh-keys/)
	* Via HTTP: ```git clone https://github.com/thirdwavellc/cui-styleguide-yeoman cui-ng-yeoman```

* Restart your terminal application

* Setup cloned CUI-Styleguide Yeoman project
	* Change directory into the cloned CUI-Styleguide project: ```cd cui-styleguide-yeoman/generator-cui-styleguide/```
	* Install project dependencies: ```npm install```
	* Link CUI-Styleguide Yeoman to be available to other directories: ```sudo npm link```

* Create new CUI-Styleguide project directory
	* Exit CUI-Styleguide Yeoman project: ```cd ../../```
	* Create new CUI-Styleguide project directory: ```mkdir cui-styleguide-new-project```
	* Change directory into your new project directory: ```cd cui-styleguide-new-project```

* Build your starting CUI-Styleguide project
	* Use Yeoman to build your CUI-Styleguide starter project: ```yo cui-styleguide```

* Edit Styleguide as needed
	* Launch browersync to see changes in real time in your default browser: ```grunt```
	* Make style changes in `custom -> scss -> base/block/elements` folders - add your own files and import them in the corresponding `custom-xyz-dir.scss` file

#### Next: [Chapter 1: Reference Modules](chapter1.md)
#### Home: [Table of Contents](README.md)
