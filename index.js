const express = require("express");

const { google } = require("googleapis");



const app =  express();


app.get("/", async (req,res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",    
    });
    
// Create client instance
const client = await auth.getClient(); 

// Instance of Google Sheets API
const googleSheets = google.sheets({ version:"v4", auth: client });


// Get metadata about spreadsheet
const metaData = await googleSheets.spreadsheets.get({
            auth,

            spreadsheetId,

    });

    res.send(metaData.data);
});


// Read rows from spreadsheet
const getRows = await googleSheet


app.listen(1337, (req,res) => console.log("Running on 1337"));
