# gas-webhook-with-netlify-functions

For some reason, "script.google.com" can't be used as an valid webhook URL because of the ContentService API. This project is using the Netlify functions to build a valid webhook URL and post the data to the invalid "script.google.com" url.

### Webhook

https://{{yourNetlifySitenameUrl}}/webhook This will send post request via the doPost method in the Google Apps Script project.

### Netlify environment variables

GAS_API: A Google Script App web app url with doPost method.
TOKEN: A token which is defined in your Google Apps Script project for the validation of the post query.
![image](https://user-images.githubusercontent.com/16481229/94992242-31f38c00-05bb-11eb-9247-a341e84a0eeb.png)
