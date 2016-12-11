//Get value from slider and set header font color

$(function setColor() {
    $('#togglefourinput').on('change', function() {
        brushColor = $('#togglefourinput').val();
        colorHeader = {'color': brushColor};
        $('h1').css(colorHeader);
    });
});


opacity = $('#toggletwoinput').val();
roundness = $('#togglethreeinput').val();