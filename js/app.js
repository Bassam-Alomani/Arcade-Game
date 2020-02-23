// This is the Enemies function constructor with three parameters for x and y coordinates
// as well as the Enemies' speed.
var Enemy = function(x,y,speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.speed=speed;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // The dt parameter will ensure the game runs at the same speed for all computers.
    this.x += this.speed*dt;
    //When enemies reach the end of the screen, they will return to the beginning.
    if(this.x>500){
      this.x = -80;
    }
    //When a collision happens, you lose the game and you go back to your original place.
    if(Math.abs(player.y-this.y)<=40 && Math.abs(player.x-this.x)<=40){
      player.y=390;
      player.x=200;
      alert("You Lost");

    }

};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This is the Player function constructor with three parameters for x and y coordinates
// as well as the Player's speed.
var Player = function(x,y){
    this.sprite='images/char-boy.png'
    this.x=x;
    this.y=y;
}
// This prototype will prevent the player from going off the screen.
// Also, it will show an alert popup if you win and you will be back to your original place.
Player.prototype.update = function() {
    if (this.y<-60){
        this.y=390;
        this.x=200;
        alert("Victory");
    }
    if (this.y>450){
        this.y=390;
    }
    if (this.x<-40){
        this.x=200;
    }
    if (this.x>440){
        this.x=200;
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//This receives from you, your arrow presses and then moves the player.
Player.prototype.handleInput= function(position){
    switch (position) {
      case 'right':
        this.x+=60;
        break;
      case 'left':
        this.x-=60;
        break;
      case 'up':
        this.y-=62;
        break;
      case 'down':
        this.y+=62;
        break;
    }


}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(0,58,200), new Enemy(0,140,180), new Enemy(0,220,220)];
var player = new Player(200,390);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
