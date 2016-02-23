
$('img').on('click', function() {
	alert('ready')
})

$(document).ready(function() {
	// $.ajax({
	// 	url: 'http://noahthomas.us/',
	// 	method: 'POST'
	// 	success: function(data, status) {

	// 	},
	// 	error: function() {
			
	// 	},
	// 	complete: function() {
			
	// 	}
	// })
})

$('button').on('click', function() {
	if ('geolocation' in navigator) {

		navigator.geolocation.getCurrentPosition(function(position) {
			var str = 'Latitude: ' + position.coords.latitude + '</p><p>Longitude: ' + position.coords.longitude + '</p>'
			document.getElementById('location').innerHTML = str
			// do_something(position.coords.latitude, position.coords.longitude);
		})
	} else {
		document.getElementById('location').innerHTML = 'Navigator is included'
	}
})
