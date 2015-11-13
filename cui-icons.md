# CUI Icons
Version 1.0


### Description


### Usage Example
Replace #covisint-logo with the name of your svg and set viewBox to your svg's size.

Note: Your icons will need to follow a certain syntax to be accepted by the build task:
* No hardcoded fills (or it won't be customizable with css)
* All the paths should be wrapped in a group with an id equal to its filename. (everything outside of that group will be ignored

```html
  <svg class="cui-header__svg-logo" viewBox="0 0 640 124"><use xlink:href="bower_components/cui-icons/dist
```

### How it works / features



