<?php
function RandImg($dir)
{
$images = glob($dir . '*.{jpg}', GLOB_BRACE);
$randomImage = $images[array_rand($images)];
return $randomImage;
}

$the_image = RandImg('images/');
$imagedata1 = file_get_contents($the_image);
header('Content-type: image/jpg');
echo $imagedata1;
?>