# Web-Programming-Final-Project

MIS301 - WEB PROGRAMMING Final Programming Assignment

### Weather of Forecast of Turkey

 In navbar, we used bootstrap and this is the navbar brand that we randomly found on a website, and there is a search box that you write a city name and see the instant weather. If you write a city name and enter it, you can see that city and its weather.

In addition to that, we found a turkey map on github and we converted it into our project. When you travel between cities with the mouse, you can instantly see the weather with that from the card section on the right side. The last place you clicked leaves a dark blue appearance, while the other places on you stay in a light blue tone for a short time.

 We made the background pictures to change according to the current weather. We divided the card field into two parts and showed the city name and current date in the small upper part. We included average weather at the top of the other part. below it we can see an icon symbolizing the weather and a small description. However we chose to make the actual definition in the text below the map. 
 We thought that an informative text that changes according to the instant weather would attract the attention of the user. Just before the footer, there is an about us and a map section as a symbol that informs the user and at the bottom there is a footer.
 We use openweathermap, a service that provides live weather. We are making requests through the api. When the user writes something in the search box, we listen to it and in case of keylistener, we run setQuery and when we enter we can see the results. In the url part, we see the place we put the request and in return it gave us the following data in json format.

 weatherText returns a function because more than one api has the result returned. Since more than one data comes, we have set up a switch-case structure for each case. We wrote a code to prevent the background repeat and finally its return a text.
