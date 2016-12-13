//+++++++++++++|| Get background color ||++++++++++++++++++++

function getBackColor () {
	if (eraserClicks % 2 !== 0) {
		return 'white';
	} else {
    	if (rainbowClicks % 2 === 0) {
        	return $('#slider4').val();
    	} else {
        	return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    	}
	}
}

//+++++++++++++|| Set canvas ||++++++++++++++++++++

function setCanvas () {
	$('.tbldiv').remove();
	var canvasSize = $('#slider1').val();	
	for (var i = 1; i <= Math.pow(canvasSize, 2); i++) {
        $('<div class="tbldiv"></div>').appendTo('.main-etch');
        var canvasSizePct = (100 / canvasSize + '%');
        $('.tbldiv').css({'width': canvasSizePct, 'height': canvasSizePct});
	}
}

//+++++++++++++|| Set brush roundness ||++++++++++++++++++++

function setRound () {
	var brushRound = $('#slider2').val();
	$('.heading').css({'border-radius': brushRound + "%"});
}

//+++++++++++++|| Set opacity ||++++++++++++++++++++

function setOpacity () {
	var brushOpacity = ($('#slider3').val() / 100);
	$('.heading').css({'opacity': brushOpacity});
}

//+++++++++++++|| Set color ||++++++++++++++++++++

function setColor () {
	var backColor = $('#slider4').val();
	$('.heading').css({'background-color': getBackColor});

}

//+++++++++++++|| Set mouseenter event||++++++++++++++++++++

$(function () {
	$('.main-etch').on('mouseenter', '.tbldiv', function() {
		var brushRound = $('#slider2').val();
			$(this).css({'border-radius': brushRound + "%"});
		var brushOpacity = ($('#slider3').val() / 100);
			$(this).css({'opacity': brushOpacity});
		var backColor = $('#slider4').val();	
			$(this).css({'background-color': getBackColor});
	})
})


//+++++++++++++++++|| Set Reset button ||++++++++++++++

$(function () {
    $('#reset').on('click', function() {
        var warn = confirm("Are you sure you want to clear?")
        if (warn == true) {
            $('.tbldiv').css({'background-color': 'white'});
        }
    })
});

//+++++++++++++++++|| Rainbow click ||++++++++++++++

var rainbowClicks = 0;

function rainbowClick () {
    rainbowClicks++;
    if(rainbowClicks % 2 !== 0) {
    	$('#rainbow').text("Rainbow ON");
    } else {
    	$('#rainbow').text("Rainbow OFF");
    }
}

//+++++++++++++++++|| Eraser click ||++++++++++++++
var eraserClicks = 0;

function eraserClick () {
	eraserClicks++;
	if(eraserClicks % 2 !== 0) {
    	$('#eraser').text("Eraser ON");
    } else {
    	$('#eraser').text("Eraser OFF");
    }
}


