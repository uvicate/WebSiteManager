function Initclass(j){
    if(typeof j !== 'object'){
        throw new Error('j was expected to be an object, '+(typeof j+' was received.'));
    }

    var data = (j.data !== undefined) ? j.data : {};
    var defaults = (j.defaults !== undefined) ? j.defaults : {};
    var synonyms = (j.synonyms !== undefined) ? j.synonyms : {};
        
    for(var k in synonyms){
        if(data[k] !== undefined){
            data[ synonyms[k] ] = data[k];
        }
    }

    var types = {};
    for (var llave in defaults){
        types[llave] = typeof defaults[llave];
    }
    
    for(var key in defaults){
        data[key] = (typeof data[key] === 'undefined') ? defaults[key] : data[key];    
    }
    
    for(var key in data){
        var t = typeof data[key];
        if(t !== types[key] && types[k] !== undefined){
            throw new Error ('Error : '+key+' was expected to be '+types[key]+', but was received: '+t);
        }else{
            this[key] = data[key];
        }
    }
}

(function(){
	"use strict";

	var WSM = function(j){
		var d = {
			txtProperty: 'data-edt',
			imgProperty: 'data-edt-img',
			txtElms: {},
			imgElms: {},
			current: {}
		};

		var js = {data: j, defaults: d};
		Initclass.call(this, js);
	};

	WSM.prototype.loadFile = function(file) {
		this.current.file = file;

		this.searchNodes();
		this.build();
	};

	WSM.prototype.searchNodes = function() {
		//Text nodes
		this.txtElms = document.querySelectorAll('*['+this.txtProperty+']');

		//Image nodes
		this.imgElms = document.querySelectorAll('*['+this.imgProperty+']');
		
	};

	WSM.prototype.build = function() {
		var b = {
			Txt: this.txtElms,
			Img: this.imgElms
		};

		for(var k in b){
			if(b.hasOwnProperty(k)){
				for(var i = 0, len = b[k].length; i < len; i++){
					var e = this.txtElms[i];
					this['build'+k](e);
				}
			}
		}
	};

	WSM.prototype.buildTxt = function(text) {
		console.log('building text', text);
	};

	WSM.prototype.buildImg = function(img) {
		console.log('building img', img);	
	};

	window.WebSiteManager = function(j){
		return new WSM(j);
	}

})();