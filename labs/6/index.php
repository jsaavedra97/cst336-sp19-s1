<!DOCTYPE html>
<html>
    
    <head>
        <title> Ottermart Product Search </title>
        <link rel="stylesheet" href="css/styles.css" type="text/css" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script>
            /*global $*/
            $(document).ready(function(){
               
                $.ajax({
                    type: "GET",
                    url: "api/getCategories.php",
                    dataType: "json",
                    success: function(data, status){
                        data.forEach(function(key){
                            $("[name=category]").append("<option value=" + key["catId"] + ">" + key["catName"] + "</option>");
                        }); 
                    }
                }); 
                
                $("#searchForm").on("click", function(){
                    $.ajax({
                        type: "GET",
                        url: "api/getSearchResults.php",
                        dataType: "json",
                        data: {
                            "product"   : $("[name=product]").val(),
                            "category"  : $("[name=category]").val(),
                            "priceFrom" : $("[name=priceFrom]").val(),
                            "priceTo"   : $("[name=priceTo]").val(),
                            "orderBy"   : $("[name=orderBy]:checked").val()
                        },
                        success: function(data, status){
                            $("#results").html("<h3> Products Found: </h3>");
                            data.forEach(function(key){
                                $("#results").append("<a href='#' class='historyLink' id='" + 
                                    key['productId'] + "'>History</a> ");
                                $("#results").append(key["productName"] + " " + 
                                    key["productDescription"] + " $" + key["price"] + "<br>");
                            });
                        }
                    });
                });
            }); // End $(document).ready()
        </script>
    </head>
    
    <body>
        
        <div>
            <h1> Ottermart Product Search </h1>
            
            <form>
                
                Product: <input type="text" name="product"/>
                <br>
                Category:
                    <select name="category">
                        <option value=""> Select one </option>
                    </select>
                <br>
                Price: From <input type="text" name="priceFrom" size="7"/>
                       To   <input type="text" name="priceTo"   size="7"/>
                <br>
                Order Result by:
                <br>
                
                <input type="radio" name="orderBy" value="price"/> Price <br>
                <input type="radio" name="orderBy" value="name" /> Name
                
                <br><br>
            </form>
            <br>
            <button id="searchForm">Search</button>
            
        </div>
        <br>
        <hr>
        <div id="results"></div>
        
    </body>
</html>