// cursor = {};

// cursor._max-z-index-value = 2147483647;

// cursor.init();


(function() {

	var ajsrCursor = {

		"max-z-index" : 2147483647,
		"x": null,
		"y": null,

		init: function() {

			console.log("init!");
			//this.form = $('#form');
			//this.bindEvents();

			window[ addEventListener ? 'addEventListener' : 'attachEvent' ]( addEventListener ? 'load' : 'onload', this.load )
		},

		load:function() {

			console.log("load!");

		},

		osCursorShow: function() {

		},

		osCursorHide: function() {

		},

		show: function() {
			//this.form.on('submit', $.proxy(this.showName, this));
		},

		hide: function(event) {
			//event.preventDefault();

			//alert(this.form.find('input[type=text]').val());
		}
	}

	ajsrCursor.init();




	//alert('Hello ajsrMouse!');

	//window.onload=cursor.init();


})

console.log("file was loadded!");

/*
    #selector {
        cursor: none;
    }

 document.body.style.cursor = *cursor-url*;
 //OR
 var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "url('cursor url with protocol'), auto";

or with jquery:

$("html").css("cursor: url('cursor url with protocol'), auto");

    
*/