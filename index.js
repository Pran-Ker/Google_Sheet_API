const express = require("express");
const {google} = require("googleapis");
const app = express();
// const _ = require('lodash');
// const fs = require('fs');


// const credentials = JSON.parse(fs.readFileSync('google-credentials.json', 'utf-8'));
  
//   const {
//     client_secret: clientSecret,
//     client_id: clientId,
//     redirect_uris: redirectUris,
//   } = credentials.installed;
  
//   const oAuth2Client = new google.auth.OAuth2(
//     clientId, clientSecret, redirectUris[0],
//   );
  
//   const token = fs.readFileSync('google-oauth-token.json', 'utf-8');
//   oAuth2Client.setCredentials(JSON.parse(token));


// // LOGIN
// app.get("/login", async (req, res) => {
//     const auth = new google.auth.GoogleAuth({
//         keyFile: "credentials.json",
//         scopes: "https://www.googleapis.com/auth/spreadsheets",
//     });

//     // Create client instance
//     const client = await auth.getClient();

//     // Instance of Google Sheets API
//     const googleSheets = google.sheets({
//         version: "v4",
//         auth: client
//     });

//     res.send(googleSheets);
// });




const spreadsheetId = "18GtQ87v3Miuc4SuBGZIr1AlXjSm7Y7E4NoQcbch_bwQ";


// READ
app.get("/spreadsheet", async (req, res) => {


    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    // Create client instance
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });

    
    // Get metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        
        spreadsheetId,

    });

    const getRows = await googleSheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Sheet1!A:A"
    });

    res.send(getRows.data);
});




// // UPDATE
// app.get("/spreadsheet/update", (req,res)=>{

// });

app.listen(1337, (req, res) => console.log("Running on 1337"));