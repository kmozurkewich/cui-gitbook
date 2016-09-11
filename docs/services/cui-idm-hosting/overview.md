# CUI IDM App Hosting

A highly availabile application hosting service specifically tuned and configured to host your CUI IDM Apps.

## Features

- Preconfigured to expose the Covisint platform APIs directly on the host.
- Configured to support our Solution Accelerator build tasks so deployment is quick and easy.
- SSL Certificate enabled.
- The Hosting service offers a set of APIs of its own that can be used to configure features of itself.  For example, custom proxy paths can be configured to route http requests to remote hosts via a local path.

## Defaults

### uiHost
Your default uiHost will be `https://{originUri}.idm.{datacenter}`.  For example: `https://s-awesome-ui01.idm.covapp.io`.

### serviceUrl
Your default serviceUrl will be `https://{originUri}.idm.{datacenter}/p/apiProxy`.  For example `https://s-awesome-ui01.idm.covapp.io/p/apiProxy`

## Customizations

- Vanity URLs can be configured for use to match your specific domain strategy.  This process is currently managed through your solution architect and in coordination with the platform team.

- Custom Proxies. By using a simple set of API call {TODO: further documentation necessary}