(function(){
	var artistInput = $('#artista'),
		button = $('#boton'),
		resultOut = $('#content'),
		button2 = $('#botonValora')


	artistInput.on('keyup', getArtist)
	button.on('click', requestArtist)
	button2.on('click', requestValorar)
	
	function getArtist( evt ){
		if(evt.keyCode == 13){requestArtist()}
	}

	function requestArtist(){
		$.ajax({
			// data: {artist: artistInput.val()},
			data: {
			},
			// url: '/res/data/lastfm.json'
			url: 'https://mapadeventuras-ws.promperu.gob.pe/api/scolars/params'
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

	function requestValorar(){
		console.log(0)
		$.ajax({
			type: "POST",
			url: 'https://mapadeventuras.promperu.gob.pe/api/api/scolars/valoracion',
			data: { "Form" : $('#form').value, "Comentario" : $('#Comentario').value, "Valoracion" : $('#Valoracion').value, "Edad" : $('#Edad').value
			},
		})
		.done( requestValorarFill )
		resultOut.html( '<p class="loading">valorando...</p>' )
	}
	function requestValorarFill( jsonData ){ 
		console.log(000)
		console.log(jsonData)
		console.log(111)
		var res = jsonData.estado,

		html = ''
		html += '<h2>' + res.status + '</h2>'

		console.log(888)
		resultOut.html( html )
		console.log(999)
	}
}())