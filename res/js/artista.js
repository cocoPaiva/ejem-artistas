(function(){
	var artistInput = $('#artista'),button = $('#boton'),resultOut = $('#content'),button2 = $('#botonValora')

	artistInput.on('keyup', getArtist)
	button.on('click', requestArtist)
	button2.on('click', requestValorar)
	
	function requestValorar(){
		console.log(0)
		resultOut.html( '<p class="loading">valorando...</p>' )
// debugger
		
		// $.post("https://mapadeventuras.promperu.gob.pe/api/api/scolars/valoracion", $("#f").serialize(), function (data, textStatus) {
		// 	var res = "";
		// 	console.log(textStatus)
		// 	console.log(data)
			
		// 	if (textStatus == "success") {
		// 		res = data.estado.status;
		// 		if (res == "1") {
		// 			resultOut.html( "ok!" )
		// 		 } else {
		// 			resultOut.html( ":-( :: " + data.estado.description )
		// 			}

		// 	}
		// 	else
		// 	{resultOut.html( "Error : " +  textStatus )}
			
		// }, "json");

		//invocación que no funcionó:
		$.ajax({
			type: "POST",
			dataType: "json", 
			contentType: "application/json; charset=utf-8",
			url: 'https://mapadeventuras.promperu.gob.pe/api/api/scolars/valoracion',
			//  body: { "Form" : $('#Form').value, "Comentario" : $('#Comentario').value, "Valoracion" : $('#Valoracion').value, "Edad" : $('#Edad').value}
			// data: JSON.stringify(  { "Form" : $('#Form').value, "Comentario" : $('#Comentario').value, "Valoracion" : $('#Valoracion').value, "Edad" : $('#Edad').value}  ) ,
			data: $("#f").serialize() 
		})
		.done( requestValorarFill )
		resultOut.html( '<p class="loading">valorando...</p>' )

		console.log( JSON.stringify( 
			{ "Form" : $('#Form').value, "Comentario" : $('#Comentario').value, "Valoracion" : $('#Valoracion').value, "Edad" : $('#Edad').value} 
			)
			 )
	}
	function requestValorarFill( jsonData ){ 
		console.log(111)
		console.log(jsonData)
		console.log(222)
		var res = jsonData.estado,

		html = ''
		html += '<h2>' + res.status + '</h2>'
		html += '<h3>' + res.description + '</h3>'

		console.log(888)
		resultOut.html( html )
		console.log(999)
	}


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

	// -------------

}())