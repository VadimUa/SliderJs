/*var i=1;
(function inc() {
 console.log(i);
 i++;
 return inc();
})();*/
let slider_content = ["./photo/post-75234565-0-19537100-1516211662.jpg","photo/batch2.jpg",
"./photo/maxresdefault (1).jpg","./photo/maxresdefault.jpg"];
var i = 1;

var right_shevrone = document.getElementById('right');
right_shevrone.addEventListener('click', function (event) {
	i++;
	if( i === slider_content.length){
  	 i = 0;
  }
  var center_photo = document.getElementById('main');
  center_photo.removeAttribute("src");
  center_photo.setAttribute("src", slider_content[i]);

});

var left_shevrone = document.getElementById('left');
  left_shevrone.addEventListener('click', function (event) {
  var center_photo = document.getElementById('main');
  center_photo.removeAttribute("src");
  i--;
  if( i < 0){
  		 i = slider_content.length;
  		 i--;
  }
  center_photo.setAttribute("src", slider_content[i]);
});  
