##System Requirements & Setup Guide

This tool kit requires the following applications. Follow the steps below to set up the project.
* Install [Node](https://nodejs.org/en/)
 * This will install Node and NPM
* Install [Bower](http://bower.io/)
 * Install Bower by executing this command: ```npm install -g bower```
 * May require ```sudo```
* Install [Yeoman](http://yeoman.io/)
 * Install Yeoman by executing this command: ```npm install -g yo```
 * May require ```sudo```
* Once Bower and Yeoman are installed, clone this git repository: [https://github.com/thirdwavellc/cui-ng-yeoman](https://github.com/thirdwavellc/cui-ng-yeoman) using your preferred method (HTTP, SSH, or Subversion as suggesteded by GitHub)
 * HTTP: ```git clone https://github.com/thirdwavellc/cui-ng-yeoman cui-ng-yeoman``` 
 * SSH: ```git clone git@github.com:thirdwavellc/cui-ng-yeoman cui-ng-yeoman```
   * SSH Clone Requires [GitHub SSH Key](https://help.github.com/articles/generating-ssh-keys/)
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
