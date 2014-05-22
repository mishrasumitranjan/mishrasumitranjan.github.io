$("document").ready( function() {
	var meridian = 0;
	setInterval(function(){
		var tym = new Date();
		var seconds = tym.getSeconds();
		var i = (seconds+1) * 6;
		if(i <= 180)
		{
			$(".second_hide1").show();
			$(".second_hide2").show();
			$(".second_hide2_2").show();
			$(".second_hide1").css("transform" , "rotate("+i+"deg)");
			$(".second_hide2").css("transform" , "rotate(0deg)");
		}
		else if(i <= 360)
		{
			$(".second_hide1").hide();
			$(".second_hide2_2").hide();
			$(".second_hide2").css("transform" , "rotate("+(i-180)+"deg)");
			if(i>192)
				$(".second_hide1").css("transform" , "rotate(0deg)");
			if(i==360)
				i=0;
		}
		var minutes = tym.getMinutes();
		var j = minutes * 6;
		if(j <= 180)
		{
			$(".minute_hide1").show();
			$(".minute_hide2").show();
			$(".minute_hide2_2").show();
			$(".minute_hide1").css("transform" , "rotate("+j+"deg)");
			$(".minute_hide2").css("transform" , "rotate(0deg)");
		}
		else if(j <= 360)
		{
			$(".minute_hide1").hide();
			$(".minute_hide2_2").hide();
			$(".minute_hide2").css("transform" , "rotate("+(j-180)+"deg)");
			if(j>192)
				$(".minute_hide1").css("transform" , "rotate(0deg)");
			if(j==360)
				j=0;
		}
		var hours = tym.getHours();
		if (hours > 12) {
			var k = (hours-12) * 30;
			meridian = 1;
		}
		else {
			var k = hours * 30;
			meridian = 0;
		}
		k = k + (minutes * 0.5)
		if(k <= 180)
		{
			$(".hour_hide1").show();
			$(".hour_hide2").show();
			$(".hour_hide2_2").show();
			$(".hour_hide1").css("transform" , "rotate("+k+"deg)");
			$(".hour_hide2").css("transform" , "rotate(0deg)");
		}
		else if(k <= 360)
		{
			$(".hour_hide1").hide();
			$(".hour_hide2_2").hide();
			$(".hour_hide2").css("transform" , "rotate("+(k-180)+"deg)");
			if(k>192)
				$(".hour_hide1").css("transform" , "rotate(0deg)");
			if(k==360)
				k=0;
		}
		if (meridian == 0)
		{
			$(".mid h1").html("AM");
		}
		else
		{
			$(".mid h1").html("PM");
		}
	}, 500);
});