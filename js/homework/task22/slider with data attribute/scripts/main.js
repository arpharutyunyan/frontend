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
