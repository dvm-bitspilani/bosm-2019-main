let galleryNumber = 1;

const galleryContainer = document.getElementsByClassName("gallery-container")[0];

const changeGallerySet = () => {
    // console.log(galleryNumber)
    if (galleryNumber < numberOfSet) {
        galleryNumber++;
        galleryContainer.style.transform = "translate(" + (-100 * (galleryNumber - 1)) + "%)";
        for (dot of document.getElementsByClassName('gallery-nav-dot')) {
                dot.style.background = 'none';
        }
        document.getElementsByClassName('gallery-nav-dot')[galleryNumber - 1].style.background = "#ffffff";
    } else {
        galleryNumber = 0;
        changeGallerySet();
    }
}

let gallerySetChangeInterval = setInterval(changeGallerySet, 5000);

const navigateGallery = (dotIndex) => {
    galleryNumber = dotIndex - 1;
    changeGallerySet();
    clearInterval(gallerySetChangeInterval);
    gallerySetChangeInterval = setInterval(changeGallerySet, 5000);
}