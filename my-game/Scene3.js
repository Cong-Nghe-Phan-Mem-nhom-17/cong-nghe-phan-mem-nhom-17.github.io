let ball;
let arrNumberOfPlay;
let _const3 = 570;
let number = 3;
let status3 = 0;
let numberOfPlay = 4;
let textOver;
let displayResult;
let textQuestion3;
let imag1;
let imag2;
let imag3;
let imag4;
let click3 = 1;
let timedEvent3
let x = 0;

class Scene3 extends Phaser.Scene{

    constructor() {

        super('Scene3');

    }

    preload() {
        // load image background;
        this.load.image('backGround', 'assets/images/backGround.png');
        this.load.image('frame', 'assets/images/frameMenu.png');
        this.load.image('castle', "assets/images/castle.png");

        // load image button;
        this.load.image('backButton', 'assets/images/backButton.png');
        this.load.image('lesson', 'assets/images/lesson.png');
        this.load.image('nextButton', 'assets/images/nextbutton.png')

        // load image object;
        // this.load.image('redBall', 'assets/images/redBall.png');
        this.load.image('numberOfPlay', "assets/images/numberOfPlay.png");
        this.load.image('img1', 'assets/images/img1.png');
        this.load.image('img2', 'assets/images/img2.png');
        this.load.image('img3', 'assets/images/img3.png');
        this.load.image('img4', 'assets/images/img4.png');
        this.load.image('zonePutWindow', 'assets/images/zonePutWindow.png');
    }

    create(){
        // add image background and framework;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frame").setOrigin(0, 0);
        this.castle = this.add.image(335, 200, "castle").setOrigin(0, 0);

        // add image button;
        this.backButton = this.add.sprite(245, 117, 'backButton').setOrigin(0,0);

        // add image object;
        imag1 = this.add.image(1150, 550, 'img1', Phaser.Math.RND.pick(this.framework));
        // imag2 = this.add.image(1150, 430, 'img2', Phaser.Math.RND.pick(this.framework));
        // imag3 = this.add.image(1150, 310, 'img3', Phaser.Math.RND.pick(this.framework));
        // imag4 = this.add.image(1150, 190, 'img4', Phaser.Math.RND.pick(this.framework));
        // ball = this.add.image(430, 137, "redBall").setOrigin(0, 0);

        arrNumberOfPlay = new Array("numberOfPlay");

        for(let i = 0; i < number; i++){
            arrNumberOfPlay[i] = this.add.image(_const3 += 70, 140, "numberOfPlay").setOrigin(0, 0);
        }

        // add text;
        textQuestion3 = this.add.text(450, 620, "Place the bee ABOVE the window", {font: "35px Arial", fill: "black"});
        displayResult = this.add.text(250, 350, "Result!", {font: "50px Arial", fill: "black"});

        // set onClick for the buttons;
        this.backButton.setInteractive().on('pointerdown', () => {
            this.scene.start('Menu')
        });

        this.input.on('gameobjectover', function(pointer, gameObject) {
            gameObject.setTint(0x8EEDE2)
        });

        this.input.on('gameobjectout', function(pointer, gameObject) {
            gameObject.clearTint()
        });

        imag1.setInteractive();
        // imag2.setInteractive();
        // imag3.setInteractive();
        // imag4.setInteractive();

        this.input.setDraggable(imag1);

        

        zone1 = this.add.image(575, 325, 'zonePutWindow').setInteractive();
        zone2 = this.add.image(920, 325, 'zonePutWindow').setInteractive();
        zone3 = this.add.image(575, 550, 'zonePutWindow').setInteractive();
        zone4 = this.add.image(920, 550, 'zonePutWindow').setInteractive();

        zone1.input.dropZone = true;
        zone2.input.dropZone = true;
        zone3.input.dropZone = true;
        zone4.input.dropZone = true;

        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject);
        }, this);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;

            if (gameObject.x >= 500 && gameObject.x <= 640  && gameObject.y >= 255 && gameObject.y <= 395 && zone1 != null)
                zone1.setTint(0x00ff00);
            else if (gameObject.x >= 850 && gameObject.x <= 990  && gameObject.y >= 255 && gameObject.y <= 395 && zone2 != null)
                zone2.setTint(0x00ff00);
            else if (gameObject.x >= 500 && gameObject.x <= 640 && gameObject.y >= 475 && gameObject.y <= 595 && zone3 != null)
                zone3.setTint(0x00ff00);
            else if (gameObject.x >= 850 && gameObject.x <= 990 && gameObject.y >= 475 && gameObject.y <= 595 && zone4 != null)
                zone4.setTint(0x00ff00);
            else {
            }

        });

        this.input.on('dragenter', function (pointer, gameObject, dragX, dragY) {

        });

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {

            dropZone.clearTint()

        });

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            if (gameObject.x >= 500 && gameObject.x <= 640  && gameObject.y >= 255 && gameObject.y <= 395 ){
                if(status3 == 0){
                    displayResult.setText("Correct!");
                    // textQuestion3.setText("Place the bee BELOW the window");
                    status3 = 1;
                    zone1.destroy();
                    zone1 = null;
                    gameObject.input.enabled = false;
                    numberOfPlay--;
                    x = 1 ;
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Below Below Below!');
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                    handleAnsFalse();
                }
            }
            else if (gameObject.x >= 850 && gameObject.x <= 990  && gameObject.y >= 255 && gameObject.y <= 395){
                if(status3 == 0){
                    displayResult.setText("Correct!");
                    // textQuestion3.setText("Place the bee BELOW the window");
                    status3 = 1;
                    zone2.destroy();
                    zone2 = null;
                    gameObject.input.enabled = false;
                    numberOfPlay--;
                    x = 1;
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Below Below Below!');
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                    handleAnsFalse()
                }
            }
            else if (gameObject.x >= 500 && gameObject.x <= 640 && gameObject.y >= 475 && gameObject.y <= 595){
                if(status3 == 1){
                    displayResult.setText("Correct!");
                    // textQuestion3.setText("Place the bee ABOVE the window");
                    status3 = 0;
                    zone3.destroy();
                    zone3 = null;
                    gameObject.input.enabled = false;
                    numberOfPlay--;
                    x = 1
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Above Above Above!');
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                    handleAnsFalse();
                }
            }
            else if (gameObject.x >= 850 && gameObject.x <= 990 && gameObject.y >= 475 && gameObject.y <= 595 ){
                if(status3 == 1){
                    displayResult.setText("Correct!");
                    // textQuestion3.setText("Place the bee ABOVE the window");
                    status3 = 0;
                    zone4.destroy();
                    zone4 = null;
                    gameObject.input.enabled = false;
                    numberOfPlay--;
                    x = 1
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Above Above Above!');
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                    handleAnsFalse();
                }
            }
            else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });

        function handleAnsFalse() {
            arrNumberOfPlay[number - 1].destroy();
            arrNumberOfPlay[number - 1] = null;
            number--;
        }
    }

    destroyObject() {
        if(imag1 != null) imag1.destroy();
        if(imag2 != null) imag2.destroy();
        if(imag3 != null) imag3.destroy();
        if(imag4 != null) imag4.destroy();
        // ball.destroy();
        displayResult.destroy();
        textQuestion3.destroy();

        if(number > 0){

            for(let i = 0; i < number; i++){

                arrNumberOfPlay[i].destroy();

            }

        }
        if(zone1 != null) zone1.destroy();
        if(zone2 != null) zone2.destroy();
        if(zone3 != null) zone3.destroy();
        if(zone4 != null) zone4.destroy();
    }

    handleGameOver(){
        if(numberOfPlay == 0){
            this.backButton.destroy()
            this.destroyObject();
            this.nofication = this.add.text(475, 145, 'Well done! You completed the card!', {

                font: '35px Arial',
                fill: 'red'

            });

            var lesson = this.add.sprite(650, 400, 'lesson').setOrigin(0, 0)

            lesson.setInteractive().on('pointerdown', () => {

                this.scene.start('Menu')

            });

            this.input.on('gameobjectover', function(pointer, gameObject) {

                gameObject.setTint(0x8EEDE2)

            });

            this.input.on('gameobjectout', function(pointer, gameObject) {

                gameObject.clearTint()

            });
        }
        if(number == 0){
            this.destroyObject();
            textOver = this.add.text(625, 137, "Oops! Try Again!", {font: "50px Arial", fill: "black" });
            textOver.setInteractive().on('pointerdown', () =>{

                number = 3;
                status3 = 0;
                _const3 = 570;
                numberOfPlay = 4;
                this.scene.start('Scene3')

            })

            this.input.on('gameobjectover', function(pointer, gameObject) {

                textOver.setColor('red');

            })

            this.input.on('gameobjectout', function(pointer, gameObject){

                textOver.setColor('black')

            })

        }
    }

    update(){
        this.handleGameOver();
        if(x == 1){
            x = 0
            if(numberOfPlay == 3){ 
                timedEvent3 = this.time.delayedCall(1500, function nextObject() {
                    displayResult.setText("Result!")
                    textQuestion3.setText("Place the butterfly BELOW the window")
                    imag2 = this.add.image(1150, 550, 'img2')
                    imag2.setInteractive()
                    this.input.setDraggable(imag2)
                    
    
                }, [], this)
                
            } else 
            if(numberOfPlay == 2){
                timedEvent3 = this.time.delayedCall(1500, function nextObject() {
                    displayResult.setText("Result!")
                    textQuestion3.setText("Place the bug ABOVE the window")
                    imag3 = this.add.image(1150, 550, 'img3')
                    imag3.setInteractive()
                    this.input.setDraggable(imag3)
                    
    
                }, [], this)
            } else 
            if(numberOfPlay == 1){
                timedEvent3 = this.time.delayedCall(1500, function nextObject() {
                    displayResult.setText("Result!")
                    textQuestion3.setText("Place the worm BELOW the window")
                    imag4 = this.add.image(1150, 550, 'img4')
                    imag4.setInteractive()
                    this.input.setDraggable(imag4)
                    
    
                }, [], this)
            }
        }
        
    }
}

