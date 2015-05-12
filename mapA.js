// Set Scale A map setting
		
        window.onload = function () {
		
		var mapA = new L.map('mapAContainer',{ center: [42.31312, -71.0915], maxBounds: [[41.36,-72],[43.36,-70]],
	keyboard: false, zoom: 12, minZoom:12, maxZoom:14, attributionControl: false});
		
		L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png').addTo(mapA);
		
		cartodb.createLayer(mapA, 'http://ansoncfit.cartodb.com/api/v2/viz/5ed315b6-f837-11e4-b1f0-0e9d821ea90d/viz.json', {legends: false})
			.addTo(mapA);
		//		.on('done', function(layer) {
		//			//do stuff
		//		})
		//		.on('error', function(err) {
		//			alert("some error occurred: " + err);
		//		});		
		//cartodb.createVis('mapAContainer', https://ansoncfit.cartodb.com/api/v2/viz/5ed315b6-f837-11e4-b1f0-0e9d821ea90d/viz.json');		
		};
