$(function(){
	console.log(2);
	$(".getUserDetails").click(function(e){
		console.log($(".getUserDetails"));
		console.log(e.target);
		var c = $(".getUserDetails").index(e.target);
		console.log(c);
		document.location.href="userDetails.html?count="+c;
	});
})
