<script>
	$("#desktoplink").off().click(function() {
		$("#desktoplink").addClass( "selected" );
		$(".desktop").css("display","block");
		$("#mobilelink").removeClass( "selected" );
		$(".mobile").css("display","none");
		$("#wirelink").removeClass( "selected" );
		$(".wire").css("display","none");
	});

	$("#mobilelink").off().click(function() {
		$("#desktoplink").removeClass( "selected" );
		$(".desktop").css("display","none");
		$("#mobilelink").addClass( "selected" );
		$(".mobile").css("display","flex");
		$("#wirelink").removeClass( "selected" );
		$(".wire").css("display","none");
	});

	$("#wirelink").off().click(function() {
		$("#desktoplink").removeClass( "selected" );
		$(".desktop").css("display","none");
		$("#mobilelink").removeClass( "selected" );
		$(".mobile").css("display","none");
		$("#wirelink").addClass( "selected" );
		$(".wire").css("display","block");
	});
</script>
