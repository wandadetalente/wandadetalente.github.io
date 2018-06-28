var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:750, y:groundY},
                {type: 'box',x:100,y:200}
            ]
        
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
       function createSawBlade(x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
                   myObstacle.x = x;
                   myObstacle.y = groundY - y;
                   game.addGameItem(myObstacle);
                   myObstacle.rotationalVelocity = -30;
                   var obstacleImage = draw.bitmap('img/sawblade.png');
                   myObstacle.addChild(obstacleImage);
                   obstacleImage.x = -25;
                   obstacleImage.y = -25;
        }
       
       createSawBlade(500,15);
       
       createSawBlade(1000, 15);
       
       createSawBlade(750, 115);
        

            function createBox(x,y) {
                var hitZoneSize = 35;
                var damageFromObstacle = 25;
                var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = groundY - y;
              game.addGameItem(myObstacle);
              myObstacle.rotationalVelocity = 2;
              var obstacleImage= draw.bitmap( 'img/large_sparkle-rainbow.png');
              myObstacle.addChild(obstacleImage);
              obstacleImage.x = -35;
              obstacleImage.y = -35;
            }
            
            createBox(400, 115);
            
            createBox(875, 115);
            
            createBox(650, 115);
            
            
            function createEnemy(x, y) {
                var enemy =  game.createGameItem('enemy',25);
                    enemy.x = x;
                    enemy.y = groundY - y;
                    enemy.velocityX = -5;
                    enemy.rotationalVelocity = 3;
                    game.addGameItem(enemy);
                    enemy.onPlayerCollision = function() {
                        game.changeIntegrity(-10);
                    };
                    enemy.onProjectileCollision = function(){
                        enemy.fadeOut(); 
                    };
                    var redSquare = draw.rect(50,50,'red');
                    redSquare.x = -25;
                    redSquare.y = -25;
                    enemy.addChild(redSquare);
            
}      
        createEnemy(400,50);
        createEnemy(800,50);
        createEnemy(1200,50);
        
        function createReward(x,y){
                    var reward = game.createGameItem('reward',25);
                    reward.x = x;
                    reward.y = groundY - y;
                    reward.velocityX = -2;
                    game.addGameItem(reward);
                    reward.onPlayerCollision = function() {
                        game.changeIntegrity(25);
                        game.increaseScore(100);
                        reward.fadeOut();
                    }
                    var star = draw.bitmap('http://www.iralovestolaugh.com/wp-content/uploads/2015/08/Orange-Star-Icon.png');
                    star.scaleX = .1;
                    star.scaleY = .1;
                    star.x = -25;
                    star.y = -25;
                    reward.addChild(star);
                }
        
        createReward(1500, 145);

    };
    };
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}