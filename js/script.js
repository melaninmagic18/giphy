// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
     var searchTerm = $("input").val();
     var request_url = "https://api.giphy.com/v1/gifs/search?q="+ searchTerm +"&rating=pg&api_key=dc6zaTOxFJmzC";
     $.ajax({
        url: request_url,
        method: "GET",
        success: function(response) {
            console.log(response)
            //$("body").append("<img src="+response.data[1].images.fixed_width.url+">");
            var index = Math.floor((Math.random() * 10) ) ;
            $(".gallery").html("<img src="+response.data[index].images.fixed_width.url+">");
        
            

  
        }
     });
         
});

