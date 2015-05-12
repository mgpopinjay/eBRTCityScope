// Set Scale B map setting
        var mapB = L.map('mapB',{ center: [42.31312, -71.0915], zoom: 12, maxBounds: [[42.15,-71.8],[42.75,-70]],
	keyboard: false, attributionControl: false});
            L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>', maxZoom:15, minZoom:12 }).addTo(mapB);
			cartodb.createLayer(mapB, 'http://ansoncfit.cartodb.com/api/v2/viz/5ed315b6-f837-11e4-b1f0-0e9d821ea90d/viz.json', {legends: false})
			.addTo(mapB);