# Traveling-Tails
##Description
Traveling Tails was created to optimize travel and other activities with dogs. Within the application, one can filter areas through five different categories: hotels, parks, restaurants, health services for pets, and pet stores. When inputing the location, the user is taken to a map populated with the categories' locations. There is also a feature where if you click on a dog image, random dog facts will appear.

##Technologies Used
The various APIs used are the following:
1. Google Maps
2. Google Places 
3. Dog Quotes API from kinduff.com

Written with:
1. JavaScript
2. CSS
3. HTML

##Features
1. Primary Screen Display - The user is first shown the following:

* A nav bar with an interactive HOME text field, utilizing JS to animate it and JS for its click function to return it back to the original screen.
* Rounded text manipulated with JS, which either gets larger or simplifies into plain straight text depending on the size of the screen (also used CSS).
* An input bar in which the user must enter a correct location according to the Google Maps API. If the user attempts to enter with either no text in the input bar or an illogical place, there will be an alert to tell the user to re-enter their location.
* A button in order to submit the information in the input field.
* The screens switch using CSS display properties. 

2. Secondary Screen Display - After entering a location, the user is then shown the following:

* The same nav bar with the HOME text field
* A map drawn with the Google Maps API that is populated with the hotels in the destination they have searched.
* Five buttons in which you can populate the map with the various categories. Each category has a personalized marker. 
* Upon clicking one of the markers, an info-window will pop up inside the map and the user will be able to see the title of the place linked to open another tab of the said place, and the rating.
* There is a dog gif to the right of the map if clicked, random quotes will generate from the dog quote API and will replace one another on top of the dog. This is only a feature for the larger sized screens. Mobile does not have the feature.

##Authors
Liz Aitken - [GitHub Link](https://github.com/LizAitken/)
Reagan Davenport - [GitHub Link](https://github.com/ReaganADavenport)

##Credit
Thank you to Google Maps API, Google Places API, Kinduff Dog-API.
1. (https://developers.google.com/maps/documentation/)
2. (https://developers.google.com/places/web-service/intro)
3. (https://kinduff.github.io/dog-api/)
Thank you to the sources where the images were found.
1. Dog graphics from Ai on giphy - (https://giphy.com/aisforai)
2. All the small icons found from [freepik.com](https://www.freepik.com/)- specific authors mentioned in HTML file.
Thank you to our dogs whom inspire us daily.

