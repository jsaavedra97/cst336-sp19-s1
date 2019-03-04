<!DOCTYPE html>
<html>
    <head>
        <title> </title>
    </head>
    <body>
    <?php
    // class activity
    $sum = 0;
    
    echo "<table><tr><th>Number</th><th>Odd or Even</th> ";
    for($i = 0; $i < 9; $i++){
        $n = rand(0,999);
        if($n % 2 == 0)$r = "Even";
        else $r = "Odd";
        
        echo "<tr><td>". $n ."</td><td>". $r ."</td></tr>";
        $sum += $n;
    }
    echo "</table>";
    echo "<div>Sum: " . $sum . "</div><div>Average: " . number_format(($sum / 9), 2, ".", "") . "</div>";

    ?>
    
    
    </body>
</html>