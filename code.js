var imgBig = document.getElementById('my-slides__big-picture');
var btnPrev = document.getElementById('prev-btn'); 
var btnNext = document.getElementById('next-btn');
var album = document.querySelector('.album');
var galleryItem = document.querySelector('.galleryItem').content;
//var imgSmall = document.getElementsByClassName('imgThumb__img');

//создаем галарею  - картинки снизу  */
var renderItems = function () {
  let newItem; // объявим новый элемент
  let roulette = document.createDocumentFragment (); 
  /* // создаем рулетку зависимость галереи от  количества изображений. Добавление элементов в рулетку */

  for (let i = 0; i < 8; i++) {
      
      newItem = galleryItem.cloneNode(true);
      //newItem.querySelector('.imgThumb').classList.add('gThumb');
      newItem.querySelector('.imgThumb').classList.add('thumb' + i);
      newItem.querySelector('.imgThumb__img').src = "img/background-" + (i + 1) + ".JPG";
      roulette.appendChild(newItem);
  }
  album.appendChild(roulette);
};
renderItems();


//Функция, которая определяет цифру в названии файла картинки и возвращает ее
var findNumbInNameImg = function() {
  let num;
  let str = imgBig.src; //cтрока содержащаяся в src картинки Большой
  
  return num = parseInt(str[(str.length - 5)]);
};

//Функция смены главной картинки при клике кнопки next
var changeSlidesNext = function () {
  let counter = findNumbInNameImg();
  if ((counter + 1) < 9) {
    imgBig.src = "img/background-" + (counter + 1) + ".JPG";
  } else {
    counter = 1;
    imgBig.src = "img/background-" + (counter + 1) + ".JPG";
  }
};

//Функция смены главной картинки при клике кнопки Prev
var changeSlidesPrev = function () {
  let counter = findNumbInNameImg();
  if ((counter - 1) > 0) {
    imgBig.src = "img/background-" + (counter - 1) + ".JPG";
  } else {
    counter = 8;
    imgBig.src = "img/background-" + (counter - 1) + ".JPG";
  }
};

//Функция увеличения картинки при клике на маленькую снизу
// var galleryApp = function (evt) {
//   if (evt.target.parentElement.className == 'albumWrapper' || evt.target.classList.contains('imgThumb') == true) {
//     imgBig.src = evt.target.src; 
//     console.log('hi');
    
//   }  
// };


//window.addEventListener ('click', galleryApp);
imgBig.addEventListener ('click', changeSlidesNext);
window.addEventListener ('click', function (evt) {console.log(evt);})
//imgSmall[0].addEventListener ('click', galleryApp);