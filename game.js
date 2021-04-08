// canvas settings...


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.font = '33px Ariel';
c.fillStyle = 'white';

// Distance and collision game Arrays..



let player = document.getElementById('player');
let player2 = document.getElementById('player2');

let shield = new Image();
shield.src = 'lazer1.png';

let shieldWidth = 160;

// enemy arrays created....

let enemies = [];

for(let i =0; i <10; i ++){

let enemy = new Image();
enemy.src = 'baddie.png';
enemies.push(enemy);

}

let Enemyposition_x = [];

for(let i = 0; i < enemies.length; i ++){

let x = innerWidth - 100;
Enemyposition_x.push(x);

}

let Enemyposition_y = [];

for(let i = 0;i < enemies.length;i ++){

    let y = 50 * i;
    Enemyposition_y.push(y);
}

// enemy dx and dy. i.e x and y speed variables - into array

let enemyDX = [];

for(let i = 0; i < 10; i ++){

let dx = 20 * Math.random();
enemyDX.push(dx);

}

let enemyDY = [];

for(let i = 0; i < enemies.length; i ++){

let dy = 5 * Math.random();
enemyDY.push(dy);

}

let enemyWidth = [];

for(let i = 0; i < enemies.length; i ++){

    let enemWidth = 90;
    enemyWidth.push(enemWidth);
}

// empty varaiable to store the distance calculation for each enemy X and Y

let enemyDistanceX = [];

for(let i = 0; i <  enemies.length; i ++){

    let distEnemyX;
    enemyDistanceX.push( distEnemyX);

}

let enemyDistanceY = [];

for(let i = 0; i <  enemies.length; i ++){

    let distEnemyY;
    enemyDistanceY.push( distEnemyY);

}

let enemyHeight = 90;

// enemy movement function....

function enemyMove(){

    for(let i = 0;i < enemies.length;i ++){

    Enemyposition_x[i] -= enemyDX[i];
    Enemyposition_y[i] += enemyDY[i];

    
    }

    }

// empty lazer didstance variables

let lazerDistanceX = [];

for(let i = 0; i <  enemies.length; i ++){

    let distLazerX;
    lazerDistanceX.push( distLazerX);

}

let lazerDistanceY = [];

for(let i = 0; i <  enemies.length; i ++){

    let distLazerY;
    lazerDistanceY.push( distLazerY);

}

// explode array. This is to create the enemy destruction effects...

let explode = [];

for(let i = 0;i < enemies.length;i ++){

    let exploded = new Image();
    exploded.src = 'explode.png';
    explode.push(exploded);
}



let explodeWidth = [];

for(let i = 0;i < enemies.length;i ++){

    let explodedWidth = 0;
    explodeWidth.push(explodedWidth);
}

let explodeHeight = [];

for(let i = 0;i < enemies.length;i ++){

    let explodedHeight = 0;
    explodeHeight.push(explodedHeight);
}

// ship variables and arays for the hero space craft.....

let ship = new Image();
ship.src = 'spaceShip2.png';


let shipWidth = [];

for(let i = 0;i < enemies.length;i ++){

    let shipWid = 200;
    shipWidth.push(shipWid);
}

let ship_x =100;
let ship_y =250;

let ship_height = 80;

let ship_left = false;
let ship_right = false;
let ship_up = false;
let ship_down = false;

let left_key = 65;
let right_key = 68;
let up_key = 87;
let down_key = 83;

let = ship_dx = 8;
let = ship_dy = 8; 

// Hero movement functions...

function shipMove(){

    if(ship_left == true){
        ship_x -= ship_dx;
        lazer_x -= lazer_dx;
    }
    if(ship_right == true){
        ship_x += ship_dx;
        lazer_x += lazer_dx;
    }
    if(ship_up == true){
        ship_y -= ship_dy;
        lazer_y -= lazer_dy;
    }
    if(ship_down == true){
        ship_y += ship_dy;
        lazer_y += lazer_dy;
    }
    if(ship_x < 0){
        ship_x += ship_dx;
        lazer_x += lazer_dx;
        
    }
    if(ship_x > innerWidth - 200){
       ship_x -= ship_dx;
       lazer_x -= lazer_dx;
    }
    if(ship_y < 0){
       ship_y += ship_dy;
       lazer_y += lazer_dy;
    }
    if(ship_y > innerHeight - 100){
       ship_y -= ship_dy;
       lazer_y -= lazer_dy;
    }
    
    }
    

// lazer fire variables...

let lazer = new Image();
lazer.src = 'lazer1.png';

let lazer_x = -600;
let lazer_y = -100;

let lazer_dx = 8;
let lazer_dy = 8;

let lazer_dxFire = 40;

let lazer_shoot = false;
let lazer_position = false;

// lazer positioning and firing functions...

function lazerPosition(){
    if(lazer_position == true){
    lazer_x = ship_x + 200;
    lazer_y = ship_y + 50;
    }
}

function lazerShoot(){
    if(lazer_shoot == true){
      
       lazer_x += lazer_dxFire;
       lazer_dx = 0;
    }
    
} 

// functions to create lazer , enemy and hero craft collision effects.....
// these functions are called inside the animate function below...


function getDistance(xx1 ,yy1 ,xx2 ,yy2,i){
    enemyDistanceX[i] = xx2 + 20 - xx1;
    enemyDistanceY[i] = yy2 + 20 - yy1;

    return Math.sqrt(Math.pow(enemyDistanceX[i] ,2) + Math.pow(enemyDistanceY[i] ,2));
}

function getDistance2(llx ,lly ,xx2 ,yy2,i){
    lazerDistanceX[i] = xx2 + 20 - llx;
    lazerDistanceY[i] = yy2 + 20 - lly;

    return Math.sqrt(Math.pow(lazerDistanceX[i] ,2) + Math.pow(lazerDistanceY[i] ,2));
}

function collisionAction(xx1 ,yy1 ,xx2 ,yy2,i){

    if(getDistance(xx1 + 20 ,yy1 + 40 ,xx2 + 20 ,yy2 + 20 ) < 20 + 50 && enemyWidth[i] == 90) {
        shipWidth[i] = 0;
        enemyWidth[i] = 0;
        explodeWidth[i] = 30;
        explodeHeight[i] = 30;
        player.play();
        shieldWidth -= 40;  
     }
     else{
         shipWidth[i] = 200;
     }
     
    }
function lazerCollision(llx ,lly ,xx2 ,yy2,i ){     

     if(getDistance2(llx ,lly ,xx2 + 20 ,yy2 + 20) < 19 + 38){
        enemyWidth[i] = 0; 
        explodeWidth[i] = 30;
        explodeHeight[i] = 30;
        player.play();
        score += 10;
        
     }

     if(xx2 < -380){
        enemyWidth[i] = 90;
        explodeWidth[i] = 0;
        explodeHeight[i] = 0
      
     }

   }

  
// all the above functions are placed inside this final function / with arguments, so it can be called together.


function gameCollision (xx1 ,yy1 ,xx2 ,yy2 ,llx ,lly, i ){

    getDistance(xx1 ,yy1 ,xx2 ,yy2,i);
    collisionAction(xx1 ,yy1 ,xx2 ,yy2,i);
    getDistance2(llx ,lly ,xx2 ,yy2,i);
    lazerCollision(llx ,lly ,xx2 ,yy2,i);
  
    
    
    c.drawImage(ship ,ship_x ,ship_y , shipWidth[i] ,ship_height );

    for(let i = 0;i < enemies.length;i ++){
    c.drawImage(enemies[i]  ,Enemyposition_x[i]  ,Enemyposition_y[i]  ,enemyWidth[i] ,enemyHeight );
    }
}

// finally a explodecreation function to create the explode image...
function explodeCreate(){

    for(let i = 0;i < enemies.length;i ++){
    c.drawImage(explode[i]  ,Enemyposition_x[i]    ,Enemyposition_y[i]   ,explodeWidth[i] ,explodeHeight[i] );

    }
}

// function for making the enemy craft bounce off the top and the bottom of the screen...



function enemyScreenTopBottom(){

    for(let i = 0;i < enemies.length;i ++){
  
        if(Enemyposition_x[i] < - 400){
    
            Enemyposition_x[i] = innerWidth + 200;
           
            
        }
      
    
    
      if(Enemyposition_y[i] > innerHeight + 100){
    
        enemyDY[i] = -enemyDY[i];
      }
      if(Enemyposition_y[i] < - 100){
    
        enemyDY[i] = -enemyDY[i];
      }
     
    } 
    

}
// game over function is called when the hero shield has been destroyed...

 function gameOver(){

    if(shieldWidth < 0){

        ship_dx = 0;
        ship_dy = 0;
        document.getElementById('gameOver').style.display = 'block';
        shieldWidth = 0;
    }
 } 

 // score and shield variables...

 let score = 0;
 let shieldWord = 'SHIELD';


// Animate function......



function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0 ,0 ,innerWidth ,innerHeight);
    
// shield ..
    c.drawImage(shield ,160 ,0 ,shieldWidth ,40);

// lazer.. 
    c.drawImage(lazer ,lazer_x ,lazer_y ,50 ,10);
    
// score text..
    c.fillText(score,1100,28,800,100);


  // functions created earlier are declared
    
    enemyMove();
    enemyScreenTopBottom();
    shipMove();
    explodeCreate();
    lazerPosition();     
    lazerShoot();
    player2.play();
    gameOver();

    // game collision function declared.

    for(let i = 0;i < enemies.length;i ++){
  
    gameCollision (ship_x ,ship_y, Enemyposition_x[i],Enemyposition_y[i],lazer_x ,lazer_y,i);

    }
  
}


animate();


// Keydown and keyup functions for sprite movement....


window.addEventListener('keydown' , function(e){
    if(e.keyCode == left_key){
        ship_left = true;
    }
    if(e.keyCode == right_key){
        ship_right = true;
    }
    if(e.keyCode == up_key){
        ship_up = true;
    }
    if(e.keyCode == down_key){
        ship_down = true;
    }
});

window.addEventListener('keyup' , function(e){

    if(e.keyCode == left_key){
        ship_left = false;
    }
    if(e.keyCode){
    ship_right = false;
    }
    if(e.keyCode == up_key){
        ship_up = false;
        
    }
    if(e.keyCode == down_key){
        ship_down = false;
    }

});

window.addEventListener('keydown' , function(e){

    if(e.keyCode == 32){
        lazer_position = true;
        document.getElementById('buttons').style.display = 'none';
    }
   

});


window.addEventListener('keyup' , function(e){

    if(e.keyCode == 32){
        lazer_shoot = true;
        lazer_dy = 0;
        lazer_position = false;
        
    }
   

});


window.onresize = function(){
    location.reload();
}
 

