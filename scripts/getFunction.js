"use strict"

//Function to grab and return the data
async function get(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ZERO_RESULTS"){
            alert('Enter a valid location.');
            secondPage.style.display = 'none';
            firstPage.style.display = 'block';
        } else {
            return data;
        } 
    } catch (error) {
        return error;
    }
};