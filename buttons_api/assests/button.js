// Activates jQuery once page is loaded and doesnt require an on-click event
$(function() {

// Movies is the Category
    titleButtons(movies, 'movieButton', '#movieButton');
});

// Movie title array
var movies = ["Pulp Fiction", "GoodFellas", "Superman", "Seven", "Heat", "The Dark Knight", "Gladiator", "The Departed", "New Jack City", "The Bourne Identity", "Casino Royale", "X-Men", "Harry Potter", "The Wolf of Wall Street", "Training Day", "Iron Man", "Captain America", "The Avengers", "American Hustle", "Scarface"];

//functions to create buttons from above array and add new buttons inputed by user
function titleButtons(movieArray, newClass, newTitleDiv){
    $(newTitleDiv).empty();

    for (var i = 0; i < movieArray.length; i++){
        
        var newButton = $('<button>')
        newButton.addClass(newClass);
        newButton.attr('data-title', movieArray[i]);
        newButton.text(movieArray[i]);
        $(newTitleDiv).append(newButton);

        // console.log(titleButtons);
        // console.log(newTitleDiv);
        // console.log(newButton);
        // console.log(newClass);
    }

}

//Runs API Call and modifies the state of the button
    $(document).on('click', '.movieButton', function(){
    $('#movies').empty();
    $('.movieButton').removeClass('active');
    $(this).addClass('active');
        console.log("HERE")
// Type = Movie Title
    var type = $(this).data('title');

//API Call URL & Key
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;

        console.log(response)

// For loop runs the API results
         for(var i=0; i < results.length; i++){

// New DIV for the retults    
            var movieDiv = $('<div class="movie-item">');

// Calls the return item an Image
            var movieGiph = $('<img>');

// New variable to add the Rating to each result
            var myDiv = $('<div>');
            var p = $('<p>').text( "Rating: " + results[i].rating + " ");
            p.addClass("p");
            myDiv.append(p);

// Animate & Still Variables
            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;

// Adding attributes to MovieGiph & P and appending to MovieDiv
            movieGiph.attr('fixed_height', 150);
            movieGiph.attr('src', still);
            movieGiph.attr('data-still', still);
            movieGiph.attr('data-animate', animated);
            movieGiph.attr('data-state', 'still');
            movieGiph.addClass("movieGiph");
             //p.addClass("p");
            var lineSeparator = $('<hr>');

            movieDiv.append(myDiv);
            movieDiv.append(movieGiph);
            movieDiv.append(lineSeparator);
            

// Appending MovieDiv to Movies ID
            $('#movies').append(movieDiv);
        }
        
    });

});
 
// On click function added to each movieGiph and which will modify the state of the Giph via the If statements below
$(document).on('click', '.movieGiph', function(){
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
$('#newMovie').on('click', function(){
    var addMovie = $('input').val();

    console.log(addMovie);

// Pushes the new user input value into the movie array
    movies.push(addMovie);

// Issues the above as a button by re-calling the titleButtons
    titleButtons(movies, 'movieButton', '#movieButton');

    console.log('clicked')

// Keeps the page from refreshing automatically
    return false;
});
// });