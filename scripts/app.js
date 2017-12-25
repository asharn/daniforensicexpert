angular
	.module("ngHome", ["ngMaterial", "ui.router"])
	.config(function($stateProvider){


		$stateProvider
		    .state('index',{
				url: '',
				templateUrl: 'components/home/home.tpl.html'
			})
			.state('home',{
				url: '/',
				templateUrl: 'components/home/home.tpl.html'
			})
			.state('blog',{
				url: '/blog',
				templateUrl: 'components/blog/blog.tpl.html',
				controller: 'blogCtrl as bloggg'
			})
			.state('contact',{
				url: '/contact',
				templateUrl: 'components/contact/contact.tpl.html'
			})
			.state('faq',{
				url: '/faq',
				templateUrl: 'components/faq/faq.tpl.html'
			})
			.state('about',{
				url: '/about',
				templateUrl: 'components/about/about.tpl.html'
			})
			.state('error',{
				url: '/error',
				templateUrl: 'components/error/404.tpl.html'
			});
	});
