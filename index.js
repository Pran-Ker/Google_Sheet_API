const express = require("express");

const {
    google
} = require("googleapis");

const app = express();







// // LOGIN
// app.get("/login", (req, res) => {

// });






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

    const spreadsheetId = "18GtQ87v3Miuc4SuBGZIr1AlXjSm7Y7E4NoQcbch_bwQ";

    // Get metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        auth,

        spreadsheetId,

    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A:A"
    });

    res.send(getRows.data);
});





// // UPDATE
// app.get("/spreadsheet/update", (req,res)=>{

// });

app.listen(1337, (req, res) => console.log("Running on 1337"));