var toddler = document.querySelector(".toddler__line"),
    toddlerDot = toddler.children[0];

toddlerDot.onmousedown = function(event) {
  var dotCoords = getCoords(toddlerDot);
  var shiftX = event.pageX - dotCoords.left;

    var toddlerCoords = getCoords(toddler);

    document.onmousemove = function (event) {
      //  вычесть координату родителя, т.к. position: relative
      var newLeft = event.pageX - shiftX - toddlerCoords.left;

    // курсор ушел вне слайдера
    if (newLeft < 0) {
      newLeft = 0;
    }

    var rightEdge = toddler.offsetWidth - toddlerDot.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      toddlerDot.style.left = newLeft + 'px';
    };

    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  toddlerDot.ondragstart = function() {
    return false;
  };

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }