//
// Slider
// * místo one,two,three,four zobecnit pomocí attr()
// * např. $(this).attr("href")

var allSlides, slide1, slide2, slide3, slide4, allSubnavs;

allSlides = $('.slide');
slide1 = $('#slide-1');
slide2 = $('#slide-2');
slide3 = $('#slide-3');
slide4 = $('#slide-4');

allSubnavs = $('.slide-nav');

// Next-Prev navigation for slider
$('.next').on('click', function(e) {
		e.preventDefault();

		// Sub-nav buttons have to slide too
		nextSlideNav = $('.active-slide.slide-nav').next('div');
		if (nextSlideNav.length == 0) {
				nextSlideNav = $('.slide-nav:first');
		}
		nextSlideNav.siblings().removeClass('active-slide');
		nextSlideNav.addClass('active-slide');

		// Slides
		currentSlide = $('.active-slide.slide');
		currentSlide.addClass('recent-slide');

		nextSlide = $('.active-slide.slide').next('.slide');
		if (nextSlide.length == 0) {
				nextSlide = $('.slide:first');
		}

		allSlides.removeClass('active-slide');
		nextSlide.removeClass('move-right move-left').addClass('active-slide');

		setTimeout(function() {
				$(nextSlide).prevAll('.slide').removeClass('move-right').addClass('move-left');
				$(nextSlide).nextAll('.slide').removeClass('move-left').addClass('move-right');

		}, 250);

		setTimeout(function() {
				currentSlide.removeClass('recent-slide');
		}, 610);

});

$('.prev').on('click', function(e) {
		e.preventDefault();

		// Sub-nav buttons have to slide too
		prevSlideNav = $('.active-slide.slide-nav').prev('div');
		if (prevSlideNav.length == 0) {
				prevSlideNav = $('.slide-nav:last');
		}
		prevSlideNav.siblings().removeClass('active-slide');
		prevSlideNav.addClass('active-slide');

		// Slides
		currentSlide = $('.active-slide.slide');
		currentSlide.addClass('recent-slide');

		prevSlide = $('.active-slide.slide').prev('.slide');
		if (prevSlide.length == 0) {
				prevSlide = $('.slide:last');
		}

		allSlides.removeClass('active-slide');
		prevSlide.removeClass('move-right move-left').addClass('active-slide');

		setTimeout(function() {
				$(prevSlide).prevAll('.slide').removeClass('move-right').addClass('move-left');
				$(prevSlide).nextAll('.slide').removeClass('move-left').addClass('move-right');
		}, 250);

		setTimeout(function() {
				currentSlide.removeClass('recent-slide');
		}, 610);

});

// Sub-nav for slider
$('.one').on('click', function(e) {
		e.preventDefault();
		// 	Sub-nav
		currentSlideNav = $(this).closest('div');
		currentSlideNav.siblings().removeClass('active-slide');
		currentSlideNav.addClass('active-slide');

		// 	Slides
		currentSlide = $('.active-slide.slide');
		currentSlide.addClass('recent-slide');

		$(allSlides).removeClass('active-slide');
		$(slide1).removeClass('move-left').addClass('active-slide');

		setTimeout(function() {
				$(slide1).nextAll('.slide').removeClass('move-left').addClass('move-right');
		}, 250);

		setTimeout(function() {
				currentSlide.removeClass('recent-slide');
		}, 610);

});

$('.two').on('click', function(e) {
		e.preventDefault();
		// 	Sub-nav
		currentSlideNav = $(this).closest('div');
		currentSlideNav.siblings().removeClass('active-slide');
		currentSlideNav.addClass('active-slide');

		// 	Slides
		currentSlide = $('.active-slide.slide');
		currentSlide.addClass('recent-slide');

		$(allSlides).removeClass('active-slide');
		$(slide2).removeClass('move-right move-left').addClass('active-slide');

		setTimeout(function() {
				$(slide2).prevAll('.slide').removeClass('move-right').addClass('move-left');
				$(slide2).nextAll('.slide').removeClass('move-left').addClass('move-right');
		}, 250);

		setTimeout(function() {
				currentSlide.removeClass('recent-slide');
		}, 610);

});

$('.three').on('click', function(e) {
		e.preventDefault();
		// 	Sub-nav
		currentSlideNav = $(this).closest('div');
		currentSlideNav.siblings().removeClass('active-slide');
		currentSlideNav.addClass('active-slide');

		// 	Slides
		currentSlide = $('.active-slide.slide');
		currentSlide.addClass('recent-slide');

		$(allSlides).removeClass('active-slide');
		$(slide3).removeClass('move-right move-left').addClass('active-slide');

		setTimeout(function() {
				$(slide3).prevAll('.slide').removeClass('move-right').addClass('move-left');
				$(slide3).nextAll('.slide').removeClass('move-left').addClass('move-right');
		}, 250);

		setTimeout(function() {
				currentSlide.removeClass('recent-slide');
		}, 610);

});

$('.four').on('click', function(e) {
		e.preventDefault();
		// 	Sub-nav
		currentSlideNav = $(this).closest('div');
		currentSlideNav.siblings().removeClass('active-slide');
		currentSlideNav.addClass('active-slide');

		// 	Slides
		currentSlide = $('.active-slide.slide');
		currentSlide.addClass('recent-slide');

		$(allSlides).removeClass('active-slide');
		$(slide4).removeClass('move-right').addClass('active-slide');

		setTimeout(function() {
				$(slide4).prevAll('.slide').removeClass('move-right').addClass('move-left');
		}, 250);

		setTimeout(function() {
				currentSlide.removeClass('recent-slide');
		}, 610);

});