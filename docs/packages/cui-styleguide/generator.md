## **Build a Custom cui-styleguide project using Yeoman**

** This project is not currently maintained **

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

