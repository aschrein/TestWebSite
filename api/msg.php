<?php
$header = "From:noreply@rassvet.pe.hu \r\n";
$header .= "Cc:afgh@somedomain.com \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";
$name = "";
$phone = "";
$email = "";
$text = "";
if( isset( $_GET['name'] ) ) $name = $_GET['name'];
if( isset( $_GET['phone'] ) ) $phone = $_GET['phone'];
if( isset( $_GET['email'] ) ) $email = $_GET['email'];
if( isset( $_GET['text'] ) ) $text = $_GET['text'];
$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">
  <tr>
   <td>
    $name
   </td>
   <td>
    $phone
   </td>
   <td>
    $email
   </td>
  </tr>
  <tr>
   $text
  </tr>
 </table>
</body>
</html>
";
$retval=mail( "antonshreyner@gmail.com" ,
$_GET["name"] ,
$message
, $header );
if( $retval == true ) {
    echo "Message sent successfully...";
 } else {
    echo "Message could not be sent...";
 }
$test = "api/msg.php?text=hello&name=anton&email=noreply@rassvet.pe.hu&phone=";
/*
$servername = "localhost";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "CREATE TABLE IF NOT EXISTS messages (
            ID serial  PRIMARY KEY NOT NULL ,
            name varchar(100),
            text varchar(4096),
            email varchar(100) ,
            phone varchar(100) ,
            date timestamp
)";
if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}
$sql = "INSERT INTO messages (id,name,text,email,phone,date)  VALUES (DEFAULT,". $_GET["name"]."," . $_GET["text"].",". $_GET["email"].",". $_GET["phone"].",now());";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
echo "Connected successfully";**/
?>
