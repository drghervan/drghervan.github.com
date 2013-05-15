function initialize() {
    var latlng = new google.maps.LatLng(46.0722, 23.5615);
    var myOptions = {
      zoom: 16,
      center: latlng,
	  disableDefaultUI: false,
	  zoomControl: true,
	  streetViewControl: true,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	var marker = new google.maps.Marker({
      position: latlng,
      map: map, 
      title:"Dr. Ghervan Ovidiu - cabinet neurologie"
    });
	var stylez = [ {	 
	 featureType: "water", elementType: "all", stylers: [ { visibility: "on" }, { hue: "#0011ff" } ] },{
	 featureType: "road", elementType: "all", stylers: [ { visibility: "on" }, { hue: "#ff7700" } ] },{
	 featureType: "landscape.man_made", elementType: "all", stylers: [ { visibility: "on" }, { hue: "#00a1ff" }, { saturation: 66 }, { lightness: 0 } ] },{
	 featureType: "road.local", elementType: "all", stylers: [ { hue: "#3b3b3b" }, { saturation: 0 } ] },{
	 featureType: "all", elementType: "all", stylers: [ ] } ];
	var styledMapOptions = {
	 map: map,
	 name: "Promovis"
	 }
	var testmap =  new google.maps.StyledMapType(stylez,styledMapOptions);
	 map.mapTypes.set('Promovis', testmap);
	 map.setMapTypeId('Promovis');
  }
	function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&amp;key=AIzaSyCGLaTYTTRsQOKcb0MNfyUp0YnHL63xu8U&amp;hl=ro&callback=initialize";
    document.body.appendChild(script);
  }
  window.onload = loadScript;