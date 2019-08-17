let galleryNumber = 0;
let numberOfGallerySet = 3;
let numberOfGalleryMobileSet = 5;

const galleryContainer = document.getElementsByClassName("gallery-container")[0];

const changeGallerySet = () => {
    // console.log(galleryNumber)
    if (galleryNumber < numberOfGallerySet) {
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

const changeGalleryMobileSet = () => {
    console.log(galleryNumber)
    if (galleryNumber < numberOfGalleryMobileSet) {
        galleryNumber++;
        galleryContainer.style.transform = "translate(" + (-100 * (galleryNumber - 1)) + "%)";
        for (dot of document.getElementsByClassName('gallery-nav-dot-mobile')) {
            dot.style.background = 'none';
        }
        document.getElementsByClassName('gallery-nav-dot-mobile')[galleryNumber - 1].style.background = "#ffffff";
    } else {
        galleryNumber = 0;
        changeGallerySet();
    }
}
console.log(window.innerWidth)
if(window.innerWidth < 768) 
   var galleryMobileSetChangeInterval = setInterval(changeGalleryMobileSet, 5000);
else
    var gallerySetChangeInterval = setInterval(changeGallerySet, 5000);

const navigateGallery = (dotIndex) => {
    galleryNumber = dotIndex - 1;
    changeGallerySet();
    clearInterval(gallerySetChangeInterval);
    gallerySetChangeInterval = setInterval(changeGallerySet, 5000);
}
const navigateMobileGallery = (dotIndex) => {
    galleryNumber = dotIndex - 1;
    changeGalleryMobileSet();
    clearInterval(galleryMobileSetChangeInterval);
    gallerySetChangeInterval = setInterval(galleryMobileSetChangeInterval, 5000);
}

