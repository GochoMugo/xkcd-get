(function() {
  "use strict";

  var xkcdUrl = "http://xkcd.com";
  var appUrl = "//xkcd-imgs.herokuapp.com/";
  var btns = document.getElementsByClassName("xkcd-refresh");
  var divs = document.getElementsByClassName("xkcd-img");
  var imgUrl;
  var imgTitle;

  function xkcdGet() {
    /**
    * Retrieving a URL to a random image
    */
    var req = new XMLHttpRequest();
    req.onload = function() {
      var res = JSON.parse(this.responseText);
      imgUrl = res.url;
      imgTitle = res.title;
      /**
      * Adding image to DOM
      */
      var link = document.createElement("a");
      var img = document.createElement("img");
      link.title = imgTitle;
      link.href = xkcdUrl;
      img.src = imgUrl;
      img.alt = "comic comes here";
      link.appendChild(img);
      var div;
      for (var index = 0; index < divs.length; index++) {
        div = divs[index];
        if (div.hasChildNodes()) {
          div.removeChild(div.childNodes[0]);
        }
        div.appendChild(link);
      }
    };
    req.open("get", appUrl, true);
    req.send();
  }
  xkcdGet();

  /**
  * Adding click function for refreshing
  */
  for (var index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", xkcdGet);
  }

})();

