(function(){
	'use strict';
	// google api key: AIzaSyDduW921vsA0NTh6tI85Cg06VCN_Ll7st8
	$(window).load(function(){
		$('body').attr('data-ajax-transitions', false);
		$('#ajax-loading-screen').hide();
	});

	$(document).ready(function(){
		var _innerHeight1 = $('.timeline-group.first').innerHeight() + 30,
		    _innerHeight2 = $('.timeline-group.second').innerHeight() + 30,
				_innerHeight3 = $('.timeline-group.third').innerHeight() + 30;
		TweenLite.fromTo("#accordion .panel.first", 2, {css: {opacity:0}}, {css: {opacity: 1}, ease: Sine});
		TweenLite.fromTo(".timeline-group.first", 1, {css: {height: "0px", overflow: "hidden"}}, {css: {height: _innerHeight1, overflow: "visible"}, delay: 1, ease: Sine});
		TweenLite.fromTo(".timeline-group.second", 1, {css: {height: "0px", overflow: "hidden"}}, {css: {height: _innerHeight2, overflow: "visible"}, delay: 3, ease: Elastic});
		TweenLite.fromTo(".timeline-group.third", 1, {css: {height: "0px", overflow: "hidden"}}, {css: {height: _innerHeight3, overflow: "visible"}, delay: 5, ease: Elastic});
		TweenLite.to(".timeline-group.first .item-content", 1, {opacity: 1, delay: 2, ease: Power1.easeInOut});
		TweenLite.to(".timeline-group.second .item-content", 1, {opacity: 1, delay: 5, ease: Power1.easeInOut});
		TweenLite.to(".timeline-group.third .item-content", 1, {opacity: 1, delay: 7, ease: Power1.easeInOut});
		TweenLite.to("#disqus_thread", 1, {opacity: 1, delay: 6, ease: Power2.easeInOut});
	});

	$(window).resize(function() {
			$(".timeline-group.first").css("height", "auto");
			$(".timeline-group.second").css("height", "auto");
			$(".timeline-group.third").css("height", "auto");
	});

})();

var app = angular.module('app', ['ngSanitize']);

app.controller('infoCtrl', function($scope){
  $scope.currentMode = 'list'
	var ele = $('#avatar');
	var tween = TweenLite.to(ele, 1, {scaleX: 1.2, scaleY:1.2, ease:Power1.easeInOut, y: 0});

	TweenLite.to(".header-timeline.first", 2, {opacity: 1, ease:Power1.easeInOut});
	TweenLite.to(".header-timeline.second", 1, {opacity: 1, ease:Power1.easeInOut, delay: 2});
	TweenLite.to(".header-timeline.third", 1, {opacity: 1, ease:Power1.easeInOut, delay: 4});

	$scope.showOpt = false;
	$scope.toggleShowOpt = function(){
		$scope.showOpt = !$scope.showOpt;
	}

	$scope.openModal = function() {
			$('.modal').addClass('is-active');
	}

	$scope.closeModal = function() {
		$('.modal').removeClass('is-active');
	}

	$scope.isToggleMode = function() {
	  switch ($scope.currentMode) {
	  	case 'list':
	  		$scope.currentMode = 'grid';
	  		break;
			case 'grid':
			  $scope.currentMode = 'list';
				break;
	  	default:
	  }
	}

	$scope.toggleScreen = function(val) {
			return val == 'full' ? $('body').addClass('fullscreen') : $('body').removeClass('fullscreen');
	}

	$scope.checkCurrentMode = function() {
		return $scope.currentMode == 'list' ? 'Grid view' : 'List view';
	}

	$scope.dataWorkexperience = [
		{
			company: 'Gianty Co.Ltd',
			time: 'July 2015',
			years: '2015',
			works: [
				{content: '- Do Intranet Social Network Website for company, help improve UI/UX and developed main company website gnt.co.jp.'},
				{content: '- Created and maintained the front-end standards document and oversaw production of Javascript, HTML, and CSS.'},
				{content: '- Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness.'},
				{content: '- Fixed front end bugs.'},
				{content: '- Write Hybird App Portal Internal Human manager like check in out, Absence request..., fix bug app.'},
				{content: '- Experience with Angular , Ionic, Tweenlite.'}
			]
		},
		{
			company: 'Isobar Ecommerce VietNam',
			time: 'March 2017',
			years: '2017',
			works: [
				{content: '- Front-end developer for Magento platform theme UI.'},
				{content: '- UI/UX developer, fix bug, HTML, CSS, Javascript.'},
				{content: '- Fix FrontEnd Bugs, JavaScript, HTML, CSS.'},
				{content: '- Research new technical about FrontEnd.'}
			]
		},
		{
			company: 'Moni Media',
			time: 'November 2018 - Now',
			years: '2018',
			works: [
				{content: '- Work as Front-end developer for Magento platform theme UI.'},
				{content: '- Fix FrontEnd Bugs, JavaScript, HTML, CSS.'}
			],
			process: true
		}
	]

	$scope.currentInfo = {
		helloText: `Hi, I'm a FrontEnd Developer.`,
		address: '666/47 (3/2 Street, Q.10, tp.HCM)',
		mail: 'vhuy271990@gmail.com',
		phone: '01223636224',
		fb: 'https://www.facebook.com/nolove2571990',
		objective: 'Executed and contributed to front-end web development projects, with an emphasis on front end features, browser manipulation, and cross-browser compatibility.'
	}

	$scope.listTuto = [
		{
			title: 'Image Glitch Effect',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2017/12/ImageGlitchEffect_Featured.jpg',
			description: 'An experimental glitch effect powered by CSS animations and the clip-path property. Inspired by the technique seen on the speakers page of the 404 conference.',
			demoLink: 'https://tympanus.net/Tutorials/CSSGlitchEffect/index.html',
			tutLink: 'https://tympanus.net/codrops/2017/12/21/css-glitch-effect/',
			resource: 'Tympanus'
		},
		{
			title: 'A Collection of Page Transitions',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/05/PageTransitions.jpg',
			description: 'A showcase collection of various page transition effects using CSS animations.',
			demoLink: 'https://tympanus.net/Development/PageTransitions/',
			tutLink: 'https://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/',
			resource: 'Tympanus'
		},
		{
			title: 'Particles Js',
			image: 'https://camo.githubusercontent.com/cdc9e740f0c04b77449e476c91e6f7770a6af6e7/687474703a2f2f76696e63656e74676172726561752e636f6d2f7061727469636c65732e6a732f6173736574732f696d672f6769746875622d73637265656e2e6a7067',
			description: 'A lightweight JavaScript library for creating particles.',
			demoLink: 'https://vincentgarreau.com/particles.js/',
			tutLink: 'https://github.com/VincentGarreau/particles.js/',
			resource: 'VincentGarreau'
		},
		{
			title: 'Flexbox CSS framework collection',
			image: 'https://www.seoclerk.com/pics/want51827-198RPv1497087087.png',
			description: '<a href="http://bulma.io/" class="button is-danger is-outlined">Bulma</a><a class="button is-danger is-outlined" href="https://wirecss.com/">Wire</a><a class="button is-danger is-outlined" href="http://juicedcss.com/">Juiced</a><a class="button is-danger is-outlined" href="https://picturepan2.github.io/spectre/index.html">Spectre CSS</a><a class="button is-danger is-outlined" href="https://github.com/leejordan/reflex">Reflex</a><a class="button is-danger is-outlined" href="http://milligram.io/">Miligram</a><a class="button is-danger is-outlined" href="https://sass-basis.github.io/">Basis</a><a class="button is-danger is-outlined" href="https://imperavi.com/kube/">Kube</a>',
			resource: 'Google'
		},
		{
			title: 'Creative Gooey Effects',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2015/03/CreativeGooeyEffects1.jpg',
			description: 'A set of examples that use a gooey SVG filter for creating a variety of different effects for all kinds of website components.',
			demoLink: 'https://tympanus.net/Development/CreativeGooeyEffects/pagination.html',
			tutLink: 'https://tympanus.net/codrops/2015/03/10/creative-gooey-effects/',
			resource: 'Tympanus - Lucas Bebber'
		},
		{
			title: 'Slice Revealer',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2018/02/SliceReveal.jpg',
			description: 'A reveal effect where animated slices cover and uncover an image. Inspired by Zhenya Rynzhuk\'s transitions experiments.',
			demoLink: 'https://tympanus.net/Development/SliceRevealer/',
			tutLink: 'https://tympanus.net/codrops/2018/02/06/slice-revealer/',
			resource: 'Tympanus - Mary Lou'
		},
		{
			title: 'Expanding Grid Menu',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2018/03/GridMenu_featured.jpg',
			description: 'A CSS Grid powered menu with a box',
			demoLink: 'https://tympanus.net/Development/GridMenu/index2.html',
			tutLink: 'https://tympanus.net/codrops/2018/03/28/grid-menu/',
			resource: 'Tympanus - Mary Lou'
		},
		{
			title: 'Page Preloading Effect',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/08/PagePreloadingEffect1.png',
			description: 'A tutorial on how to re-create the page preloading effect seen on the website of Fontface Ninja. We are going to use CSS animations, 3D transforms and SVGs.',
			demoLink: 'https://tympanus.net/Tutorials/PagePreloadingEffect/index2.html',
			tutLink: 'https://tympanus.net/codrops/2014/08/05/page-preloading-effect/',
			resource: 'Tympanus - Mary Lou'
		},
		{
			title: 'Inspiration for Article Intro Effects',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/05/ArticleIntroEffects.png',
			description: 'Some inspiration for effects applied to title headers of articles with a fullscreen image. The idea is to show some creative transition when continuing to the article body.',
			tutLink: 'https://tympanus.net/codrops/2014/05/22/inspiration-for-article-intro-effects/',
			demoLink: 'https://tympanus.net/Development/ArticleIntroEffects/index4.html',
			resource: 'Tympanus - Mary Lou'
		},
		{
			title: 'Using the Intersection Observer API to Trigger Animations and Transitions',
			image: 'https://developers.google.com/web/updates/images/2016/04/intersectionobserver/intersectratio.png',
			description: 'Using the Intersection Observer API to Trigger Animations and Transitions',
			tutLink: 'https://alligator.io/js/intersection-observer/',
			resource: 'alligator.io'
		},
		{
			title: 'Off Canvas Menu Effect',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/09/OffCanvasMenuEffects_Featured.png',
			description: 'Some inspiration for off-canvas menu effects and styles using CSS transitions and SVG path animations.',
			demoLink:'https://tympanus.net/Development/OffCanvasMenuEffects/elastic.html',
			tutLink: 'https://tympanus.net/codrops/2014/09/16/off-canvas-menu-effects/',
			resource: 'Tympanus - Mary Lou'
		},
		{
			title: 'Animated SVG Frame Slideshow',
			image: 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2017/11/AnimatedFrameSlideshow_Featured.jpg',
			description: 'An experimental slideshow that shows an animated SVG frame when transitioning between slides. Different shapes can be used for creating a variety of styles.',
			demoLink: 'https://tympanus.net/Development/AnimatedFrameSlideshow/index2.html',
			tutLink: 'https://tympanus.net/codrops/2017/11/15/animated-svg-frame-slideshow/',
			resource: 'Tympanus - Mary Lou'
		}
	]
});
