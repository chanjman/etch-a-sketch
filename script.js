//+++++|| Get value from .toggletwo ||+++++++++++

function getRound() {
   brushRound = $('#toggletwoinput').val();
}

//+++++|| Get value from .toggletwo ||+++++++++++

function getOpacity () {
    brushOp = ($('#togglethreeinput').val())/100;
}

//+++++++++++++++++++++|| Get random rainbow color ||+++++++++++++++++
function getRandomColor() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}


//++++|| Get value from slider and set .heading back color ||++++

$(function () {
    $('#togglefourinput').on('change', function() {
        var brushColor = $('#togglefourinput').val();
        $('.heading').css({'background-color': brushColor})
    });
});

//+++|| Get value from slider and set .heading roundness ||+++++++

$(function () {
    $('#toggletwoinput').on('change', function () {
        var brushRound = $('#toggletwoinput').val();
        $('.heading').css({'border-radius': brushRound + 'px'})
    });
});

//+++|| Get value from slider and set .heading opacity ||+++++++

$(function () {
    $('#togglethreeinput').on('change', function () {
        var brushOpacity = $('#togglethreeinput').val();
        brushOpacity /= 100;
        $('.heading').css({'opacity': brushOpacity})
    });
});

//++++|| Get value from color slider||+++

function getColor() {
   brushColor = $('#togglefourinput').val();
}

//++++++++++|| Remove table ||+++++++++++++

function removeTable () {
    $('.tbldiv').remove();
}

//++++++++|| Get div size ||+++++++++++++++

function getDivSize () {
    tbldiv_size = (100 / brushSize + '%');
    return tbldiv_size;
}

//++++|| Get value from brush size slider and add table ||+++++++++++

$(function addTable () {
        $('#toggleoneinput').on('change', function () {
            removeTable();
            brushSize = $('#toggleoneinput').val();
            for (var i = 1; i <= Math.pow(brushSize, 2); i++) {
                $('<div class="tbldiv"></div>').appendTo('.main-etch');
                getDivSize();
                $('.tbldiv').css({'width': tbldiv_size, 'height': tbldiv_size})
            }
        });
});

//+++++|| Set mouseenter to change color ||+++++++++++++++++

$(function changeColor () {
    $('.main-etch').on('mouseenter', '.tbldiv',function () {
        getColor();
        getRound();
        getOpacity();
        $(this).css({'background-color': brushColor});
        $(this).css({'border-radius': brushRound + '%'});
        $(this).css({'opacity': brushOp });
    });
});

//+++++++++++++++++|| Set Reset button ||++++++++++++++

$(function () {
    $('#reset').on('click', function() {
        var warn = confirm("Are you sure you want to clear?")
        if (warn == true) {
            $('.tbldiv').css({'background-color': 'white'});
        }
    });
});

//+++++++++++++++++|| Set Eraser button ||++++++++++++++


$(function(){
    var clicks = 0;
    $('#eraser').on('click', function() {
        clicks++;
        if (clicks % 2 !== 0) {
            $('#eraser').text("Click for OFF");
            $('.main-etch').on('mouseenter', '.tbldiv', function () {
                $(this).css({'background-color': 'white'});
            });
        } else {
            $('#eraser').text("Eraser");
            $('.main-etch').on('mouseenter', '.tbldiv',function () {
                    getColor();
                    getRound();
                    $(this).css({'background-color': brushColor});
                    $(this).css({'border-radius': brushRound + '%'})
            });
        }
    });

});

//+++++++++++++++++|| Set Rainbow button ||++++++++++++++


$(function(){
    var clicks = 0;
    $('#rainbow').on('click', function() {
        clicks++;
        if (clicks % 2 !== 0) {
            $('#rainbow').text("Click for OFF");
            $('.main-etch').on('mouseenter', '.tbldiv', function () {
                $(this).css({'background-color': getRandomColor});
            });
        } else {
            $('#rainbow').text("Rainbow");
            $('.main-etch').on('mouseenter', '.tbldiv',function () {
                getColor();
                getRound();
                $(this).css({'background-color': brushColor});
                $(this).css({'border-radius': brushRound + '%'})
            });
        }
    });

});

//+++++++++++++++++++++|| Get random rainbow color versions ||+++++++++++++++++

/*function getRandomColor() {
    function c() {
        var hex = Math.floor(Math.random()*256).toString(16);
        return ("0"+String(hex)).substr(-2); // pad with zero
    }
    return "#"+c()+c()+c();
}*/

/*function getRandomColor() {
    var letters = 'ABC1234'.split('');
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}*/


