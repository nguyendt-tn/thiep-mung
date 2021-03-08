
var to = 'Quyên!';
var gift_url = '#';
var gift_image_url = 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/c0.0.600.600a/p600x600/156707489_1649015805284781_5762603683497178858_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dqz8WuT4axQAX9vVD4n&_nc_ht=scontent-sin6-1.xx&tp=27&oh=7a981399544e2d26d37cb295321369bf&oe=606B5CFF';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

