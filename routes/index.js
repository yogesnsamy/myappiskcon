var express = require('express');
var router = express.Router();

//const google = require('googleapis');
const { google } = require('googleapis');
const fs = require('fs');
// const key = require('./config.json');
const { client_email, private_key } = require('./config');
const drive = google.drive('v3');

/* GET home page. */
router.get('/', function(req, res, next) {
  let images;
  const jwtClient = new google.auth.JWT(
    client_email,
    null,
    private_key,
    ['https://www.googleapis.com/auth/drive'],
    null
  );
  //------------------------
  jwtClient.authorize(authErr => {
    if (authErr) {
      console.log(authErr);
      return;
    }
    // Make an authorized requests

    // List Drive files.
    drive.files.list(
      {
        auth: jwtClient
      },
      (listErr, resp) => {
        if (listErr) {
          console.log(listErr);
          return;
        }
        images = resp.data.files.filter(file => file.mimeType == 'image/jpeg');
        // console.log(images);
        //+++++++++++++++++++++++
        res.render('index', {
          title: 'cicak',
          images: images
        });
        //++++++++++++++++++++++++
      }
    );
  });
  //------------------------
});

module.exports = router;
