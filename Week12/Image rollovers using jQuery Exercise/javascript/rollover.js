$(document).ready(function() {
	$("#image_rollovers img").each(function() {
		// get old and new urls
		var oldURL = $(this).attr("src");
		var NeVar = $(this).attr("id");
		var newURL = "./images/" + NeVar+ ".jpg";
		
		// preload images		
		var rolloverImage = new Image();
		rolloverImage.src = newURL;
		
		// set up event handlers			
		$(this).hover(
			function() {
				$(this).attr("src", newURL);
			},
			function() {
				$(this).attr("src", oldURL);
			}
		); // end hover
	}); // end each
}); // end ready

