# Create and configure a new Instance

1) Solution Center - > Create new Instance

3) Load Policies (Jayraj)

4) Ammend the JWT Service URL in CCA DB (Dileep)

5) update originUri to match Convention (Margaret)

6) Map the hostname to the proxy service in Cloud Foundry
```
cf map-route ui-service-proxy-1-3-1 idm-admin.covapp.io -n {{betasolutioninstance}}
```

7)  Set up the CUI Proxy Service and PUT the OAuth Solution/Client Scopes
- get authToken
- update Postman Environment var
- POST OAuth Scope for Solution
- POST OAUth Scope for Client Id
- GET content upload scope at solution level
- GET to get content upload scope at client Id level

make sure they are

```
{
  "allowedScopes": "all contentupload",
  "defaultScope": "all contentupload"
}
```


2) Obtain all key information

3) Set up B2X project with appropriate appConfig
