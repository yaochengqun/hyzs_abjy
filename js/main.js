$(function() {
	$( "#accordion" ).accordion({
		heightStyle:"content"
	});//折叠面板
	// $("#pManageMenu").menu();
	$(".section-aside li").click(function(e){//section-aside点击添加背景
		$(".section-aside li").removeClass('active');
		// console.log(e.target);
		// console.log($(e.target).parent());
		$(e.target).parent().addClass("active");
	});
	$(".section-aside h3").click(function(){//侧边栏点击h3去掉所有li的active类
		$(".section-aside li").removeClass('active');
	});
	$(".section-aside .userManage").click(function(){//侧边栏点击用户管理，跳转到userManage.html
		$("iframe").attr("src","userManage.html");
	});
	$("#search-btn").click(function(){
		var company = $("#company-name").val();
		var sendUrl = '';//用于存储要请求的url
		var sendData = '';//用于存储要发送的参数
		if(company==""){//判断所在保安公司
			sendUrl = "http://app.hyzsnt.com/ProtectHomelandService.asmx/GetSecurityInfoAllList";
			sendData = "currId=246";
		}else{
			sendUrl = "http://app.hyzsnt.com/ProtectHomelandService.asmx/GetSecurityCompanyUserList";
			sendData = "currId=246&Company_id="+company;
		}
		$.ajax({ //请求数据
			url:sendUrl,
			type:"get",
			data:sendData,
			success:function(response){
				var res = JSON.parse(response);
				var infoList = res.securityInfoList;
				var newInfo = '';
				// console.log(infoList);
				var listTable = $(".response-list");
				listTable.html("<tr>\
							<th>注册名</th>\
							<th>昵称</th>\
							<th>真实姓名</th>\
							<th>性别</th>\
							<th>年龄</th>\
							<th>手机号</th>\
							<th>入驻小区信息</th>\
							<th>所在安保公司</th>\
							<th>身份类型</th>\
							<th>详情</th>\
							<th>删除</th>\
							</tr>");
				for(var i = 0;i < infoList.length;i++){//遍历获取到的数据
					newInfo = document.createElement("tr");
					newInfo.innerHTML = "<td>"+infoList[i].login_name+"</td>\
							<td>"+infoList[i].ss_nickname+"</td>\
							<td>"+infoList[i].RealName+"</td>\
							<td>"+infoList[i].Sex+"</td>\
							<td>"+infoList[i].Age+"</td>\
							<td>"+infoList[i].PhoneNumber+"</td>\
							<td>"+infoList[i].LiveCommunity+"</td>\
							<td>"+infoList[i].Company+"</td>\
							<td>"+infoList[i].IdentityType+"</td>\
							<td><a class='view'>查看</a></td>\
							<td><a class='delete'>删除</a></td>";
					listTable.append(newInfo);
				}	
			}
		});
	});
	$(".response-list").click(function(e){//点击删除，删除列表中对应行
		if(e.target.className == "delete"){
			$(e.target).parent().parent().remove();
		}
	});
});

//切换到添加用户
$(".addUser").click(function(){
	$("iframe").attr({"src":"addUser.html"});
});
//切换到用户管理入驻审核
$(".userReview").click(function(){
	$("iframe").attr({"src":"userReview.html"});
});
//切换到公司管理
$(".companyManage").click(function(){
	$("iframe").attr({"src":"companyManage.html"});
});
//切换到公司详情
$(".companyDetails").click(function(){
	$("iframe").attr({"src":"companyDetails.html"});
});
//切换到商品管理
$(".productManage").click(function(){
	$("iframe").attr({"src":"productManage.html"});
});
//切换到商品详情
$(".productDetails").click(function(){
	$("iframe").attr({"src":"productDetails.html"});
});
//切换到添加商品
$(".addProduct").click(function(){
	$("iframe").attr({"src":"addProduct.html"});
});
//切换到结算系统
$(".balanceSystem").click(function(){
	$("iframe").attr({"src":"balanceSystem.html"});
});
//切换到安防知识
$(".securityKnowledge").click(function(){
	$("iframe").attr({"src":"securityKnowledge.html"});
});
//切换到保安风采
$(".securityMien").click(function(){
	$("iframe").attr({"src":"securityMien.html"});
});
//切换到英雄之家
$(".heroHome").click(function(){
	$("iframe").attr({"src":"heroHome.html"});
});

