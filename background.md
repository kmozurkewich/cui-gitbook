# Background
The UI Framework connects the end user to Covisint's "Platform as a service (PAAS)" product. The usage flow looks like this:
![](ProjectOverview.png)
End user make a request or action on the web browser (Web). The action could be done via one of the many popular front-end technologies such as Angular.
CUI SDK provides a collection of tools that will encapsulate the data, then send the data to the CUI Core layer.
CUI core performs further data actions then send it to the Apigee