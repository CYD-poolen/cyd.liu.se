$(document).ready(function(){
	// Since no new elements are fetched via AJAX.
	// Only traverse the DOM for these objects once.
	var bigFat = $('#BigFatContainer');
	var navigation = $('#Navigation');
	var mobileHeader = $('#MobileHeader');
	var indicator = $('#Indicator');

	// Place the indicator in the right position at page load.
	indicator.css({marginTop: getPosition()});
	// Set some settings in the localscroll plugin.
	navigation.localScroll({duration:800, hash:true});

	$(window).hashchange( function(){
		position = getPosition();
		indicator.animate({marginTop: position},function(){
			// If a phone is viewing the page.
			if(mobileHeader.css('display') != 'hidden'){
				closeMenuOnMobile(400);
			}
		});
	});

	// Opening the menu on phones or small screens.
	mobileHeader.click(function(){
		if(bigFat.css('left') != '155px') {
			openMenuOnMobile();
		}
	});

	// Clicking anywhere but the menu when the menu
	// is open closes the menu.
	bigFat.click(closeMenuOnMobile);
	mobileHeader.click(closeMenuOnMobile);

	function openMenuOnMobile(time){
		if(time == undefined)
			time = 200;
		//	bigFat.css('-webkit-transform', 'translateX(155px)');
		bigFat.animate({left: '155px'}, time);
		mobileHeader.animate({left: '155px'}, time);
	}

	function closeMenuOnMobile(time){
		if(bigFat.css('left') == '155px'){
			if(time == undefined)
				time = 200;
			//	bigFat.css('-webkit-transform', 'translateX(0px)');
			bigFat.animate({left: '0px'}, time);
			mobileHeader.animate({left: '0px'}, time);
		}
	}
});

function getPosition(){
	var hash = location.hash;
	var position;
	if(hash == '#services')
		position = '-6.6em';
	else if(hash == '#projects')
		position = '-5.3em';
	else if(hash == '#contact')
		position = '-3.9em';
	else if(hash == '#jobs')
		position = '-2.6em';
	return position;
}
