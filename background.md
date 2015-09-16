# Background
The UI Framework connects the end user to Covisint's "Platform as a service (PAAS)" product. The usage flow looks like this:
![](ProjectOverview.png)
End user make a request or action on the web browser (Web). The action could be done via one of the many popular front-end technologies such as Angular.
CUI SDK provides a collection of tools that will encapsulate the data, then send the data to the CUI Core layer.
CUI core performs further data encapsulation before send it to the Apigee layer.
Apigee is an API measurement tool. It does not change the data that passes through it. It measures API usages only. Though there is no direct API access to the PAAS layer, the Apigee acts as the PAAS layer