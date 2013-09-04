var App;

(function(){
	"use strict";
	var Main = function(){
		this.getConfig(function(r, t){
			var modules = Object.keys(r.modules);
			t.start(r);
		});
	}

	/**
	 * Gets the main site configuration
	 * @return {json} Configuration
	 */
	Main.prototype.getConfig = function(callback) {
		var t = this;
		new Vi({url:'config.json', 'respuesta': 'objeto'}).server(function(r){
			if(typeof callback === 'function'){
				callback(r, t);
			}
		});
	};

	Main.prototype.start = function(r) {
		var lang = this.browserLanguage();
		var modules = {};

		for(var k in r.modules){
			if(r.modules.hasOwnProperty(k)){
				modules[k] = {nombre: k, url:r.url};
			}
		}

		var j = {name: 'WebSiteManager', modules:modules, div:'#container', currentLang: lang};
		this.a = new AppSystem(j);
		App = this.a;

		this.a._data = r;
		var t = this;

		this.a.init(function(){
			t.loadCategory('login');
		});
	};

	Main.prototype.handleHistory = function(newLocation, historyData) {
		var category = newLocation.substr(1);
		m._cat = category;
		if(typeof m.a.current === 'object'){
			m.loadCategory(category);
		}
	};

	Main.prototype.loadCategory = function(category) {

		this.a.getModule(category);
		this.a.current.start();
	};

	Main.prototype.browserLanguage = function() {
		var lang = navigator.language || navigator.userLanguage;
		lang = lang.match(/([a-z]+)/gi);
		if(lang !== null){
			lang = lang[0];
		}

		var l = '';
		switch(lang){
			case 'es':
				l = lang;
			break;
			default:
			case 'en':
				l = lang;
			break;
		}

		return l;
	};

	var m = new Main();
})();