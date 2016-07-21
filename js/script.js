$(function(){
	$("#show").bind('click',function(){
		$("#list-main").slideToggle("fast");
	});
	var listMain=$("#list-main").children();
	for(var i=0;i<listMain.length;i++){
		$(listMain[i]).bind('mouseover',function(){
			for(var j=0;j<listMain.length;j++){
				$(listMain[j]).css("background-color","#F5F5F5");
			}
			$(this).css("background-color","#008CE1");
		})
		$(listMain[i]).bind('click',function(){
			$("#show").text($(this).text());
			$("#show").attr("value",$(this).attr("value"));
			$("#list-main").slideUp("fast");
		});
	}
})
