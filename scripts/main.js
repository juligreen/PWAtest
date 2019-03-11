window.onload = () => {
	'use strict';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('./sw.js');
	}
	Notification.requestPermission(function (status) {
		console.log('Notification permission status:', status);
	}).then(function(){
		displayNotification()
	})


	function displayNotification() {
		if (Notification.permission === 'granted') {
			navigator.serviceWorker.getRegistration().then(function (reg) {
				reg.showNotification('Hello world!');
			});
		}
		else {
			console.log('no permission')
		}
	}

};
