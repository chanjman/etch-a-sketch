//+++++++++++++|| Set canvas ||++++++++++++++++++++

function setCanvas () {
	$('.tbldiv').remove();
	var canvasSize = $('#slider1').val();	
	for (var i = 1; i <= Math.pow(canvasSize, 2); i++) {
        $('<div class="tbldiv"></div>').appendTo('.main-etch');
        var canvasSizePct = (100 / canvasSize + '%');
        $('.tbldiv').css({'width': canvasSizePct, 'height': canvasSizePct});
	}
};

//+++++++++++++|| Set brush roundness ||++++++++++++++++++++

function setRound () {
	var brushRound = $('#slider2').val();
	$('.heading').css({'border-radius': brushRound + "%"});
};

//+++++++++++++|| Set opacity ||++++++++++++++++++++

function setOpacity () {
	var brushOpacity = ($('#slider3').val() / 100);
	$('.heading').css({'opacity': brushOpacity});
};

//+++++++++++++|| Set color ||++++++++++++++++++++

function setColor () {
	var brushColor = $('#slider4').val();
	$('.heading').css({'background-color': brushColor});

};

//+++++++++++++|| Set mouseenter event||++++++++++++++++++++

$(function () {
	$('.main-etch').on('mouseenter', '.tbldiv', function() {
		var brushRound = $('#slider2').val();
			$(this).css({'border-radius': brushRound + "%"});
		var brushOpacity = ($('#slider3').val() / 100);
			$(this).css({'opacity': brushOpacity});
			var brushColor = $('#slider4').val();
			$(this).css({'background-color': brushColor});
	})
});


//+++++++++++++++++|| Set Reset button ||++++++++++++++

$(function () {
    $('#reset').on('click', function() {
        var warn = confirm("Are you sure you want to clear?")
        if (warn == true) {
            $('.tbldiv').css({'background-color': 'white'});
        }
    })
});

/*+++++++++++++++++|| Rainbow click ||++++++++++++++
var clicks = 0;

function rainbowClick () {
	clicks++
};*/


