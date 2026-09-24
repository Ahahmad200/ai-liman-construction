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
/* ==========================================
   TEAM BIOGRAPHY POPUP
   ========================================== */

function openBiography(officialId) {

    const popup = document.getElementById("biographyPopup");
    const name = document.getElementById("biographyName");
    const position = document.getElementById("biographyPosition");
    const text = document.getElementById("biographyText");
    const image = document.getElementById("biographyImage");


    if (officialId === "official1") {

        name.textContent = "Official Name";
        position.textContent = "Position";

        text.textContent =
            "Biography information will appear here.";

        image.src = "images/hero.jpg";
    }


    if (officialId === "official2") {

        name.textContent = "Official Name";
        position.textContent = "Position";

        text.textContent =
            "Biography information will appear here.";

        image.src = "images/hero.jpg";
    }


    if (officialId === "official3") {

        name.textContent = "Official Name";
        position.textContent = "Position";

        text.textContent =
            "Biography information will appear here.";

        image.src = "images/hero.jpg";
    }


    if (officialId === "official4") {

        name.textContent = "Official Name";
        position.textContent = "Position";

        text.textContent =
            "Biography information will appear here.";

        image.src = "images/hero.jpg";
    }


    popup.classList.add("show");
}


function closeBiography() {

    const popup = document.getElementById("biographyPopup");

    popup.classList.remove("show");
}


/* Close biography popup when clicking outside the box */

document.addEventListener("click", function(event) {

    const popup = document.getElementById("biographyPopup");

    if (event.target === popup) {

        closeBiography();

    }

});
/* ==========================================
   ADVERTISEMENT IMAGE VIEWER
========================================== */

function openAdvertisementImage(imageSrc) {

    const viewer = document.getElementById("advertisementImageViewer");
    const viewerImage = document.getElementById("advertisementViewerImage");

    viewerImage.src = imageSrc;

    viewer.classList.add("show");
}


function closeAdvertisementImage() {

    const viewer = document.getElementById("advertisementImageViewer");

    viewer.classList.remove("show");
}


/* Close when clicking outside the image */

document.addEventListener("click", function(event) {

    const viewer = document.getElementById("advertisementImageViewer");

    if (event.target === viewer) {

        closeAdvertisementImage();

    }

});
