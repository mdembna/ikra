$(document).ready(function() {
    loadImages("2018");
  
    function loadImages(year) {

        fetch("js/gallery.json")
        .then(resp => resp.json())
        .then(data => data.filter(set => set.year == year)
            .forEach(set => {
              let galleryItems = "";
              set.images.forEach(img => {
                galleryItems += `<li class="gallery__item card"> 
                                      <a href="${img.src}.jpg" data-lightbox="${img.src}" >
                                      <img class="gallery__image" alt="${img.alt}" src="${img.src}.jpg">
                                      </a>
                                      <ul class="gallery-details">
                                      <li class="gallery-detail">
                                      <a href="${img.src}/detail1.jpg" data-lightbox="${img.src}-detail" >
                                      <img class="detail" alt="detail" src="${img.src}/preview1.jpg">
                                      </a>
                                      </li>
                                      <li>
                                      <a href="${img.src}/detail2.jpg" data-lightbox="${img.src}-detail" >
                                      <img class="detail" alt="detail" src="${img.src}/preview2.jpg">
                                      </a>
                                      </li>
                                      <li>
                                      <a href="${img.src}/detail3.jpg" data-lightbox="${img.src}-detail" >
                                      <img class="detail" alt="detail" src="${img.src}/preview3.jpg">
                                      </a>
                                      </li>
                                      </ul>
                                      <p class="caption">${img.caption}</p> 
                                      </li>`;
              });
              document.getElementById("collection").innerHTML = galleryItems;
            }));
        }});