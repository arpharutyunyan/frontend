const generalPicture = document.getElementById("generalPicture");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("prev_btn");
const images = document.querySelectorAll(".picture_collection img");

const pictureArray = ["picture_1.png",
    "picture_2.jpg",
    "picture_3.jpg",
    "picture_4.jpg",
    "picture_5.jpg"];

let imageIndex = 0;
const pictureCount = pictureArray.length;

nextBtn.addEventListener('click', () => {
    if (imageIndex !== pictureCount - 1) {
        imageIndex += 1;
    } else {
        imageIndex = 0;
    }

    generalPicture.src = `images/${pictureArray[imageIndex]}`;
});

prevBtn.addEventListener('click', () => {
    if (imageIndex) {
        imageIndex -= 1;
    } else {
        imageIndex = pictureCount - 1;
    }

    generalPicture.src = `images/${pictureArray[imageIndex]}`;
});

images.forEach(elem => {
    elem.addEventListener('click', ()=>{
        imageIndex = parseInt(elem.dataset.sliderIndex);
        generalPicture.src = `images/${pictureArray[imageIndex]}`;
    });
});