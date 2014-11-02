$("#nav").addClass("js").before('<div id="menu">&#8801;</div>');
	$("#menu").click(function(){
		$("#nav").slideToggle();
	});
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$("#nav").removeAttr("style");
		}
	});