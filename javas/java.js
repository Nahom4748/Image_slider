let list_of_image = [
  "imges/1.jpg",
  "imges/2.jpg",
  "imges/3.jpg",
  "imges/4.jpg",
  "imges/5.jpg",
  "imges/6.jpg",
  "imges/8.jpg",
];

let i = 0;

let imgs = document.querySelector(".ims");

function next() {
  if (i == list_of_image.length - 1)
     i = 0;
  else 
    i++;
    setTimeout(() => {
      imgs.setAttribute("src", list_of_image[i]);
    }, 500);
  
}

function preves() {
  if (i == 0)
    i = list_of_image.length;
  i--;
  setTimeout(() => {
    imgs.setAttribute("src", list_of_image[i]);
  }, 500);
}
