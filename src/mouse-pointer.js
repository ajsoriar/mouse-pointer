/**
 * js-pointer
 * Small utility to personalize the cursor of the mouse.
 * @version v0.0.1 - 2017-10-19
 * @link https://github.com/ajsoriar/div-lines
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function() {

  document.querySelector('*').style.cursor='none'; // TODO: Check out this!

  window.ptr  = {
      
      "max-z-index" : 2147483647,
      "x": null,
      "y": null,
      "el": null,
      "hideOsMouse": true,
      "showCustomCursor": true,

      load:function() {
  
        console.log("load!");
      },
  
      osCursorShow: function() {
  
      },
  
      osCursorHide: function() {
  
      },
  
      show: function() {

      },
  
      hide: function(event) {

      },

      el: null
    }

  ptr.mouseOutListener = function( ev ){
    
      //console.log("mouse out! this:", this );
      //this.removeEventListener("mouseout",);
      //event.target.classList.add("nfcd");
      //this.mouseOutListener();
      console.log("mouse out! ev:", ev );
      ev.target.classList.remove("nfcd");
  };

  ptr.previousElement = null;

  ptr.init = function ( el ) {

    console.log("ptr.init()");

    if (window.PointerEvent) {

        console.log("Yaah, the future is now!");

    } else {

        console.log("Back to reality!");
    }

    var getBgImage = function() {
        return "background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAEDWlDQ1BJQ0MgUHJvZmlsZQAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VVBg/m8AAACRSURBVDgRjdNhDoAgCAXgdMk9O1n35I+FC5dPUNxaQ9+HtWkqpVRmPqIjS5CIovmjAeYrjBqQ9lHUQRQNIIImsEMmWCEXeGgJLLQFiE6Z8AbRPSzJiZh2wJCcs/8zAAwP7b+iAwlrJ4XWcWlAw1ZHnGsA74PU3i4Zw9gR6/4PuODt4gJsoHWq79DCeuv11U9/AEd+Ta3o2Zz/AAAAAElFTkSuQmCC')";
    };

    document.firstElementChild.setAttribute("style", "cursor: none !important;"); // html element
    var strId = "mouse-"+ Date.now();
    this.el = document.createElement('div');
    this.el.setAttribute("id", strId );
    this.el.setAttribute("style","width: 20px; height: 22px; display: block; background-color: aqua; position: absolute; top: 1; left: 1;"+ getBgImage() +";background-repeat:no-repeat;" );
    document.body.appendChild(this.el);
    console.log("this.el:", this.el );

    var that = this;

    addEventListener("mousemove", function( event ){

        //console.log("event:", event );
        that.x = event.clientX +1;
        that.y = event.clientY +1;
        that.el.setAttribute("style","left: "+ that.x +"px; height: 22px; display: block; background-color: aqua; position: absolute; width: 20px; top: "+ that.y +"px;"+ getBgImage() +";background-repeat:no-repeat;" );
        var txt = '';
        txt = that.x +'; '+ that.y +'; '+ event.target +'; '+ event.target.className +';'+ event.target.classList.length +';'+ event.target.classList; 
        document.getElementById("console").innerHTML = txt;

        for ( var i=0; i < event.target.classList.length; i++){
            if ( event.target.classList[i] == "nfcbl") {

                //event.target.classList.add("nfcd");
                //event.target.addEventListener("mouseout", ptr.mouseOutListener( event ) );

                if ( ptr.hasClass( event.target, "nfcd" ) != true ){
                    console.log("add class nfcd!");
                    event.target.classList.add("nfcd");
                } else {

                }

                if ( ptr.previousElement != null && ptr.previousElement.attributes.id === event.target.attributes.id){
                    // same element so do nothing
                }

                if ( ptr.previousElement === null || ptr.previousElement.attributes.id !== event.target.attributes.id ) {

                    // remove previous element styles
                    if ( ptr.previousElement != null){
                       console.log("remove class nfcd!");
                        ptr.previousElement.classList.remove("nfcd");
                    }
                  
                    // set the previous element as the current one
                    ptr.previousElement = event.target;
                }
            }
        }
    });

    ptr.hasClass = function(el, className ) {
      for ( var i=0; i < event.target.classList.length; i++){
        if ( el.classList[i] === className ) return true
      }
      return false
    };

    var xxx = {};
    xxx.mouseOverActions = {
      addClass: true,
      clasName: "new-class",
      action: function(){
        // Do stuff here
      }
    }

    // Atach events to window
    //document.onmousemove = mouse.handleMouseMove;
    //document.onclick = mouse.handleMouseClick;
    addEventListener("click", function( event ){
      
        //console.log("that.el:", that.el );
        console.log("event:", event );
        that.x = event.clientX;
        that.y = event.clientY;
    });

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
