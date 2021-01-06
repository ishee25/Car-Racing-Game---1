canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car2.png";
car2_x = 10;
car2_y = 100;

background_img = "racing.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBG;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_img;
}

function uploadBG(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPress = e.keyCode;
    console.log(keyPress);

    if (keyPress == '38'){
        car1_up();
        console.log("up arrow key");
    }

    if (keyPress == '40'){
        car1_down();
        console.log("down arrow key");
    }

    if (keyPress == '37'){
        car1_left();
        console.log("left arrow key");
    }

    if (keyPress == '39'){
        car1_right();
        console.log("right arrow key");
    }

    if (keyPress == '87'){
        car2_up();
        console.log("key w");
    }

    if (keyPress == '83'){
        car2_down();
        console.log("key s");
    }

    if (keyPress == '65'){
        car2_left();
        console.log("key a");
    }

    if (keyPress == '68'){
        car2_right();
        console.log("key d");
    }
}