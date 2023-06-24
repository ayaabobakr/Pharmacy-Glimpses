<?php
require_once('db.php');
$query = "select NationalID,Date,Prescription,Medicine,Per from Prescription";
$result = sqlsrv_query($conn,$query);
?>






<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Pharmacy - Patients</title>
  <link rel="stylesheet" href="table.css">
</head>
<body>
  <header>
    <h1>Pharmacy</h1>
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
    <table class="patient-table">
      <caption>Patients</caption>
      <thead>
        <tr>
          <th>National ID</th>
          <th>Date</th>
          <th>Details</th>
          <th>Medicine</th>
          <th>Per</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <?php
          while($row = sqlsrv_fetch_array($result)){
            ?>
            <td><?php echo $row['NationalID'];?></td>
            <td><?php echo $row['Date']->format('Y-m-d');?></td>
            <td><?php echo $row['Prescription'];?></td>
            <td><?php echo $row['Medicine'];?></td>
            <td><?php echo $row['Per'];?></td>
            <td><a href="index.html" class="action-button">Order</a></td>
            </tr>
            <?php
          }
          ?>
          
        
        <!-- Add more patient data here -->
      </tbody>
    </table>
  </main>

  <footer>
    <p>&copy; 2023 Pharmacy. All rights reserved.</p>
  </footer>
</body>
</html>
