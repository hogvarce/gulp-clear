app.map = new google.maps.Map(document.getElementById('Map'), {
    center: {lat: 59.92059, lng: 30.306669},
    zoom: 13,
    scrollwheel: false
});

var source = $('.map').data('source');
$.getJSON(source, function(data){
    var items   = data[2].items,
        city    = data[1].city,
        country = data[0].country;
    country.unshift({"id":" ", "text":'Выберете страну ... '});
    city.unshift({"id":" ", "text":'Выберете город ... '});
    $('select.select2[name="country"]').select2({
        data:country
    });
    $('select.select2[name="city"]').select2({
        data:city
    });
    $.each(items, function(key, val){
        var contentHtml = '';
        contentHtml += '<h3>'+val.name+'</h3>';
        contentHtml += '<p>'+val.address+'</p>';
        contentHtml += '<p>'+val.phone+'</p>';
        contentHtml += '<p>'+val.worktime+'</p>';
        var infoBubble;
        require(['InfoBubble'], function(InfoBubble){
             infoBubble = new InfoBubble({
                map: app.map,
                padding: 20,
                content: contentHtml,
                arrowPosition: 15,
                borderRadius: 0,
                minHeight: 220,
                arrowSize: 10,
                shadowStyle: 0
            });
        });
        var marker = new google.maps.Marker({
            position: val.geolocation,
            title: val.name,
            icon: val.icon
        });
        app.markers.push(marker);
        marker.setMap(app.map);
        marker.addListener('click', function(){
            infoBubble.open(app.map, marker);
        });
    });
    app.markerCluster = new MarkerClusterer(app.map, app.markers, { styles: [{
            url: "/assets/img/cluster.png",
            height: 41,
            width: 40
        }]
    });
});
