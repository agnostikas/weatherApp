var temp;
var ForC;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        jQuery.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(json) {
            jQuery("span.city").html(json.name);
            temp = json.main.temp;
            ForC = ' C ';
            jQuery("span.temperature").html(temp + ForC);
            jQuery("img.icon").attr("src", json.weather[0].icon);
        });
    });
}

jQuery(document).ready(function() {
    jQuery("button").on("click", function() {
        if (ForC == ' C ') {
            ForC = ' F ';
            temp = temp * 9 / 5 + 32;
        } else {
            ForC = ' C ';
            temp = (temp - 32) * 5 / 9;
        }
        jQuery("span.temperature").html(temp.toFixed(2) + ForC);
    });
});