//https://api.seatgeek.com/2/performers?slug=new-york-mets
// fetch("https://api.seatgeek.com/2/events?taxonomies.name=nba&per_page=20&client_id=Mjk2NTY3NDJ8MTY2NTUxMzQ3Mi4xMjA1OTg")
//     .then(response => response.json())
//     .then(function (data) {
//         console.log(data);
//     }
//     )
//     .catch(err => console.error(err));
var dropDown = document.querySelector('#xx');
$(function () {
	$('#xx').change(function () {
		var y = parseInt($('#xx option:selected').val());

		var options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '51d6e0d84cmshc0d9de2b1434d7bp126665jsn3d6cfe1721c5',
				'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
			},
		};

		fetch('https://api-nba-v1.p.rapidapi.com/teams?id=' + y, options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	});
});

dropDown.addEventListener('change', function () {
	window.location = 'http://127.0.0.1:5500/index.html#schedule';
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
