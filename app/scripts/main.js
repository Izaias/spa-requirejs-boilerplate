require.config({
	waitSeconds: 200,
	paths: {
		"jquery": "vendor/jquery/dist/jquery.min"
		// "jquery-mousewheel": "vendor/jquery-mousewheel/jquery.mousewheel.min",
		// "underscore": "vendor/lodash/dist/lodash.min",
		// "TweenMax": "vendor/greensock/src/minified/TweenMax.min",
		// "TweenLite": "vendor/greensock/src/minified/TweenLite.min",
		// "EasePack": "vendor/greensock/src/minified/easing/EasePack.min",
		// "CSSPlugin": "vendor/greensock/src/minified/plugins/CSSPlugin.min",
		// "preloadjs": "vendor/PreloadJS/lib/preloadjs-0.4.1.min"
  }
});

require.onError = function (err) {
	console.log(err.requireType);
	if (err.requireType === 'timeout') {
		console.log('modules: ' + err.requireModules);
	}
	throw err;
};

require(['jquery', 'app'], function($, app) {
  app.initialize();
});
