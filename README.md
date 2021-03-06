# Google_Sheet_API
We need to create a service that interacts with the Google Sheet APIs (https://developers.google.com/sheets/api) and provides ways to get data and update data in the Google Sheets. This service will have the following APIs:


1. **Login** - Generates a token to access the subsequent Google APIs. Method: GET URI: /login 


2. **Fetch Data** - Fetches a particular spreadsheet’s data from Google and returns all the rows (sheet-wise).<br><br>Method: GET URI: /spreadsheet/{spreadsheet_id_passed_here} 

<br><br>Example Response payload: A mapping from google sheet ids to an array of rows of data. Row data is the mapping from column number to the data in the cell {sheet_id_1: [{ 0: “X”, 1: “Y”, 2: “Z” }], ....} <br><br>


3. **Update Data** - Updates a cell in a specific google sheet. Returns success status and error code (if any). <br><br>Method: POST 
<br><br>URI: /spreadsheet/update 
<br><br>Example Request payload: {spreadsheet_id: “1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms”, sheet_id: 0, row_number: 1, column_number: 1, value: “123”} Value can be string, number, or boolean. <br>Example Response payload: {success: true/false, error (optional): “Suitable Error”}
