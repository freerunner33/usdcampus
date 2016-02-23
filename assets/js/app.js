
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
			alert('HI ' + position.coords.latitude + ' what')
			// do_something(position.coords.latitude, position.coords.longitude);
		})
	} else {
		document.getElementById('location').innerHTML = 'Navigator is included'
	}
})
