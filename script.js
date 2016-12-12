//Get value from slider and set heading back color

$(function () {
    $('#togglefourinput').on('change', function() {
        var brushColor = $('#togglefourinput').val();
        $('.heading').css({'background-color': brushColor})
    });
});

//Get value from slider and set heading roundness

$(function () {
    $('#togglethreeinput').on('change', function () {
       var brushRound = $('#togglethreeinput').val();
        $('.heading').css({'border-radius': brushRound + 'px'})
    })
});