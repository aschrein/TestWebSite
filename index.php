
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="https://api-maps.yandex.ru/2.1/?lang=ru" type="text/javascript"></script>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="root"></div>
<script src="public/static/app2.js"></script>
</body>
</html>
<?php
include 'db/db.php';

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "CREATE TABLE IF NOT EXISTS paths (
name varchar(100),
count int(11) default 0 not null,
primary key (name)
)";
if ($conn->query($sql) === TRUE) {
    $name = "empty";
    if( isset($_GET["path"])) {
        $name = $_GET["path"];
    }
    $sql = "INSERT INTO paths (name, count) VALUES (\"".$name."\", 1)
  ON DUPLICATE KEY UPDATE count=count+1;";

    if ($conn->query($sql) === TRUE) {
        // echo "New record created successfully";
    } else {
        //echo "Error: " . $sql . "<br>" . $conn->error;

    }
} else
{
}
$conn->close();

?>