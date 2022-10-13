//https://api.seatgeek.com/2/performers?slug=new-york-mets
//https://api.seatgeek.com/2/events?q=boston+celtics

var team = "";
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
                fetch("https://api.seatgeek.com/2/events?q=" + team + "&per_page=20&client_id=Mjk2NTY3NDJ8MTY2NTUxMzQ3Mi4xMjA1OTg")
                    .then(response => response.json())
                    .then(console.log(data))
                    .catch(err => console.error(err));

            })
            .catch((err) => console.error(err));

        window.location.hash = "schedule";
    });
});
/*
ids
navbar
main
home
teams
schedule
tickets
photos
contact



SEATGEEK APIs
data[0].title - Name of Event
data[0].datetime_local -Time of Event
data[0].url (for tickets) - Link for tickets
*/