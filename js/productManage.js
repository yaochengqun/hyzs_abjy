$(function(){
	$(".typeBtn").click(function(){
		$(".secTypeBox").css("display","block");
	});
	$(".companyBtn").click(function(){
		$(".secCompanyBox").css("display","block");
	});
	$(".resList").click(function(e){//点击删除，删除列表中对应行
		if(e.target.className == "delete"){
			$(e.target).parent().parent().remove();
		}
	});
})