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
    $(".yomama-btn").on("click", function() {
        console.log("you clicked me");
        const queryURL= "https://api.apithis.net/yomama.php";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            //after a response from giphy do something with the respnse
            console.log(response);
            $(".joke-display").prepend()
            // With each of the max ten responses in response back from giphy
            // for (var i = 0; i < responses.length; i++) {
            // //   if (responses[i].rating !== "r" && responses[i].rating !== "pg-13") {
            //     var $div = $("<div>"); //create img
            //     response.addClass("warning");//selector for the pausing established
            //     placeimg.attr({
            //       //Link those items to the page with a data-img on an attribute
            //       "data-animate": responses[i].images.fixed_height.url, //add animate
            //       "data-still": responses[i].images.fixed_height_still.url, //add the still
            //       "data-state": "moving",
            //       src: "",
            //       width: 400,
            //       height: 175,
            //       "margin-left": 5,
            //       "margin-right": 5,
            //       "margin-top": 10
            //     });
            //     $(placeimg).attr("src", responses[i].images.fixed_height.url);
            //     $("#gifdiv").prepend(placeimg);
            //     renderButtons();
            //   }
            // }
          });
        
    });
    // /* ///////////Comedic Relief//////// */
   

  
});
  
 
  
  