let _const = 360;
let ballNumber = 9;
let status = 0;
var displayResult2;

class Scene2 extends Phaser.Scene{

    constructor() {
        super('Scene2');
    }

    preload() {
        // load image background;
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('frameWork', "assets/images/frameWork.png")

        // load image button;
        this.load.image('buttonAbove', 'assets/images/buttonAbove.png')
        this.load.image('buttonBelow', 'assets/images/buttonBelow.png')
        this.load.image('nextButton', 'assets/images/nextButton.png')
        this.load.image('backButton', 'assets/images/backButton.png')

        // load image object;
        this.load.image('imageBird', 'assets/images/imageBird.png')
        this.load.image('redBall', 'assets/images/redBall.png')
        this.load.image('img1', 'assets/images/img1.png')
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
        var arr = new Array("redBall");
        for(var i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(_const += 70, 137, "redBall").setOrigin(0, 0);
        }

        // add text;
        this.text1 = this.add.text(800, 350, "Click Above " + "\n" + "The Strange Creature", {font: "50px Arial", fill: "black"});
        this.displayResult = this.add.text(250, 350, "Result", {font: "50px Arial", fill: "black"});

        //drag
        // this.img1 = this.add.image(1100, 550, "img1").setInteractive();
        //
        //
        // this.input.setDraggable(this.img1);
        //
        // this.input.on('dragstart', function (pointer, gameObject) {
        //     this.children.bringToTop(gameObject);
        // }, this);
        //
        // this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        //     gameObject.x = dragX;
        //     gameObject.y = dragY;
        //
        // });


        // set onClick for the buttons;
        this.buttonAbove.setInteractive().on('pointerdown', () => this.eventClickButtonAbove(arr[ballNumber - 1]));
        this.buttonBelow.setInteractive().on('pointerdown', () => this.eventClickButtonBelow(arr[ballNumber - 1]));
        this.backButton.setInteractive().on('pointerdown', () => this.scene.start('Menu'));

        //effect of sprites;
        this.input.on('gameobjectdown', function (pointer, gameObject) {
            gameObject.setTint(0xff0000);
        });
        this.input.on('gameobjectup', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTint(0x8EEDE2);
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });
    }

    eventClickButtonAbove(ball){
        if(status == 0){
            this.displayResult.setText("Correct!");
            status = this.randomQuestion();
            ball.destroy();
            ball = null;
            ballNumber--;
            if(ballNumber == 5){
                this.destroyObject();
                this.handleNextFrameGame();
            }
        }
        else{
            this.displayResult.setText("Wrong!");
            this.text1.setText("Below Below Below!");
        }
    }

    eventClickButtonBelow(ball){
        if(status == 1){
            this.displayResult.setText("Correct!");
            status = this.randomQuestion();
            ball.destroy();
            ball = null;
            ballNumber--;
            if(ballNumber == 5){
                this.destroyObject();
                this.handleNextFrameGame();
            }
        }
        else{
            this.displayResult.setText("Wrong!");
            this.text1.setText("Above Above Above!");
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
        this.text2 = this.add.text(725, 137, "WIN!", {font: "50px Arial", fill: "red" });
        this.nextButton = this.add.image(1150, 117, 'nextButton').setInteractive().setOrigin(0, 0);
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTint(0x8EEDE2);
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });
    }

    handleNextFrameGame(){
        displayResult2 = this.add.text(250, 350, "Result!", {font: '50px Arial', fill: 'Black'});
        var temp2 = Phaser.Math.Between(0, 1);
        var temp2 = 1;
        if(temp2 == 0){
            this.textQuestion2 = this.add.text(800, 300, 'Put the Bug into' + '\n' + ' Above the bird!', {font: '50px Arial', fill: "Black"});
        }
        else{
            this.textQuestion2 = this.add.text(800, 300, 'Put the Bug into' + '\n' + ' Below the bird!', {font: '50px Arial', fill: "Black"});
        }
        status = temp2;

        this.imageBug = this.add.image(1150, 550, 'imageBug', Phaser.Math.RND.pick(this.framework)).setInteractive();
        this.input.setDraggable(this.imageBug);

        var zone1 = this.add.image(500, 300, 'zonePut').setInteractive();
        var zone2 = this.add.image(700, 300, 'zonePut').setInteractive();
        var zone3 = this.add.image(500, 590, 'zonePut').setInteractive();
        var zone4 = this.add.image(700, 590, 'zonePut').setInteractive();

        zone1.input.dropZone = true;
        zone2.input.dropZone = true;
        zone3.input.dropZone = true;
        zone4.input.dropZone = true;

        // this.addGraph(zone1, 0);
        // this.addGraph(zone2, 0);
        // this.addGraph(zone3, 1);
        // this.addGraph(zone4, 1);

        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject);
        }, this);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragenter', function (pointer, gameObject, dropZone) {
            zone1.setTint(0x00ff00);
            zone2.setTint(0xff0000);
        });

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
            zone1.clearTint();
            zone2.clearTint();
        });

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            zone1.clearTint();
            zone2.clearTint();
        });

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped)
            {
                gameObject.x = 1150;
                gameObject.y = 550;
            }
        });

    }

    update(){

    }

}