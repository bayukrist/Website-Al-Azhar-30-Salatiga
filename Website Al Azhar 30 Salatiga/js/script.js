$(document).ready(function() {
	$('.Container-horizontal').pagepiling({
	    menu: null,
        direction: 'horizontal',
        verticalCentered: false,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 5,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        menu: '.menu',
        anchors: ['page1','page2','page3','page4','page5','page6'],
        navigation: false,
        // navigation: {
        //     'textColor': '#000',
        //     'bulletsColor': 'white',
        //     'position': 'bottom',
        //     'tooltips': ['section1', 'section2', 'section3', 'section4','section5','section6']
        // },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 1,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
    $.fn.pagepiling.setAllowScrolling(true);

});