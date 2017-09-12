$(function(){
	var u = document.location.href;
	console.log(u);



	$(".btnBox input:last-child").click(function(){
		$(".refuseBox").css("display","block");
	});
	$(".refuseBoxBtn input:first-child").click(function(){
		var r = confirm("确定拒绝吗？");
		if(r){
			console.log(r);
			$(".refuseBox textarea").val("");
			$(".refuseBox").css("display","none");
		}else{
			console.log(r);
		}
	});
	$(".refuseBoxBtn input:last-child").click(function(){
		$(".refuseBox textarea").val("");
		$(".refuseBox").css("display","none");
	});
})