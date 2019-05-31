"use strict"
//Button for search bar
firstButton.addEventListener('click', function(e){
    console.log(screenWidth);
    //Checks to see if the search-bar is empty
    if (document.querySelector('#search-bar').value === ''){
        //if it is send an alert asking the user for a zip code then reset the page
        alert('Enter a valid location.');
        secondPage.style.display = 'block';
        firstPage.style.display = 'none';
    } else {
        //otherwise, run as normal
        e.preventDefault;
        setHotelLocations();
    }
    
    // toggle(secondPage);
    if (secondPage.style.display === 'none') {
        secondPage.style.display = 'block';
        firstPage.style.display = 'none';
    } else {
        secondPage.style.display = 'none';
        firstPage.style.display = 'block';
    } 
});

//Adding click function to HOME text
homeText.addEventListener('click', function(e){
    e.preventDefault;
    // toggle(secondPage);
    if (firstPage.style.display === 'none') {
        firstPage.style.display = 'block';
        secondPage.style.display = 'none';
    }     
});

//Dog Quote Portion
dogImage.addEventListener('click', function(e) {
    e.preventDefault;
        dogQuote(); 
});

//Click functions for the locations buttons
parksButton.addEventListener('click', function(e) {
    e.preventDefault;
    setParkLocations();
});

hotelsButton.addEventListener('click', function(e) {
    e.preventDefault;
    setHotelLocations();
});

vetsButton.addEventListener('click', function(e) {
    e.preventDefault;
    setVetLocations();
});

storesButton.addEventListener('click', function(e) {
    e.preventDefault;
    setStoreLocations();
});

restaurantButton.addEventListener('click', function(e) {
    e.preventDefault;
    setRestaurantLocations();
});
