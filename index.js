const sql = require('mssql');

// Database configuration
const config = {
  user: 'admin',
  password: '#Sahar2023',
  server: 'mssql-132348-0.cloudclusters.net,19983',
  database: 'Glimpses',
};

// Function to retrieve patient data from the database
async function getPatientsData() {
  try {
    // Connect to the database
    await sql.connect(config);

    // Execute the query
    const result = await sql.query('SELECT * FROM Patient');

    // Return the query result
    return result.recordset;
  } catch (error) {
    console.error('Error retrieving patient data:', error);
  } finally {
    // Close the database connection
    sql.close();
  }
}

// Function to generate the HTML table with patient data
async function generatePatientTable() {
  const patients = await getPatientsData();

  let tableHTML = `
    <table class="patient-table">
      <caption>Patients</caption>
      <thead>
        <tr>
          <th>NI</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Username</th>
          <th>PW</th>
          <th>Photo</th>
          <th>Not</th>
        </tr>
      </thead>
      <tbody>
  `;

  patients.forEach((patient) => {
    tableHTML += `
      <tr>
        <td>${patient.NI}</td>
        <td>${patient.Name}</td>
        <td>${patient.Address}</td>
        <td>${patient.Phone}</td>
        <td>${patient.Email}</td>
        <td>${patient.DOB}</td>
        <td>${patient.Username}</td>
        <td>${patient.PW}</td>
        <td>${patient.Photo}</td>
        <td>${patient.Not}</td>
        <td><button class="action-button">Order accepted</button></td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  return tableHTML;
}

// Usage example
generatePatientTable().then((tableHTML) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Pharmacy Project - Patients</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <h1>Pharmacy Project</h1>
      </header>
    
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    
      <main class="container">
        ${tableHTML}
      </main>
    
      <footer>
        <p>&copy; 2023 Pharmacy Project. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `;

  console.log(html);
}).catch((error) => {
  console.error('Error generating patient table:', error);
});

function order(){
  alert("Ordered!")
}
