$(function(){
	$('#page1down').click(function(){
		$('#page2').css('display','block').siblings('.box').css('display','none')
	})
	$('#page2down').click(function(){
		$('#page3').css('display','block').siblings('.box').css('display','none')
	})
	$('#page3down').click(function(){
		$('#page4').css('display','block').siblings('.box').css('display','none')
	})
	$('#page4down').click(function(){
		$('#page5').css('display','block').siblings('.box').css('display','none')
	})
	$('#page5down').click(function(){
		$('#page1').css('display','block').siblings('.box').css('display','none')
	})
});