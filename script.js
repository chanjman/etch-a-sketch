//+++++|| Get value from .toggletwo ||+++++++++++

function getRound() {
   brushRound = $('#toggletwoinput').val();
}


//++++|| Get value from slider and set .heading back color ||++++

$(function () {
    $('#togglethreeinput').on('change', function() {
        var brushColor = $('#togglethreeinput').val();
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

//++++|| Get value from slider and set .tbldiv background color ||+++

function getColor() {
   brushColor = $('#togglethreeinput').val();
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
        $(this).css({'background-color': brushColor});
        $(this).css({'border-radius': brushRound + '%'})
    });
});

//+++++++++++++++++|| Set Reset button ||++++++++++++++

$(function () {
    $('#reset').on('click', function() {
        $('.tbldiv').css({'background-color': 'white'});
    });
});

//+++++++++++++++++|| Set Eraser button ||++++++++++++++

var clicks = 0;

$(function(){
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


