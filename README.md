Working sample: https://iskconalbumkl.herokuapp.com/

The app uses the Express framework with EJS as the templating engine.
'Lightbox for Bootstrap' is used for image display: http://ashleydw.github.io/lightbox/.

Steps to test the app locally:

1. Create 'service account key' on the Google Developer Console.

- Go to https://console.developers.google.com
- Credentials --> Create credentials --> Service account key

2. Download the generated json file and store it safe. Take note of the "client_email" & "private_key" in the json file.

3) On the Google drive, add 'client_email' to the Google Drive folder you want to share.

- go to Google Drive and identify the folder you want to share.
- add client_email to the list of people you want to share the folder with

4. Download this project folder.

5. Create a new '.env' file inside the project folder. The format is similar to what's in the '.env.example' file.

6. Insert the generated 'client_email' & 'private_key' generated in step 2 into file '.env'.

7. Type 'npm install' to install all dependencies.

8. Type 'start_local' to start the app locally and view it at http://localhost:8628/

Key logic is in the following files:

- routes/index.js
- views/index.ejs
