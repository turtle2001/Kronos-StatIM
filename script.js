$(function () {
    $('#dropdown').change(function () {
        var teamNum = parseInt($('#dropdown option:selected').val());

        var options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '51d6e0d84cmshc0d9de2b1434d7bp126665jsn3d6cfe1721c5',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            },
        };

        fetch('https://api-nba-v1.p.rapidapi.com/teams?id=' + teamNum, options)
            .then((response) => response.json())
            .then(function (data) {
                team = data.response[0].name;
                console.log(team);
                fetch("https://api.seatgeek.com/2/events?q=" + team + "&per_page=82&client_id=Mjk2NTY3NDJ8MTY2NTUxMzQ3Mi4xMjA1OTg")
                    .then(response2 => response2.json())
                    .then(function (data2) {
                        console.log(data2)
                        $("#table").empty();
                        for (var i = 0; i < 10; i++) {
                            var table = $("<tr></tr>");
                            var teamEl = $("<td></td>").text(data2.events[i].title);
                            var eventTime = $("<td></td>").text(data2.events[i].datetime_local);
                            var eventPrice = $("<td></td>").text(data2.events[i].stats.average_price);
                            $("#table").append(table, teamEl, eventTime, eventPrice);
                        }
                    }
                    )
                    .catch(err2 => console.error(err2));

            })
            .catch((err) => console.error(err));

        window.location.hash = "schedule";
    });
});

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showDivs(slideIndex);

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

// SEATGEEK APIs
// data[0].title - Name of Event
// data[0].datetime_local -Time of Event
// data[0].url (for tickets) - Link for tickets