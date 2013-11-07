(function() {
	var oldSetInterval = window.setInterval;
	window.setInterval = function (code, delay) {
		if (code.toString().match(/PLUGIN\.AUTOPLAY\ TRIGGER\ PLAY/)) {
			console.log('Autoplay disabled');
			$('.btn.btn-off').find('a').click();
			return;
		}
		return oldSetInterval(code, delay);
	};

	window.DONTREFRESHPLEASE = 1;
})();