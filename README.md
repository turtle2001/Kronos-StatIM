# Kronos-StatIM

## Deployed Link
https://turtle2001.github.io/Kronos-StatIM/

## Site Picture
![Kronos (1)](https://user-images.githubusercontent.com/110750833/196051420-330fa0ae-3f68-4f38-a1f1-9b0eeb4cc0f3.gif)


## Technologies Used
- HTML - Used to create elements on the DOM
- CSS - Styles html elements on page
- JS - Used to create interactions and animations on webpage
- Bootstrap - Used to create the layout of the page
- JSON - Used to parse and stringify
- WEB API - Used to 2 separate APIs and local storage
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to Github Pages

## To Do
- Must use a CSS framework other than Bootstrap 
- Must be Deployed (GitHub Pages)
- Must be interactive (i.e: accept and respond to user input)
- Must have User Input Validation
- Must use at least two server-side APIs

- Must have some sort of repeating element (table, columns, etc) 
- Does not use alerts, confirms, or prompts (use modals).
- Must utilize at least one new library or technology that we haven’t discussed
- Must have a polished frontend / UI
- Must meet good quality coding standards (indentation, scoping, naming)
- Be responsive.
- Use client-side storage to store persistent data.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best - practices for class/id naming conventions, indentation, quality comments, etc.). 
- Must utilize Git Branching / Merging. Git Branches based on Feature Built / GitHub Project Card.
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed
    application).
## Summary 
This project was to create an Application concept using the the skills and research we have developed over the first month of the course. To begin this task we had to spend some 
time reading and testing the many diverse APIs, after testing through multiple APIs we found a few urls that were successful. Next was to determine what apis we were going to use
as a team. After going through multiple concepts we decided as a team to use a sports/events application. First we started with which sport to use after careful consideration we 
agreed with a NBA "rapid api" as the new season is starting. We also wanted to incorporate a way for the user to view the next upcoming events and dates, we decided to go with "seatgeek api".
Our motivation for this project was to bring an easy to use application and a well functioning UI. To make the design for our application we took inspiration from the old timely documentaries.
We wanted to bring what we learned in class to our page, and we did this by taking what each person in the group used in previous assignments. We used a handful of technologies to name 
a few we used a different framework from W3 schools called "W3.CSS", another key technology we used was the fetch method to target the appropriate properties from the APIs url. When navigating
through the page we structured the website to be easy to use we have the navigation on the side with unique icons that jump to the section the user is wanting to use. We also wanted to bring
a sense of immersion into the website and we did this by adding photos of previous and current legends of basketball players. When a user clicks on the photos they we introduced with a 
modal that allows the user to see a multiple selection of photos. Even though we are very proud of hard work and the website functions how we want their is always room for improvement and add-ons.
Somethings we would like to add in the future would be a calendar that shows a teams individual schedule, as well as a live stat tracker for individual players. We used console.log() to make sure our 
code stayed true. We used local storage in order to getItems and setItems in order to save the selected team by the user after a refresh. We felt the most challenging task to overcome for this task 
was understanding how to retrieve the information from each object and its property. Something that we took away from this was how to use fetch within a fetch in order to retrieve 2 separate targets.

The below gif is the final product.
![](images/KRONOSSTATIM.gif)

We feel at the end of this we have achieved a better understanding of APIs and the course as a whole. Below is our code for the nesting fetch method.

## Code Snippet
```JavaScript
fetch('https://api-nba-v1.p.rapidapi.com/teams?id=' + teamNum, options)
        .then((response) => response.json())
        .then(function (data) {
            team = data.response[0].name;
            localStorage.setItem("team", teamNum);
            fetch("https://api.seatgeek.com/2/events?q=" + team + "&per_page=82&client_id= not including the key code")
                .then(response2 => response2.json())
                .then(function (data2) {
                    $("#table").empty();
                    for (var i = 0; i < 10; i++) {
                        var table = $("<tr></tr>");
                        var teamEl = $("<td></td>").text(data2.events[i].title);
                        var eventTime = $("<td></td>").text(dayjs(data2.events[i].datetime_local).format("MM-DD-YYYY, h:mm:A"));
                        var eventPrice = $("<td></td>").text(data2.events[i].stats.average_price);
                        $("#table").append(table, teamEl, eventTime, eventPrice);
```