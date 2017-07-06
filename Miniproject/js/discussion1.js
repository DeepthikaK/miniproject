$(document).ready(function(){
	setTimeout(function(){
$('#main_body').html('<h1> College Discussions</h1>');
	$.ajax({
		url:"college.php",
		type:"post",
		
		dataType:"json",
		success:function(data){
			var i=0;
			for(i=0;i<data.rows;i++){
				$('#main_body').append('<u><div class="posts"><div class="sender"><span id="sender_roll">'+data[i].sender+' :</span> &nbsp'+data[i].message+'</div><div class="date">'+data[i].date+'</div></div><hr width="100%" height="3px"/>');
				
				
				
			}
		}
		
	});
	},10);
});
$('#menu0').click(function(){
	
		$('#main_body').html('<h1> College Discussions</h1>');
	$.ajax({
		url:"college.php",
		type:"post",
		
		dataType:"json",
		success:function(data){
			var i=0;
			for(i=0;i<data.rows;i++){
				$('#main_body').append('<u><div class="posts"><div class="sender"><span id="sender_roll">'+data[i].sender+' :</span> &nbsp'+data[i].message+'</div><div class="date">'+data[i].date+'</div></div><hr width="100%" height="3px"/>');
				
				
				
			}
		}
		
	});
	
});
$('#department_dis').click(function(){
	$(this).toggleClass('active');
	$('#main_body').html('<h1>Department Discussions</h1>');
	$.ajax({
		url:"discussion.php",
		type:"post",
		
		dataType:"json",
		success:function(data){
			var i=0;
			for(i=0;i<data.rows;i++){
				$('#main_body').append('<u><div class="posts"><div class="sender"><span id="sender_roll">'+data[i].sender+' :</span> &nbsp'+data[i].message+'</div><div class="date">'+data[i].date+'</div></div><hr width="100%" height="3px"/>');
				
				
				
			}
		}
		
	});
});
function fun(){
	location.href='logout.php';
}