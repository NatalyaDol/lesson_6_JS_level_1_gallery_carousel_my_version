var imgBig = document.getElementById('my-slides__big-picture');
var btnPrev = document.getElementById('prev-btn'); 
var btnNext = document.getElementById('next-btn');
var album = document.querySelector('.album');
var galleryItem = document.querySelector('.galleryItem').content;
var imgSmall = document.getElementById('imgThumb_imgid');

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

//Функция, которая определяет цифру в названии файла картинки и возвращает ее значение
// (ограничение макс 9 файлов)
var findNumbInNameImg = function() {
  let str = imgBig.src; //cтрока содержащаяся в src картинки Большой
  
  return parseInt(str[(str.length - 5)]);
  //все файлы называются однотипно и 5й символ с конца это номер файла
  //минусы этого решения, сломается если картинок больше 9, но можно добавить условия и все будет работать
};

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
//через target определяем у картинки путь evt.target.src и присваиваем к большой 
var galleryApp = function (evt) {
    imgBig.src = evt.target.src;    
};

window.addEventListener ('click', function (evt) {console.log(evt);})
album.addEventListener ('click', galleryApp);
imgBig.addEventListener ('click', changeSlidesNext);

