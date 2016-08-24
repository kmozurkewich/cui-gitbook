# CUI i18n
Version 1.0

[Repository & Readme](https://github.com/covisint/cui-i18n) |
[Demo](http://cui.covisint.qa.thirdwavellc.com/cui-i18n-0.0.1-SNAPSHOT/build/index.html)

## Description
Internationalization / localization module for use with angular on CUI products. Extracted from [angular-translate](https://github.com/angular-translate/angular-translate).

This package provides all of the language keys that are used throughout cui-ng projects.

Additionally, a "safe list" of [Countries](https://github.com/Covisint/cui-i18n/blob/master/src/main/java/com/covisint/cui/i18n/ListCountry.java) and [Timezones](https://github.com/Covisint/cui-i18n/blob/master/generateTimezones.js) supported by the Covisint APIs are also managed through this package.

Based on a certain configuration (look at the repo for more info on this) allows to easily internationalize an app.

Along with the angular module, in this repo we also provide a generator that creates the language .json (for javascript) and .properties (for java) based of a google spreadsheet.


