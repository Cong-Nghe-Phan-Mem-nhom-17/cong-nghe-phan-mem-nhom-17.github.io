let _const1 = 360;
let ballNumber1 = 9;
let status1 = 0;
let imageBug;
let displayResult2;
let textQuestion2;
let arr;
let nextButton;
let zone1;
let zone2;
let zone3;
let zone4;

class Scene1 extends Phaser.Scene{

    constructor() {
        super('Scene1');
    }

    preload() {
        // load image background;
        this.load.image('backGround', 'assets/images/backGround.png');
        this.load.image('frameWork', "assets/images/frameWork.png");

        // load image button;
        this.load.image('buttonAbove', 'assets/images/buttonAbove.png');
        this.load.image('buttonBelow', 'assets/images/buttonBelow.png');
        this.load.image('nextButton', 'assets/images/nextButton.png');
        this.load.image('backButton', 'assets/images/backButton.png');
        this.load.image('lesson', 'assets/images/lesson.png');

        // load image object;
        this.load.image('imageBird', 'assets/images/imageBird.png');
        this.load.image('redBall', 'assets/images/redBall.png');
        this.load.image('img1', 'assets/images/img1.png');
        this.load.image('imageBug', 'assets/images/imageBug.png');
        this.load.image('zonePut', 'assets/images/zonePut.png');
    }

    create(){
        // add image background and framework;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);

        // add image button;
        this.buttonAbove = this.add.sprite(233, 225, 'buttonAbove').setOrigin(0,0);
        this.buttonBelow = this.add.sprite(233, 525, 'buttonBelow').setOrigin(0,0);
        this.backButton = this.add.sprite(245, 117, 'backButton').setOrigin(0,0);

        // add iamge object;
        this.bird = this.add.image(420, 340, "imageBird").setOrigin(0, 0);
        arr = new Array("redBall");
        for(let i = 0; i < ballNumber1; i++){
            arr[i] = this.add.image(_const1 += 70, 137, "redBall").setOrigin(0, 0);
        }

        // add text;
        this.text1 = this.add.text(800, 350, "Click Above " + "\n" + "The Strange Creature", {font: "50px Arial", fill: "black"});
        this.displayResult = this.add.text(250, 350, "Result", {font: "50px Arial", fill: "black"});

        // set onClick for the buttons;
        this.buttonAbove.setInteractive().on('pointerdown', () => this.eventClickButtonAbove(arr[ballNumber1 - 1]));
        this.buttonBelow.setInteractive().on('pointerdown', () => this.eventClickButtonBelow(arr[ballNumber1 - 1]));
        this.backButton.setInteractive().on('pointerdown', () => this.scene.start('Menu'));

        //effect of sprites;
        this.input.on('gameobjectover', function (pointer, gameObject) {

            gameObject.setTint(0x8EEDE2);

        });
        this.input.on('gameobjectout', function (pointer, gameObject) {

            gameObject.clearTint();
            
        });
    }

    eventClickButtonAbove(ball){
        if(status1 == 0){
            this.displayResult.setText("Correct!");
            status1 = this.randomQuestion();
            ball.destroy();
            ball = null;
            ballNumber1--;
            if(ballNumber1 == 5){
                this.destroyObject();
                this.handleNextFrameGame();
            }
            this.input.on('gameobjectdown', function (pointer, gameObject) {
                gameObject.setTint(0x37FB4B);
            });
            this.input.on('gameobjectup', function (pointer, gameObject) {
                gameObject.clearTint();
            });
        }
        else{
            this.displayResult.setText("Wrong!");
            this.text1.setText("Below Below Below!");
            this.input.on('gameobjectdown', function (pointer, gameObject) {
                gameObject.setTint(0xFD0303);
            });
            this.input.on('gameobjectup', function (pointer, gameObject) {
                gameObject.clearTint();
            });
        }
    }

    eventClickButtonBelow(ball){
        if(status1 == 1){
            this.displayResult.setText("Correct!");
            status1 = this.randomQuestion();
            ball.destroy();
            ball = null;
            ballNumber1--;
            if(ballNumber1 == 5){
                this.destroyObject();
                this.handleNextFrameGame();
            }
            this.input.on('gameobjectdown', function (pointer, gameObject) {
                gameObject.setTint(0x37FB4B);
            });
            this.input.on('gameobjectup', function (pointer, gameObject) {
                gameObject.clearTint();
            });
        }
        else{
            this.displayResult.setText("Wrong!");
            this.text1.setText("Above Above Above!");
            this.input.on('gameobjectdown', function (pointer, gameObject) {
                gameObject.setTint(0xFD0303);
            });
            this.input.on('gameobjectup', function (pointer, gameObject) {
                gameObject.clearTint();
            });
        }
    }

    randomQuestion(){
        var temp = Phaser.Math.Between(0, 1);
        if(temp == 1){
            this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
        }
        else{
            this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
        }
        return temp;
    }

    destroyObject(){
        this.buttonAbove.destroy();
        this.buttonAbove = null;
        this.buttonBelow.destroy();
        this.buttonBelow = null;
        this.text1.destroy();
        this.text1 = null;
        this.displayResult.destroy();
        this.displayResult = null;
    }

    handleGameOver(){
        if(ballNumber1 == 0){
            this.destroyObject2();
            this.nofication = this.add.text(475, 145, 'Well done! You completed the card!', {font: '35px Arial', fill: 'red'});
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
    }

    handleNextFrameGame(){
        displayResult2 = this.add.text(250, 350, "Result!", {font: '50px Arial', fill: 'Black'});
        status1 = 0;
        textQuestion2 = this.add.text(850, 350, 'Put the Bug into' + '\n' + ' Above the bird!', {font: '50px Arial', fill: "Black"});

        imageBug = this.add.image(1150, 550, 'imageBug', Phaser.Math.RND.pick(this.framework)).setInteractive();
        this.input.setDraggable(imageBug);

        zone1 = this.add.image(500, 300, 'zonePut').setInteractive();
        zone2 = this.add.image(700, 300, 'zonePut').setInteractive();
        zone3 = this.add.image(500, 590, 'zonePut').setInteractive();
        zone4 = this.add.image(700, 590, 'zonePut').setInteractive();

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

            if (gameObject.x >= 450 && gameObject.x <= 600  && gameObject.y >= 250 && gameObject.y <= 350 )
                zone1.setTint(0x00ff00);
            else if (gameObject.x >= 650 && gameObject.x <= 800  && gameObject.y >= 250 && gameObject.y <= 350 )
                zone2.setTint(0x00ff00);
            else if (gameObject.x >= 450 && gameObject.x <= 600 && gameObject.y >= 540 && gameObject.y <= 640 )
                zone3.setTint(0x00ff00);
            else if (gameObject.x >= 650 && gameObject.x <= 800 && gameObject.y >= 540 && gameObject.y <= 640 )
                zone4.setTint(0x00ff00);
            else {
                zone1.clearTint();
                zone2.clearTint();
                zone3.clearTint();
                zone4.clearTint();
            }

        });

        this.input.on('dragenter', function (pointer, gameObject, dragX, dragY) {

        });

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {

        });

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            if (gameObject.x >= 450 && gameObject.x <= 600  && gameObject.y >= 250 && gameObject.y <= 350 ){
                if(status1 == 0){
                    displayResult2.setText('True!');
                    arr[ballNumber1 - 1].destroy();
                    arr[ballNumber1 - 1] = null;
                    ballNumber1--;
                    status1 = randomQuestion();
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Below Below '+ '\n' +'Below!');
                    gameObject.x = 1150;
                    gameObject.y = 550;
                }
            }
            else if (gameObject.x >= 650 && gameObject.x <= 800  && gameObject.y >= 250 && gameObject.y <= 350 ){
                if(status1 == 0){
                    displayResult2.setText('True!');
                    arr[ballNumber1 - 1].destroy();
                    arr[ballNumber1- 1] = null;
                    ballNumber1--;
                    status1 = randomQuestion();
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Below Below '+ '\n' +'Below!');
                    gameObject.x = 1150;
                    gameObject.y = 550;
                }
            }
            else if (gameObject.x >= 450 && gameObject.x <= 600 && gameObject.y >= 540 && gameObject.y <= 640 ){
                if(status1 == 1){
                    displayResult2.setText('True!');
                    arr[ballNumber1 - 1].destroy();
                    arr[ballNumber1 - 1] = null;
                    ballNumber1--;
                    status1 = randomQuestion();
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Above Above '+ '\n' +'Above!');
                    gameObject.x = 1150;
                    gameObject.y = 550;
                }
            }
            else if (gameObject.x >= 650 && gameObject.x <= 800 && gameObject.y >= 540 && gameObject.y <= 640 ){
                if(status1 == 1){
                    displayResult2.setText('True!');
                    arr[ballNumber1 - 1].destroy();
                    arr[ballNumber1 - 1] = null;
                    ballNumber1--;
                    status1 = randomQuestion();
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Above Above '+ '\n' +'Above!');
                    gameObject.x = 1150;
                    gameObject.y = 550;
                }
            }
            else {
                gameObject.x = 1150;
                gameObject.y = 550;
            }
        });

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped)
            {
                gameObject.x = 1150;
                gameObject.y = 550;
            }
        });

        function randomQuestion() {
            var temp2 = Phaser.Math.Between(0, 1);
            if(temp2 == 0){
                textQuestion2.setText('Put the Bug into' + '\n' + 'Above the bird!');
            }
            else{
                textQuestion2.setText('Put the Bug into' + '\n' + 'Below the bird!');
            }
            return temp2;
        }
    }

    destroyObject2(){
        displayResult2.destroy();
        imageBug.destroy();
        textQuestion2.destroy();
        zone1.destroy();
        zone2.destroy();
        zone3.destroy();
        zone4.destroy();
        this.bird.destroy();
        this.backButton.destroy()
    }

    update(){
        this.handleGameOver();
    }

}

