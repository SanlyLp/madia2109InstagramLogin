var slide = document.getElementById("slide")
var imageNames = ["sample1.png", "sample2.png", "sample3.png"]
var index = 0;
var myTimer = setInterval(nextSlide, 2000)

function nextSlide() {
    slide.src = imageNames[index];
    if (index + 1 === imageNames.length) {
        index = 0;
    } else {
        index++;
    }

}
