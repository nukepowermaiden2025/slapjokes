/*
 _____   _           ___   _____   _   _       ___   _____   _____  __    __ 
/  ___/ | |         /   | |  _  \ | | | |     /   | |  _  \ |  _  \ \ \  / / 
| |___  | |        / /| | | |_| | | |_| |    / /| | | |_| | | |_| |  \ \/ /  
\___  \ | |       / / | | |  ___/ |  _  |   / / | | |  ___/ |  ___/   \  /   
 ___| | | |___   / /  | | | |     | | | |  / /  | | | |     | |       / /    
/_____/ |_____| /_/   |_| |_|     |_| |_| /_/   |_| |_|     |_|      /_/   
*/

$(document).ready(function(){ 

    $(".mainImage").click(function() {                                  // Event listener, on click run function showMe
        showMe();
    });
  
    function showMe() {                                                 // Function to show images/link to main.html
        $(".choose").text("What's Pissing You Off Today?");             // Show this text
        $(".mainImage").remove();                                       // Remove the image that was clicked
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/boss.jpg' class='pic pic1' alt='Link to Main Page'></a>");
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/family.png' class='pic pic2' alt='Link to Main Page'></a>");
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/traffic.jpg' class='pic pic3' alt='Link to Main Page'></a>");
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/mamaFratelli.jpg' class='pic pic4' alt='Link to Main Page'></a>");
    };                                                                  // Link these images to main.html
  
    $("pic").on("click", function() {                                   // When you click on one of the pics
        $("pic").hide();                                                // Hide all the pics
    });
  
    $(".gym").hide();                                                   // Hide the map with local gyms
    $(".arcades").hide();                                               // Hide the map with local arcades
    $(".bars").hide();                                                  // Hide the map with local bars

    $(".holdMe1").on("click", function() {                              // When you click on the first image
        $(".gym").show();                                               // Show the map with local gyms
        $(".holdMe1").hide();                                           // Hide the image that was clicked
    });

    $(".holdMe2").on("click", function() {                              // When you click on the second image
        $(".arcades").show();                                           // Show the map with local arcades
        $(".holdMe2").hide();                                           // Hide the image that was clicked
    });

    $(".holdMe3").on("click", function() {                              // When you click on the third image
        $(".bars").show();                                              // Show the map with local bars
        $(".holdMe3").hide();                                           // Hide the image that was clicked
    });
    // /* ///////////Comedic Relief//////// */
    $(".yomama-btn").on("click", function() {                           //Yomama on click fire off ajax request to basic api
        console.log("you clicked yomama");
        const queryURL= "https://api.apithis.net/yomama.php";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            $(".joke-display").empty();
            $(".joke-display").addClass("joke warning");
            $(".joke-display").text(response);                          //The response comes back as text
          });
        
    });

    $(".dad-btn").on("click", function() {
        console.log("you clicked dad");
        const queryURL= "https://icanhazdadjoke.com/";                  //Dad on click fire off ajax request to basic api
        $.ajax({
            url: queryURL,
            dataType: 'json',                                           //Argument to specify which datatype to return
            method: "GET"
          }).then(function(response) { 
            console.log(response.joke);
            $(".joke-display").empty();
            $(".joke-display").addClass("joke warning");
            $(".joke-display").text(response.joke);                     //The response comes back as json 
          });
        
    });

    $(".norris-btn").on("click", function() {
        console.log("you clicked norris");
        const queryURL= "norris-btn";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            //after a response from yomama api
            console.log(response);
            $(".joke-display").empty();
            $(".joke-display").addClass("joke warning");
            $(".joke-display").text(response);
          });
        
    });
    // /* ///////////Comedic Relief//////// */
   

  
});
  
 
  
  