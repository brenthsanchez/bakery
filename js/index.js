var $map
  , $cover
  ;

$map = $('.bottom_map');
$cover = $('<div class="cover"></div>');
$map.append($cover);
$cover.on('click', function () {
  $cover.remove();
});