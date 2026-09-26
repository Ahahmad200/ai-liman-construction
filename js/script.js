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
// ==========================================
// PROPERTY DETAILS POPUP
// ==========================================

function openPropertyDetails(
    title,
    status,
    location,
    price,
    description,
    image
) {

    const modal = document.getElementById("propertyDetailsModal");

    const titleElement = document.getElementById("propertyDetailsTitle");
    const statusElement = document.getElementById("propertyDetailsStatus");
    const locationElement = document.getElementById("propertyDetailsLocation");
    const priceElement = document.getElementById("propertyDetailsPrice");
    const descriptionElement = document.getElementById("propertyDetailsDescription");
    const imageElement = document.getElementById("propertyDetailsImage");
    const whatsappButton = document.getElementById("propertyWhatsAppButton");

    titleElement.textContent = title;
    statusElement.textContent = status;
    locationElement.textContent = "📍 " + location;
    priceElement.textContent = "💰 " + price;
    descriptionElement.textContent = description;

    imageElement.src = image;

    // WhatsApp message
    const message =
        "Assalamu Alaikum. I am interested in the " +
        title +
        " listed on the A.I Liman Construction website. " +
        "Please provide more information.";

    whatsappButton.href =
        "https://wa.me/2347033338724?text=" +
        encodeURIComponent(message);

    modal.classList.add("show");
}


// CLOSE PROPERTY DETAILS

function closePropertyDetails() {

    const modal = document.getElementById("propertyDetailsModal");

    modal.classList.remove("show");
}


// CLOSE WHEN CLICKING OUTSIDE THE BOX

document.addEventListener("click", function(event) {

    const modal = document.getElementById("propertyDetailsModal");

    if (event.target === modal) {

        closePropertyDetails();

    }

});
// ==========================================
// PROPERTY PHOTO GALLERY
// ==========================================

function loadPropertyGallery(images) {

    const mainImage = document.getElementById("propertyDetailsImage");
    const thumbnails = document.getElementById("propertyThumbnails");

    // Clear previous thumbnails
    thumbnails.innerHTML = "";

    // Display the first image
    mainImage.src = images[0];

    // Create a thumbnail for each image
    images.forEach(function(image, index) {

        const thumbnail = document.createElement("img");

        thumbnail.src = image;
        thumbnail.alt = "Property photo " + (index + 1);
        thumbnail.className = "property-thumbnail";

        // Highlight the first thumbnail
        if (index === 0) {
            thumbnail.classList.add("active");
        }

        // Change the main image when tapped
        thumbnail.onclick = function() {

            mainImage.src = image;

            document.querySelectorAll(".property-thumbnail")
                .forEach(function(item) {
                    item.classList.remove("active");
                });

            thumbnail.classList.add("active");
        };

        thumbnails.appendChild(thumbnail);

    });

}
