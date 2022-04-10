(function(){
	var artistInput = $('#artista'),button = $('#boton'),resultOut = $('#content') 

	artistInput.on('keyup', getArtist)
	button.on('click', requestArtist)
	 
	// ------------

	function getArtist( evt ){
		if(evt.keyCode == 13){requestArtist()}
	}

	function requestArtist(){
		$.ajax({
			// data: {artist: artistInput.val()},
			data: {
			},
			// url: '/res/data/lastfm.json'
			url: 'https://apidesaplataforma.jne.gob.pe/api/v1/candidato?idProcesoElectoral=84&NumeroDocumento=' + $('#artista').val()
		})
		.done( fillArtistInfo )
		resultOut.html( '<p class="loading">cargando...</p>' )
	}

	function fillArtistInfo( jsonData ){ 
		console.log(1)
		var artist = jsonData.data,
			html = ''
		
			$('#caja1').val(artist[0].nombreCompleto)
			$('#caja2').val(artist[0].organizacionPolitica)
			$('#caja3').val(artist[0].postulaDistrito)

		console.log(888)
		resultOut.html( html )
		console.log(999)
	}

	// -------------

}())