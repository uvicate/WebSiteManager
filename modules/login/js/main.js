(function(){
	"use strict";
	var Module = function(){
		this.a = App;
		this.submitFunc();
	}

	Module.prototype.submitFunc = function() {
		var frm = document.getElementById('login-form');
		frm._this = this;
		frm.addEventListener('submit', function(e){
			var b = document.getElementById('login-button');
			b.setAttribute('disabled', 'disabled');
			if(e.preventDefault){
				e.preventDefault();
			}
			e.returnValue = false;

			this._this.login();
		});
	};

	Module.prototype.gatherData = function() {
		var j = {};
		var elm = document.getElementsByClassName('form-control');
		for(var i = 0, len = elm.length; i < len; i++){
			var  e = elm[i];
			j[e.name] = e.value;
		}

		return j;
	};

	Module.prototype.login = function() {
		var data = this.gatherData();
		this.a.current.getServer('login.php', data, function(r){
			window.location = r.redirect;
		});
	};

	var m = new Module();
})();