var imgBig = document.getElementById('my-slides__big-picture');
var btnPrev = document.getElementById('prev-btn'); 
var btnNext = document.getElementById('next-btn');
var album = document.querySelector('.album');
var galleryItem = document.querySelector('.galleryItem').content;
var imgSmall = document.getElementById('imgThumb_imgid');

var imgAll = [
  "img/background-1.JPG", 
  "img/background-2.JPG",
  "img/background-3.JPG",
  "img/background-4.JPG",
  "img/background-5.JPG",
  "img/background-6.JPG",
  "img/background-7.JPG",
  "img/background-8.JPG"];

//создаем галарею  - картинки снизу  */
var renderItems = function () {
  let newItem; // объявим новый элемент
  let roulette = document.createDocumentFragment (); 
  /* // создаем рулетку зависимость галереи от  количества изображений. Добавление элементов в рулетку */

  for (let i = 0; i < imgAll.length; i++) {
      
      newItem = galleryItem.cloneNode(true);
      //newItem.querySelector('.imgThumb').classList.add('gThumb');
      newItem.querySelector('.imgThumb').classList.add('thumb' + i);
      newItem.querySelector('.imgThumb__img').src = imgAll[i];
      roulette.appendChild(newItem);
  }
  album.appendChild(roulette);
};
renderItems();


//Функция смены главной картинки при клике кнопки next
var changeSlidesNext = function () {
  let counter = findNumbInNameImg();
  if ((counter + 1) < 8) {
    imgBig.src = "img/background-" + (counter + 1) + ".JPG";
  } else {
    counter = 1;
    imgBig.src = "img/background-" + (counter + 1) + ".JPG";
  }
};


//Функция увеличения картинки при клике на маленькую снизу
//через target определяем у картинки путь evt.target.src и присваиваем к большой 
var galleryApp = function (evt) {
    imgBig.src = evt.target.src;    
};

window.addEventListener ('click', function (evt) {console.log(evt);})
album.addEventListener ('click', galleryApp);
imgBig.addEventListener ('click', changeSlidesNext);

