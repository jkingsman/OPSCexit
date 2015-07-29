function closeTopOPSCWindow() {
    var elements = document.getElementsByClassName('dijitDialogCloseIcon'),
        topElement = null;

    for(var i = 0; i < elements.length; i++){
        if(elements[i].offsetWidth > 0){
            /**
            * hold on to the last element with an offsetWidth
            * wish we could do this with fliter(), but elements
            * is a an HTMLCollection and not an array
            */
            topElement = elements[i];
        }
    }

    if(topElement !== null){
      topElement.click();
   }
}

window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key === 27) {
       closeTopOPSCWindow();
   }
};
