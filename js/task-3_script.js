const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
/* const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('gallery');
const galleryHtml = images.reduce((acc, { url, alt }) => acc + `<li class="gallery__item"><img src="${url}" alt="${alt}"></li>`, ``);
galleryRef.insertAdjacentHTML('afterbegin', galleryHtml);
 */

function getHtmlString(array) {
  const string = array.map(
    (obj) => `<li class = "item"><img src="${obj.url}" alt = "${obj.alt}"></li>`
  );
  return string.join("");
}

const gallery = document.querySelector("#gallery");
gallery.insertAdjacentHTML("afterbegin", getHtmlString(images));
