# CUI Authorization module
Version 1.0

### Description
Cui-authorization is a module that depends on [ui-router](https://github.com/angular-ui/ui-router) and will allow a user to navigate through pages / view page elements based on his entitlements/permissions.

What this means is, given an array of entitlements for a certain user (typically the one logged in), we can choose which DOM elements to show and even block ui-router states and re-route the user to a 'login' or 'not-authorized' state.