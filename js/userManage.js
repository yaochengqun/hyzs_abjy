$(function(){
	function getUserInfo(infoUrl,infoData){
		$.ajax({
			url:infoUrl,
			type:"get",
			data:infoData,
			success:function(res){
				var securityInfoAllList = JSON.parse(res).securityInfoList;
				var listTable = $(".userList");
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
				var newInfo;
				for(var i = 0;i < securityInfoAllList.length;i++){
					newInfo = document.createElement("tr");
					newInfo.innerHTML='<td>'+securityInfoAllList[i].login_name+'</td>\
					<td>'+securityInfoAllList[i].ss_nickname+'</td>\
					<td>'+securityInfoAllList[i].RealName+'</td>\
					<td>'+securityInfoAllList[i].Sex+'</td>\
					<td>'+securityInfoAllList[i].Age+'</td>\
					<td>'+securityInfoAllList[i].PhoneNumber+'</td>\
					<td>'+securityInfoAllList[i].WorkCommunity+'</td>\
					<td>'+securityInfoAllList[i].Company+'</td>\
					<td>'+securityInfoAllList[i].IdentityType+'</td>\
					<td>\
						<a class="view">查看</a>\
					</td>\
					<td>\
						<a class="delete">删除</a>\
					</td>';
					listTable.append(newInfo);
				}
			}
		})
	}
	getUserInfo("http://app.hyzsnt.com/ProtectHomelandService.asmx/GetSecurityInfoAllList","");
	$(".searchBtn").click(function(){
		var company = $("#companyName").val();
		var sendUrl="";
		var sendData="";
		if(company == ""){
			sendUrl="http://app.hyzsnt.com/ProtectHomelandService.asmx/GetSecurityInfoAllList";
			sendData="";
		}else{
			sendUrl="http://app.hyzsnt.com/ProtectHomelandService.asmx/GetSecurityCompanyUserList";
			sendData="currId=246&Company_id="+company;
		}
		getUserInfo(sendUrl,sendData);
	});
	$(".userList").click(function(e){//点击删除，删除列表中对应行
		if(e.target.className =="delete"){
			$(e.target).parent().parent().remove();
		}
	});

})