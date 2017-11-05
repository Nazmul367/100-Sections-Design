<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Class 01</title>
</head>
<body>

   <?php 
        echo 'First Class on Premium Theme Development Course';
    ?>
    
    <?php
        $txt1 = "Learn PHP";
        $txt2 = "W3Schools.com";
        $x = 5;
        $y = 4;

        echo "<h2>" . $txt1 . "</h2>";
        echo "Study PHP at " . $txt2 . "<br>";
        echo $x + $y;
    ?>
    
    <?php
        $town = array("Dhaka", "Barishal", "Rajshahi");
        echo "I like " . $town[1] . " and " . $town[2] . ".";
    ?>
    
    <?php 
        $city = 'khulna';
    
        if ($city == 'khulna'){
            echo '<h1> Best city in bangladesh is'.$city.'</h1';
        } else {
            echo '<h1> Band city in bangladesh is'.$city.'</h1';
        }
    ?>

</body>
</html>