<?php
$servername = "mysql.hostinger.ru";
$username = "u475762950_ant";
$password = "123456";
$dbname = "u475762950_mes";
// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    //echo "connection failed";
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT name, count FROM paths";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "name: " . $row["name"] . " - count: " . $row["count"] . "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>