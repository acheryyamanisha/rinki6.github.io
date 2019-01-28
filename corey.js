$(document).ready(function(){
	//$("#blog").click(function(){
	//	$("#links").slideToggle();
	//});
	
	$(".btn").on ("click",function(){
		$("#search").slideToggle("slow");
	});
	
	
	/*
	$(!(".btn")).click(function(){
		$("#search").hide("slow");
	});
	
	$("#arrow").click(function(){
		$("#third").scrollTop(0);
	});
	*/
	
	$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#third").offset().top
    }, 2000);
});
	
		$("#fhead img").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 5000);
});

	$("#ficon").click(function(){
		var txt = $('#email').val();  
                if (txt.length == 0) {  
                    $("#remarks").val("*Please enter your email id");
				}
	});
	
	$("#all").click(function(){
		$("#one,#two,#three,#four,#five,#six,#seven").show();
	});
	
	$("#design").click(function(){
		$("#three,#four,#five,#six,#seven").hide();
		$("#one,#two").show();
	});
	
	$("#code").click(function(){
		$("#one,#two").hide();
		$("#three,#four,#five,#six,#seven").show();
	});
	
	$("#art").click(function(){
		$("#two,#four,#six").hide();
		$("#one,#three,#five,#seven").show();
	});
});

  $(document).ready(function(){
        // Show hide popover
        $("#blog").click(function(){
            $(this).find("#links").slideToggle("slow");
        });
    });
    $(document).on("click", function(event){
        var $trigger = $("#blog");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $("#links").slideUp("slow");
        }            
    });
	
	