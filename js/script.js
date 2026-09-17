/* ==========================================
   PROJECT IMAGE LIGHTBOX
========================================== */

function openLightbox(imageSrc) {

    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = imageSrc;

    lightbox.classList.add("show");
}


function closeLightbox() {

    const lightbox = document.getElementById("imageLightbox");

    lightbox.classList.remove("show");
}


/* Close image viewer when background is tapped */

document.addEventListener("click", function(event) {

    const lightbox = document.getElementById("imageLightbox");

    if (event.target === lightbox) {
        closeLightbox();
    }

});
