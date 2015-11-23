##System Requirements

This tool kit requires the following applications and setups
* Install [Node](https://nodejs.org/en/)
 * This will install Node and NPM 
* [Bower](http://bower.io/)
 * Install Bower by executing this command: ```npm install -g bower```
 * May require ```sudo```
* [Yeoman](http://yeoman.io/)
 * Install Yeoman by executing this command: ```npm install -g yo```
 * May require ```sudo```
* Once Bower and Yeoman are installed, clone the this git repository: git@github.com:thirdwavellc/cui-ng-yeoman
 * ```git clone git@github.com:thirdwavellc/cui-ng-yeoman cui-ng-yeoman```
 * Requires [GitHub SSH Key](https://help.github.com/articles/generating-ssh-keys/)
* Change directory into the generator, install its dependencies then link it so it is available from anywhere
 * ```cd cui-ng-yeoman/generator-cui-ng/```
 * ```npm install```
 * ```sudo npm link```
* Then back out of that directory and make a new, empty directory for your project
 * ```cd ../../```
 * ```mkdir cui-ng-new-project```
 * ```cd cui-ng-new-project```
* Now, in that new directory, run the yeoman generator and you'll have some prompts to help set up the project.
 * ```yo cui-ng```
