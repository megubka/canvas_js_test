var images = [
    { src : 'kafelki/tile0.png' },
    { src : "kafelki/tile1.png" },
    { src : "kafelki/tile2.png" },
    { src : "kafelki/tile3.png" },
    { src : "kafelki/tile4.png" },
    { src : "kafelki/tile5.png" },
    { src : "kafelki/tile6.png" },
    { src : "kafelki/tile7.png" }
]

window.onload = function () {
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    renderImage = new Array();
    console.log(renderImage);
    canvas.width = 900;
    canvas.height = 900;
}

// Setting a viewport size that was passed via input
function setViewportSize() {
    var val = parseInt(document.getElementById("input").value);
    console.log(val);
    canvas.width = val;
    canvas.height = val;
    imagesToRender(val);
}

// Calculating a number of images that should be rendered (according to the viewport size)
function imagesToRender(val) {
    var num = Math.ceil(val/180);
    var numberOfImages = num;
    console.log(numberOfImages);
    drawImage(numberOfImages);
}

// Drawing images via passing them into the array and then giving positions.
function drawImage(numberOfImages) {
    for (var i = 0; i < numberOfImages; i++) {
        for (var j = 0; j < numberOfImages; j++) {
            var index = i * numberOfImages + j;
            var getIndex = Math.floor(Math.random() * images.length);
            renderImage[index] = new Image();
            renderImage[index].src = images[getIndex].src;
            renderImage[index].onload = imagePosition(context, renderImage[index], index, i, j);
        }
    }
}

// Giving sizes starting points to images (put 180 because dimensions of images are 180px)
function imagePosition(ctx,img,index,i,j){
    return function () {
        ctx.drawImage(img, i * 180, j * 180);
        console.log(renderImage);
    };
}