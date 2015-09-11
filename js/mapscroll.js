var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

var isDraggable = w > 480 ? true : false;
var mapOptions = {
  draggable: isDraggable,
  scrollwheel: false
};