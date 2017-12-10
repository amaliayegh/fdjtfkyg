let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 30;

let c = canvas.getContext("2d");

let dir = [1, -1];
let direction = dir[Math.round(Math.random())];
let score1 = 0;
let score2 = 0;

let x = canvas.width / 2;
let y = canvas.height / 2;
let r = 20;
let xdelta = 5;
let ydelta = 5;



let xleft = 10;
let yleft = 10;
let width = 20;
let height = 150;

let xright = canvas.width - 30;
let yright = 10;
let width1 = 20;
let height1 = 150;



const loop = function() {

	requestAnimationFrame(loop);
	c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "black";
    c.fill();

c.fillStyle = "pink";
    c.fillRect(xright, yright, width1, height1);
    c.fillStyle = "pink";
    c.fillRect(xleft, yleft, width, height);

    c.font = "50px Arial";
    c.fillStyle = "blue";
    c.fillText("score" + ' ' + score1, 200, 50); 
    
    c.font = "50px Arial";
    c.fillStyle = "blue";
    c.fillText("score" + ' ' + score2, canvas.width - 300 ,50); 
    

    c.beginPath();
    c.strokeStyle = "black";
    c.moveTo(canvas.width / 2, 0);
    c.lineTo(canvas.width / 2, canvas.height);
    c.stroke();



	if(x > canvas.width) {

		score1 = score1 + 1;
		x = canvas.width / 2;
	    y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += xdelta * direction;
		y += ydelta * direction;



	}

	else if (x < 0 ) {

		score2 = score2 + 1;
		x = canvas.width / 2;
		y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += xdelta * direction;
		y += ydelta * direction;


	}

	else if(y > canvas.height) {
		ydelta = -ydelta;
	}

else if(y < 0) {
	ydelta = -ydelta;
}
	x += xdelta * direction;
	y += ydelta * direction;




	if(x < xright + width1 && x + r * 2 > xright && y < yright + height1 && y + r * 2 > yright) {
		xdelta = -xdelta;
	}
	else if(x < xleft + width && x + r * 2 > xleft && y < yleft + height && y + r * 2 > yleft) {
		xdelta = -xdelta;
	}

};

loop();

const upKey = 38;
    const downKey = 40;
    const wKey = 87;
    const sKey = 83;

    document.addEventListener('keyup', function(event) {

        if(event.keyCode === upKey) {
            yright = yright - 40;
            
            if(yright < 0) {
                yright = canvas.height;
            }            
        }        
        else if(event.keyCode === downKey){
            
            yright = yright + 40;
            
            if(yright > canvas.height) {
                yright = 0;
            }
       }        
    }, false);

    document.addEventListener('keydown', function(event){
        
        if(event.keyCode === wKey) {
            yleft = yleft - 40;            
            if(yleft < 0) {
                yleft = canvas.height;
                xleft = canvas.width - 30;
            }            
        }        
        else if(event.keyCode === sKey){
            
            yleft = yleft + 40;   
            if(yleft > canvas.height) {
                yleft = 0;
                xleft = canvas.width - 30;
            }            
        }        
    }, false);