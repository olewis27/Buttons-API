

// Activates jQuery once page is loaded and doesnt require an on-click event
$(function() {

// Movies is the Category
    titleButtons(zzzz, '____Button', '#____Button');
});

// Movie title array
var zzzz = ["Pulp Fiction", "GoodFellas", "Superman", "Seven", "Heat", "The Dark Knight", "Gladiator", "The Departed", "New Jack City", "The Bourne Identity", "Casino Royale", "X-Men", "Harry Potter", "The Wolf of Wall Street", "Training Day", "Iron Man", "Captain America", "The Avengers", "American Hustle", "Scarface"];

//functions to create buttons from above array and add new buttons inputed by user
function titleButtons(____Array, newClass, new____Div){
    $(new___Div).empty();

    for (var i = 0; i < ____Array.length; i++){
        
        var newButton = $('<button>')
        newButton.addClass(____Class);
        newButton.attr('data-title', ____Array[i]);
        newButton.text(___Array[i]);
        $(new____Div).append(newButton);

        // console.log(titleButtons);
        // console.log(newTitleDiv);
        // console.log(newButton);
        // console.log(newClass);
    }

}

//Runs API Call and modifies the state of the button
    $(document).on('click', '.____Button', function(){
    $('#____').empty();
    $('.____Button').removeClass('active');
    $(this).addClass('active');

// Type = Movie Title
    var type = $(this).data('Movies');

//API Call URL & Key
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;

        console.log(response)

// For loop runs the API results
         for(var i=0; i < results.length; i++){

// New DIV for the retults    
            var new DIV = $('<div class="movie-item">');

// Calls the return item an Image
            var 1st variable = $('<img>');

// New variable to add the Rating to each result
            var p = $('<p>').text( "Rating: " + results[i].rating + " ");

// Animate & Still Variables
            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;

// Adding attributes to MovieGiph & P and appending to MovieDiv
            1st variable.attr('fixed_height', 150);
            1st variable.attr('src', still);
            1st variable.attr('data-still', still);
            1st variable.attr('data-animate', animated);
            1st variable.attr('data-state', 'still');
            1st variable.addClass("1st variable");
            2nd variable.append(1st new variable you created above);
            new DIV.append(to array);

// Appending MovieDiv to Movies ID
            $('#movies').append(movieDiv);
        }
        
    });

});
 
// On click function added to each 1st variable and which will modify the state of the Giph via the If statements below
$(document).on('click', '.1st variable', function(){
    var state = $(this).attr('data-state');

// If else statments to control the state of the Giph whenever cliked

    if (state == 'still'){

        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }

    else{

        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }

})

// On click function using the submit button to capture the user input values
$('#').on('click', function(){
    var ____Movie = $('input').val();

    console.log(____Movie);

// Pushes the new user input value into the movie array
    ....push();

// Creates the above as a button by re-calling the titleButtons

    console.log('clicked')

// Keeps the page from refreshing automatically
    return false;
});