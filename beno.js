
    var pNav = document.getElementById("globalNav");
    function unClassy(){
      try {
        // Remove the focus class
        pNav.classList.remove("focus");
        // Remove the focus class from all its descendents
        pNavDesc = pNav.getElementsByTagName('*');
        for( var i = 0; i<pNavDesc.length; i++){
          pNavDesc[i].removeAttribute("class");
        }
      } catch (e) {
        console.log(e);
      } 
    }

    /* For any clicks, clear the focus class from the nav and all its descendants, essentially closing the menu when a user clicks/taps outside of it. */
    document.documentElement.onclick=function() {
      try {
        unClassy();
      } catch (e) {
        console.log(e);
      }
    }

    /* Manipulate focus classes in navigation. */
    function classy(){
      try {
        unClassy();
        // Add the focus class to items that have focus
        // Get the element that currently has focus
        var focusedElement = document.activeElement;
        // If that element is the primary nav, add the class
        if (focusedElement.id == pNav.id){
          // Add the focus class
          pNav.classList.add("focus");
        }
        // If nav contains the focused element, add the class
        if (pNav.contains(focusedElement)){
          focusedElement.classList.add("focus");
          el = focusedElement;
          while (el.parentNode) {
            el.classList.add("focus");
            el = el.parentNode;
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    /* Delay the assigning of classes to give the :focus a chance to catch up. There has to be a better way for this. */
    document.documentElement.addEventListener("keydown", delayClassy, false);
    function delayClassy(){
      try {
        setTimeout(classy, 200);
      } catch (e) {
        console.log(e);
      }
    }
