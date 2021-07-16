canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rocketwidth = 100;
rocketheight = 90;
background_image = "mars.jpg";
rocket_image = "t.png";
rocket_x = 10;
rocket_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src=background_image;

    rocket_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rocket_imgTag.src=rocket_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrocket() {
    ctx.drawImage(rocket_imgTag, rocket_x, rocket_y, rocketwidth, rocketheight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38')
    {
        up();
        console.log("up");
    }

    if (keypressed == '40')
    {
        down();
        console.log("down");
    }

    if (keypressed == '37')
    {
        left();
        console.log("left");
    }

    if (keypressed == '39')
    {
        right();
        console.log("right");
    }
}

function up() {
    if(rocket_y >=0){
        rocket_y = rocket_y-10;
        console.log("when up arrow is pressed, x=" + rocket_x + "|y =" + rocket_y);
        uploadbackground();
        uploadrocket();
    }
}

function down() {
    if(rocket_y <=500){
        rocket_y = rocket_y+10;
        console.log("when down arrow is pressed, x=" + rocket_x + "|y =" + rocket_y);
        uploadbackground();
        uploadrocket();
    }
}

function left() {
    if(rocket_x >=0){
        rocket_x = rocket_x-10;
        console.log("when left arrow is pressed, x=" + rocket_x + "|y ="+ rocket_y);
        uploadbackground();
        uploadbackrocket()
    }
}

function right() {
    if(rocket_x <=700){
        rocket_x = rocket_x+10;
        uploadbackground();
        uploadbackrocket()
    }
}
