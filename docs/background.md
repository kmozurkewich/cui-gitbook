# Background

The CUI SDK was built to provide various components to assist in:

* Developing a frontend UI
* Integrating various brand styling to the UI
* Connecting it to the Covisint Platform Services.

## High Level Architecture

```mermaid
graph TD;
    subgraph Covisint Platform
        cuiProxy-->pApiGateway[Api Gateway]
        pApiGateway-->pAuthz[Authz Policies]
        pAuthz-->pApi["Platform API(s)"]
        cuiProxy-->cApi[Custom Api Gateway]
        cApi-->cAuthz["Custom Api Endpoint(s)"]
        cuiProxy-->fontHost[CUI Fonts]
    end
    subgraph Your Custom SPA
        cui-i18n---ngModules
        cui-ng---ngModules
        cui-icon---ngModules
        cui-styleguide---ngModules
      ngModules["Angular Module(s)"]-->cuijs[cui.js]
      cuijs-->|calls services through| cuiProxy[IDM Hosting Service]
    end
    click cui-i18n "./packages/cui-i18n/overview.html" "Internationalization"
    click cui-ng "./packages/cui-ng/overview.html" "Angular Components"
    click cui-icon "./packages/cui-icons/overview.html" "Icons"
    click cui-styleguide "./packages/cui-styleguide/overview.html" "Design Patterns"
```

## Development Workflow

```mermaid
graph TD;
    generator-cui-ng[CUI Ng Generator]-->|selects and uses| cui-idm-b2x[CUI IDM B2X Accelerator]
    cui-idm-b2x-->|as scaffolding for| spa[Your Custom SPA]
    npmPackages[NPM Packages]-->|are used in| spa
    spa-->grunt
    spa-->gruntPackage[grunt package]
    spa-->gruntDeploy[grunt deploy]
    subgraph Project Tasks
        grunt-->|to develop and run| localApp[Local App]
        gruntPackage-->|to build| artifact[Deployable Artifact]
        gruntDeploy-->|creates| artifact
    end
    artifact-->|is deployed to a target on| cuiProxy
    gruntDeploy-->|uploads artifact to| cuiProxy[IDM Hosting Service]
    cuiProxy-->|serves| prod[Production App]
```


