/**
 * js-pointer
 * Small utility to personalize the cursor of the mouse.
 * @version v0.0.1 - 2017-10-19
 * @link https://github.com/ajsoriar/div-lines
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function() {

  


  // window.ptr = {};

  window.ptr  = {
      
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


  ptr.init = function ( el ) {

    console.log("ptr.init()");

    if (window.PointerEvent) {

      console.log("Yaah, the future is now!");

    } else {

      console.log("Back to reality!");
    }

    /*

    if (!el){

      // create
      var strId = "ptr-"+ Date.now();
      this.el = document.createElement('ul');
      this.el.setAttribute("id", strId );
      this.el.setAttribute("style", "position: absolute; top: 0; left: 0; width: 0; height: 0; background-color: transparent; display: inline-block; margin: 0; padding: 0; list-style: none;");
      document.body.appendChild(this.el);

    } else {

      this.el = document.getElementById( el );
    }

    */

    return this
  };

  ptr.line = function (x1,y1,x2,y2,thickness,color) {
    /*
    if (!this.el) this.init();
    if (color === "RANDOM") color = this.utils.getRandomColor();
    if (color === null) color = "#000";
    if (thickness === null) thickness = 2;
    var new_content = ptr.getLineString(null,x1,y1,x2,y2, thickness, color, 1, false, 0, null);
    this.draw( new_content );
    return this.el.lastElementChild
    */
  };

  ptr.linex = function (idString,x1,y1,x2,y2,weight,color,opacity, roundBorder, longSombra, colSombra){ // extended functionality
    /*
    if (!this.el) this.init();
    if (color === "RANDOM") color = this.utils.getRandomColor();
    if (color === null) color = "#000";
    var new_content = ptr.getLineString(idString,x1,y1,x2,y2,weight,color,opacity, roundBorder, longSombra, colSombra);
    this.draw( new_content );
    return this.el.lastElementChild
    */
  };

  ptr.rndLine = function(){
    var u = this.utils;
    this.line( u.rndX(), u.rndY(), u.rndX(), u.rndY(), u.rndColor() );
    return this.el.lastElementChild
  };

  ptr.draw = function(html){ // Draw html content
    this.el.innerHTML = this.el.innerHTML + html; //previous_html_lines + new_content;
  };

  ptr.utils = {};

  ptr.utils.getDistance = function(x1,y1,x2,y2){
    return Math.sqrt( Math.pow( x2 - x1, 2 ) + Math.pow( y2 - y1, 2 ) )
  };
/*
  ptr.utils.getSlope = function(x1,y1,x2,y2){
    return (y2-y1)/(x2-x1)
  };
*/
  ptr.rm = function(lineID){ // Remove line

  };

  ptr.update = function(id, propsArr ){

  };

  ptr.trace = function(arr){

  };

  ptr.createContext = function() {

  };

  ptr.utils.getRandomNum = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  ptr.utils.rndColor = function() {
      var r = this.getRandomNum(0, 255);
      var g = this.getRandomNum(0, 255);
      var b = this.getRandomNum(0, 255);
      var a = 1;
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  };

  ptr.utils.rndX = function() {
      return this.getRandomNum(1, window.innerWidth );
  };

  ptr.utils.rndY = function() {
      return this.getRandomNum(1, window.innerHeight );
  };

  // This function returns an html string
  ptr.getLineString = function (idString,x1,y1,x2,y2,weight,color,opacity, roundBorder, longSombra, colSombra){

    /*

      if (x2 < x1){ var aux = x1; x1 = x2; x2 = aux; aux = y1; y1 = y2; y2 = aux; }

      if ( idString === null ) idString = "line-"+ Date.now();
      var cathetus1 = x2-x1;
      var cathetus2 = y2-y1;
      var hypotenuse = Math.sqrt(cathetus1*cathetus1+cathetus2*cathetus2);
      var w=hypotenuse + weight;
      var angRadians = Math.asin(cathetus2/hypotenuse);
      var ang = angRadians * 180 / Math.PI;

      //var string = '<div id="'+ idString +'" class="line" style="top:'+y1+'px;left:'+x1+'px; width:'+w+'px; height:'+weight+'px; transform: rotateZ('+ang+'deg) translateX(-'+weight/2+'px) translateY(-'+weight/2+'px); background-color: '+color+'; opacity:'+opacity+'; border-radius: '+weight+'px; box-shadow: 0 0 '+ longSombra +'px '+ colSombra +'; transform-origin: 0 0;position: absolute;"></div>';
      var string = '<li id="'+ idString +'" class="line" style="top:'+y1+'px;left:'+x1+'px; width:'+w+'px; height:'+weight+'px; transform: rotateZ('+ang+'deg) translateX(-'+weight/2+'px) translateY(-'+weight/2+'px); background-color: '+color+'; opacity:'+opacity+'; border-radius: '+weight+'px; box-shadow: 0 0 '+ longSombra +'px '+ colSombra +'; transform-origin: 0 0;position: absolute;"></li>';

      return string;
      */
  };

  ptr.CONST_180_BY_PI = 180 / Math.PI;

  ptr.getFastLineString = function (x1,y1,x2,y2,weight,color){

    /*

      if (x2 < x1){ var aux = x1; x1 = x2; x2 = aux; aux = y1; y1 = y2; y2 = aux; }

      var cathetus1 = x2-x1
          cathetus2 = y2-y1,
          hypotenuse = Math.sqrt(cathetus1*cathetus1+cathetus2*cathetus2),
          w = hypotenuse + weight,
          angRadians = Math.asin(cathetus2/hypotenuse),
          ang = angRadians * ptr.CONST_180_BY_PI;

      //var string = '<div id="'+ idString +'" class="line" style="top:'+y1+'px;left:'+x1+'px; width:'+w+'px; height:'+weight+'px; transform: rotateZ('+ang+'deg) translateX(-'+weight/2+'px) translateY(-'+weight/2+'px); background-color: '+color+'; opacity:'+opacity+'; border-radius: '+weight+'px; box-shadow: 0 0 '+ longSombra +'px '+ colSombra +'; transform-origin: 0 0;position: absolute;"></div>';
      var string = '<li class="line" style="top:'+y1+'px;left:'+x1+'px; width:'+w+'px; height:'+weight+'px; transform: rotateZ('+ang+'deg) translateX(-'+weight/2+'px) translateY(-'+weight/2+'px); background-color: '+color+';"></li>';

      return string;

      */
  };


  // init!  
  ptr.init();
  
})();
