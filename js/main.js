$(document).ready(function(){
	// Since no new elements are fetched via AJAX.
	// Only traverse the DOM for these objects once.
	var bigFat = $('#BigFatContainer');
	var navigation = $('#Navigation');
	var mobileHeader = $('#MobileHeader');
	var indicator = $('#Indicator');

	// Place the indicator in the right position at page load.
	indicator.css({marginTop: getIndicatorPosition()});
	// Set some settings in the localscroll plugin.
	navigation.localScroll({duration:800, hash:true});

	window.onhashchange = function(){
		position = getIndicatorPosition();
		indicator.animate({marginTop: position},function(){
			// If a phone is viewing the page.
			if(mobileHeader.css('display') != 'hidden'){
				closeMenuOnMobile(400);
			}
		});
	};

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

		bigFat.animate({left: '155px'}, time);
		mobileHeader.animate({left: '155px'}, time);
	}

	function closeMenuOnMobile(time){
		if(bigFat.css('left') == '155px'){
			if(time == undefined)
				time = 200;

			bigFat.animate({left: '0px'}, time);
			mobileHeader.animate({left: '0px'}, time);
		}
	}
});

function getIndicatorPosition(){
	var offset = 0;

	var page = location.pathname.split('/');
	page = page[page.length - 2];
	// If on a dated blog entry
	if (!isNaN(page))
		page = "";
	// If we're at the index page.
	if (page === "_site" || page === "")
		offset = $('#Logo').position().top + 71;
	else
		offset = $('#' + page).position().top - 9;

	if(window.innerHeight < 420)
		offset -= 156;
	return offset;
}
