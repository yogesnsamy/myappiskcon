Working sample: https://iskconalbumkl.herokuapp.com/

The app uses the Express framework with EJS as the templating engine. 
'Lightbox for Bootstrap' is used for image display: http://ashleydw.github.io/lightbox/.

Steps to test the app locally:

1. Create 'service account key' on the Google Developer Console.
- Go to https://console.developers.google.com
- Credentials --> Create credentials --> Service account key

2. Download the generated json file and name it 'config.json'. Take note of the "client_email" in the json file.

3. Add the client_email to Google Drive folder you want to share.
- go to Google Drive and identify the folder you want to share. 
- add client_email to the list of people you want to share the folder with

4. Download this project folder and place config.json inside folder 'routes'.

5. Type 'npm install' to install all dependencies.

6. Type 'npm start' to start the app locally and view it at http://localhost:3000
