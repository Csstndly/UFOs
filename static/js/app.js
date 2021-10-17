// Using this to convert data.js array into a HTML table

// Import Data (data.js); const var so no reassiging or defining
const tableData = data;

// Reference the HTML table using d3; var as tbody tag as data will be displayed as a table;
//d3.select so JS will for <tbody>
var tbody = d3.select("tbody");

//for the project the code will function will be used to fill the table with data only.

// Create the function and pass in "data" above

function buildTable(data) {

}

// Adding to function so that the code will clear existing data, so users won't end up with pre-filtered data.

//Clearing the existing data creates a fresh table in which we can insert data. If we didn't clear existing data first,
//then we would find ourselves reinserting data that already exists, thus creating duplicates and making a bit of a mess
//It's good practice to clear the existing data first to give ourselves a clean slate to work with.

function buildTable(data) {
  tbody.html(""); //tells js to use an empty string when creating table/ create a blank canvas. References html
}


//This function builds the table/adding data to the table.

//forEach loop works only with arrays and usable with arrow function
// syntax: varname.forEach(callback function)
//callback function can be a anonymous funct, named funct, or arrow funct


  data.forEach((dataRow) => {
//data = object referencing data being imported
//forEach = keyword creating a loop
//dataRow = parameter that will be used as a value when the function is called
    });


//Tells js to find tbody tag in HTML and add a table row/tr
  data.forEach((dataRow) => {
    let row = tbody.append("tr");

    });


//Object.values = to reference 1 object from the array
//dataRow = argument stating to put the values in dataRow
//val = argument representing each item in the object, i.e location, shape, duration
data.forEach((dataRow) => {
   let row = tbody.append("tr");
   Object.values(dataRow).forEach((val) => {
});

    });

// Append each value of the object to a cell in the table.
// let cell = created variable to appending data  into a table data tag "td"
// cell.text(val) = variable that holds only each value from the object.
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

//NEATER VERSION
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}


