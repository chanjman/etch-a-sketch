opacity = $('#toggletwoinput').val();
roundness = $('#togglethreeinput').val();


$(function setColor() {
    $('#togglefourinput').on('change', function() {
        brushColor = $('#togglefourinput').val();
        colorHeader = {'color': brushColor};
        $('h1').css(colorHeader);
    });
});


