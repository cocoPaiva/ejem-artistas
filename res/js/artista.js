(function(){
	var artistInput = $('#artista'),
		button = $('#boton'),
		resultOut = $('#content')

	artistInput.on('keyup', getArtist)
	button.on('click', requestArtist)
	
	function getArtist( evt ){
		if(evt.keyCode == 13){requestArtist()}
	}

	function requestArtist(){
		console.log(00)
		$.ajax({
			// data: {artist: artistInput.val()},
			data: {
			},
			// url: '/res/data/lastfm.json'
			url: 'http://localhost:4518/api/scolars/params'
		})
		.done( fillArtistInfo )
		resultOut.html( '<p class="loading">cargando...</p>' )
	}

	function fillArtistInfo( jsonData ){ 
		console.log(1)
		var artist = jsonData.Departamentos,
			html = ''
		
		html += '<h2>' + artist[0].nombre + '</h2>'
		html += '<figure><img src="' + artist[0].silueta + '"></figure>'
		html += '<p class="bio">' + artist[0].videos + '</p>'

		console.log(888)
		resultOut.html( html )
		console.log(999)
	}
}())