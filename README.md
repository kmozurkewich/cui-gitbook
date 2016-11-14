# CUI Gitbook Project

This project contains a Gitbook relevant to the CUI framework and toolsets.


## Gitbook Plugins
This Gitbook utilizes a few plugins as outlined below.  Also note that we have turned off
the default `highlight` and `sharing` plugins as they are superceded by features with those included below.

### Mermaid
The most significant plugin used is to support [Mermaid](http://knsv.github.io/mermaid/) for drawing diagrams with simple markdown.  For reference, the [background](docs/background.md) page is one of the pages with a Mermaid based diagram.

### Include
This project contains references to all of the Covisint github repositories that are
described within the gitbook.  The source of many pages in this Gitbook are in fact
directly from the respective project repositories.

### Collapsible Menu
Display style to collapse the left menu

### Edit Link
The Edit Link plugin is configured to point to the relevant Covisint Github project when users click on the feature.

### Bootstrap Callout
FOr formatting

### Prism
For formatting of code inline.


## Building this project
Ensure that you have the gitbook command line installed globally

    npm i -g gitbook-cli

Download all of the npm dependencies

    npm install

Install all of the gitbook plugins

    gitbook install

Build the project, output to the 'build' folder

    gitbook build ./ ./build


Alternatively, you can also run the gitbook server.  This will start a local
server on port 4000 with the content of the generated gitbook.

    gitbook serve ./ ./build
