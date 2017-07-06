
$('#menu1').click(function(){
	$(this).toggleClass('active');
	$('#main_body').html('');
	$.ajax({
		url:"discussion.php",
		type:"post",
		
		dataType:"json",
		success:function(data){
			var i=0;
			for(i=0;i<data.rows;i++){
				$('#main_body').append('<u><div class="posts">'+data[i].sender+'@'+data[i].date+'</u>:'+data[i].message+'</div><br><br>');
				
				
				
			}
		}
		
	});
});
function fun(){
	location.href='logout.php';
}