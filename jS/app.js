var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
   
//add image to overlay
$overlay.append($image);
//Add Overlay
$("body").append($overlay);
    //Image
    //Caption


//Does not apply to mobile view
window.onload = function(){
        if (window.innerWidth > 768) {
            $(".eachPhoto").click(function (event) {
            event.preventDefault();
            var href = $(this).find("img").attr("src");
        console.log(href);
        //1.1 Show the overlay
        $overlay.show()
        //1.2 Update the overlay with the image lnked to the link
        $image.attr("src", href);
            });
            
        $overlay.click(function(){
        // Hide the overlay 
        $(this).hide();
        });
    }
};






