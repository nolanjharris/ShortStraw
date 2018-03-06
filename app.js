var rando = randomShorty();
var n = 0;
function hideStraws(){
	$('.straw').css('visibility', 'visible');
	var strawSelectValue = $('#strawSelect').val();
	var hideNStraws = 6 - strawSelectValue;
	
	while (n < hideNStraws){
		n++;
		$("#straw" + n).css('display', "none");
		$("#straw" + n).removeClass("shown");
	}
	while (n > hideNStraws){
		$("#straw" + n).css('display', '');
		$("#straw" + n).addClass("shown");
		n--;
	}
	rando = randomShorty();
}


function randomShorty(){
	var strawCount = $('.shown').length;
	return Math.floor(Math.random()*(strawCount)) + 1;
}

var p = 2;

$(".shown").click(function(){
	var strawCount = $('.shown').length;
	$(this).css("visibility", "hidden");
	console.log(rando);
	if($(this).attr('id') !== "straw" + (rando + (6 - strawCount))){
		// console.log($(this).attr('id'));
		$('#draw').html('SAFE!').css('color', '#66ff66');
		$('#strawCount select').css('color', '#66ff66');
		$('header h1').css('color', '#66ff66');
		setTimeout (function(){
			$('#draw').html('Draw!!').css('color', 'white');
			$('#strawCount select').css('color', 'white')
			$('header h1').css('color', 'white');
			$('#player').html('Player ' + p);
			p++;
	}, 1000);
		
	} else {
		$('#draw').html('SHORT STRAW!').css('color', '#ff471a');
		$('#strawCount select').css('color', '#ff471a');
		$('header h1').css('color', '#ff471a');
		setTimeout (function(){
			$('#draw').html('Draw!!').css('color', 'white');
			$('#strawCount select').css('color', 'white')
			$('header h1').css('color', 'white');
			$('#player').html('Player 1');
			hideStraws();
			p = 2;
	}, 2500);
	}
});







