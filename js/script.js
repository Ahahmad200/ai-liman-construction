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
/* ==========================================
   PROPERTY IMAGE LIGHTBOX
========================================== */

function openPropertyLightbox(imageSrc) {

    const lightbox = document.getElementById("propertyLightbox");

    const lightboxImage =
        document.getElementById("propertyLightboxImage");

    lightboxImage.src = imageSrc;

    lightbox.classList.add("show");
}


function closePropertyLightbox() {

    const lightbox =
        document.getElementById("propertyLightbox");

    lightbox.classList.remove("show");
}


/* Close property image viewer
   when the dark background is tapped */

document.addEventListener("click", function(event) {

    const lightbox =
        document.getElementById("propertyLightbox");

    if (event.target === lightbox) {

        closePropertyLightbox();

    }

});
function openTeamImage(imageSrc) {
    const viewer = document.getElementById("teamImageViewer");
    const viewerImage = document.getElementById("teamViewerImage");

    viewerImage.src = imageSrc;
    viewer.classList.add("show");
}

function closeTeamImage() {
    const viewer = document.getElementById("teamImageViewer");

    viewer.classList.remove("show");
}

document.addEventListener("click", function(event) {

    const viewer = document.getElementById("teamImageViewer");

    if (event.target === viewer) {
        closeTeamImage();
    }

});
