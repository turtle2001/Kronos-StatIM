var team;   //current team
var time = dayjs().format("YYYY-MM-DD") //current time

//required for NBA API access
var options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '51d6e0d84cmshc0d9de2b1434d7bp126665jsn3d6cfe1721c5',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
    },
}

var team = localStorage.getItem("team");
if (team !== null) {
    $("#dropdown").val(team);
    updateData();
}

$(function () {
    $('#dropdown').change(updateData);
});

function updateData() {
    //gets attatched ID value for selected team
    var teamNum = parseInt($('#dropdown option:selected').val());

    fetch('https://api-nba-v1.p.rapidapi.com/teams?id=' + teamNum, options)
        .then((response) => response.json())
        .then(function (data) {
            team = data.response[0].name;   //gets team name form ID
            localStorage.setItem("team", teamNum);
            fetch("https://api.seatgeek.com/2/events?q=" + team + "&per_page=82&client_id=Mjk2NTY3NDJ8MTY2NTUxMzQ3Mi4xMjA1OTg")
                .then(response2 => response2.json())
                .then(function (data2) {
                    //makes table disaplying events with a link to seatgeek, time, and price
                    $("#table").empty();
                    var header = $("<tr></tr>");
                    var h1 = $("<th></th>").text("Event");
                    var h2 = $("<th></th>").text("Time");
                    var h3 = $("<th></th>").text("Average Price");
                    $("#table").append(h1, h2, h3);
                    for (var i = 0; i < 10; i++) {
                        var table = $("<tr></tr>");
                        var teamEL = '<td><a href="' + data2.events[i].url + '">' + data2.events[i].title + '</a></td>';
                        var eventTime = $("<td></td>").text(dayjs(data2.events[i].datetime_local).format("MM-DD-YYYY, h:mm A"));
                        var eventPrice = $("<td></td>").text(data2.events[i].stats.average_price);
                        $("#table").append(table, teamEL, eventTime, eventPrice);
                    }
                }
                )
                .catch(err2 => console.error(err2));
        })
        .catch((err) => console.error(err));
    //goes to schedule section of page when team is selected
    window.location.hash = "schedule";
}

//displays dates on current day
fetch('https://api-nba-v1.p.rapidapi.com/games?date=' + time, options)
    .then(response => response.json())
    .then(function (data) {
        if (data.response.length > 0)
            for (var i = 0; i < data.response.length; i++) {
                var table = $("<tr></tr>");
                var game = $("<td></td>").text(data.response[i].teams.visitors.name + " at " + data.response[i].teams.home.name);
                var score = $("<td></td>").text(data.response[i].scores.home.points + "-" + data.response[i].scores.visitors.points);
                $("#score-table").append(table, game, score);
            }
        else {
            var table = $("<tr></tr>");
            var nogame = $("<td></td>").text("No games today")
            $("#score-table").append(table, nogame);
        }

    })
    .catch(err => console.error(err));
// function to open that modal to show big image in details

function openModal() {
    document.getElementById('myModal').style.display = "block";
}
// closing the modal

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showDivs(slideIndex);
// function to show those images divs

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("slides");
    var captionText = document.getElementById("caption");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}