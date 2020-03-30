let _const = 360;
let ballNumber = 9;
let status = 0;

class Scene2 extends Phaser.Scene{

    constructor() {
        super("playGame");
    }

    preload() {
        // load data;
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('frameWork', "assets/images/frameWork.png")
        this.load.image('redBall', 'assets/images/redBall.png')
        this.load.image('buttonAbove', 'assets/images/buttonAbove.png')
        this.load.image('buttonBelow', 'assets/images/buttonBelow.png')
        this.load.image('nextButton', 'assets/images/nextButton.png')
        this.load.image('imageBird', 'assets/images/imageBird.png')

        // this.load.spritesheet('animation', 'assets/spritesheets/animationOfBall.png', {
        //     frameWidth: 29,
        //     frameHeight: 26
        // })
    }

    create(){

        // Object of the game;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);
        this.clickCountText = this.add.text(250, 350, "Result", {font: "50px Arial", fill: "black"});

        // ball;
        var arr = new Array("redBall");
        for(var i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(_const += 70, 137, "redBall").setOrigin(0, 0);
        }

        //animation;
        // var animationBall = this.add.sprite(200, 200, "animation").setOrigin(0, 0);
        // animationBall.anims.create({
        //     key: "animation_ball",
        //     frames: this.anims.generateFrameNumbers("animation"),
        //     framesRate: 20,
        //     repeat: -1
        // });

        //text;
        this.text1 = this.add.text(800, 350, "Click Above " + "\n" + "The Strange Creature", {font: "50px Arial", fill: "black"});


        //Events in the game;
        this.spriteAbove = this.add.sprite(233, 225, 'buttonAbove').setInteractive().on('pointerdown', () => this.moveBall(arr[ballNumber - 1])).setOrigin(0,0);
        this.spriteBelow = this.add.sprite(233, 525, 'buttonBelow').setInteractive().on('pointerdown', () => this.moveBall1(arr[ballNumber - 1])).setOrigin(0,0);
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTint(0x8EEDE2);
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });

        this.bird = this.add.image(420, 340, "imageBird").setOrigin(0, 0);

    }


    moveBall(ball){
        if(status == 0){
            this.clickCountText.setText("Correct!");
            var temp = Phaser.Math.Between(0, 1);
            if(temp == 1){
                this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
            }
            else{
                this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
            }
            status = temp;
            ball.destroy();
            ball = null;
            ballNumber--;

            if(ballNumber == 0){
                this.text2 = this.add.text(725, 137, "WIN!", {font: "50px Arial", fill: "red" })
                this.spriteAbove.destroy();
                this.spriteAbove = null;
                this.spriteBelow.destroy();
                this.spriteBelow = null;
                this.text1.destroy();
                this.text1 = null;
                this.nextButton = this.add.image(1150, 117, 'nextButton').setInteractive().setOrigin(0, 0);
                this.input.on('gameobjectover', function (pointer, gameObject) {
                    gameObject.setTint(0xff0000);
                });

                this.input.on('gameobjectout', function (pointer, gameObject) {
                    gameObject.clearTint();
                });
            }
        }
        else{
            this.clickCountText.setText("Wrong!");
            this.text1.setText("Below Below Below!");
        }
    }

    moveBall1(ball){
        if(status == 1){
            this.clickCountText.setText("Correct!");
            var temp = Phaser.Math.Between(0, 1);
            if(temp == 1){
                this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
            }
            else{
                this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
            }
            status = temp;
            ball.destroy();
            ball = null;
            ballNumber--;

            if(ballNumber == 0){
                this.text2 = this.add.text(725, 137, "WIN!", {font: "75px Arial", fill: "red" })
                this.spriteAbove.destroy();
                this.spriteAbove = null;
                this.spriteBelow.destroy();
                this.spriteBelow = null;
                this.text1.destroy();
                this.text1 = null;
                this.nextButton = this.add.image(1150, 117, 'nextButton').setInteractive().setOrigin(0, 0);
                this.input.on('gameobjectover', function (pointer, gameObject) {
                    gameObject.setTint(0xff0000);
                });

                this.input.on('gameobjectout', function (pointer, gameObject) {
                    gameObject.clearTint();
                });
            }
        }
        else{
            this.clickCountText.setText("Wrong!");
            this.text1.setText("Above Above Above!");
        }
    }

    update(){

    }

}