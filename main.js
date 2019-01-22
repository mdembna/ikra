
$(document).ready(function () {

    // document.getElementById("2018").addEventListener("click", () => loadImages(2018));


loadImages("2018");

  
    function loadImages(year) {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'gallery.json', true);
        xhr.onload = function () {
            if (this.status == 200) {
                let photoData = JSON.parse(this.responseText);
                photoData.filter(set => set.year == year)
                            .forEach(set => {
                                let galleryItems = "";
                                set.images.forEach(img => {
                                    galleryItems += `<li class="gallery__item card"> <a href="${img.src}-fullsize.jpg" data-lightbox="${img.src}" ><img class="gallery__image" alt="${img.alt}" src="${img.src}.jpg"></a><p class="caption">${img.caption}</p> </li>`
                                })
                                document.getElementById("collection").innerHTML = galleryItems;
                                console.log("wtf");
                            })

                // let currentSet = photoData.filter((set) => set.year == year);

                // let images = currentSet[0].images;

                // images.forEach(img => {
                //     galleryItems += `<li class="gallery__item card"> <img class="gallery__image" alt="${img.alt}" src="../${img.src}.jpg"> <p class="caption">${img.caption}</p> </li>`
                // });

                // document.getElementById("collection-2018").innerHTML = `<h2 id="${currentSet[0].year}" class="gallery__header">${currentSet[0].year}</h2><ul class="gallery__content">${galleryItems}</ul>`

        }
    }




        xhr.send();
}

// Adding smooth scroll effect to gallery

let scrollLink = $(".scroll");

scrollLink.click(function (event) {

    event.preventDefault();
    let scrollLength = {
        scrollTop: $(this.hash).offset().top
    };



    $('body, html').animate(scrollLength, 800);


});

});
