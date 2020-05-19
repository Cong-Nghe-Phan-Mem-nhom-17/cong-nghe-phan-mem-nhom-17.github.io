/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Menu extends Phaser.Scene {


    constructor() {

        super('Menu')

    }

    preload() {

        this.load.image('backGround', 'assets/images/imageBackground/backGround.png');
        this.load.image('frameMenu', 'assets/images/imageBackground/frameMenu.png');
        this.load.image('play1', 'assets/images/imageBackground/play1.png');
        this.load.image('play2', 'assets/images/imageBackground/play2.png');
        this.load.image('play3', 'assets/images/imageBackground/play3.png');
        
    }

    
    create(){
        
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);

        this.framework = this.add.image(233, 115, "frameMenu").setOrigin(0, 0);
         
        this.text0 = this.add.text(350, 200, "CHOOSE A GAME TO PLAY!", {

            font: "50px Arial", 
            fill: "red"

        }).setOrigin(0, 0);

        // Choose scene 1 
        this.play1 = this.add.sprite(350, 300, 'play1').setOrigin(0,0);

        this.play1.setInteractive().on('pointerdown', () => {
            x1 = 65;
            next1 = 0;
            const1 = 360;
            constX = 1045
            number1 = 9;
            ballNumber1 = 9;
            status1 = 0;
            nextRound1 = 0;
            time1 = 0;
            this.scene.start('Scene1');

        });

        this.textPlay1 = this.add.text(360, 550, "           Identify \n    above and below ", {

            font: "20px Arial", 
            fill: "black"

        }).setOrigin(0, 0);

        this.textPlay1.setInteractive().on('pointerdown', () =>{
            x1 = 65;
            next1 = 0;
            const1 = 360;
            constX = 1045
            number1 = 9;
            ballNumber1 = 9;
            nextRound1 = 0;
            status1 = 0;
            time1 = 0;
            this.scene.start('Scene1');

        });

        // Choose scene 2

        this.play2 = this.add.sprite(650, 300, 'play2').setOrigin(0,0);

        this.play2.setInteractive().on('pointerdown', () => {

            const2 = 360;
            constX2 = 1045;
            number2 = 9;
            x2 = 65;
            nextRound2 = 0;
            ballNumber2 = 9;
            status2 = 0;
            time2 = 0;
            this.scene.start('Scene2');

        });

        this.textPlay2 = this.add.text(670, 550, "Say: above or below", {

            font: "20px Arial",
            fill: "black"

        }).setOrigin(0, 0);

        this.textPlay2.setInteractive().on('pointerdown', () => {

            const2 = 360;
            constX2 = 1045;
            number2 = 9;
            x2 = 65;
            nextRound2 = 0;
            ballNumber2 = 9;
            status2 = 0;
            time2 = 0;
            this.scene.start('Scene2');

        });

        // Choose scene 3

        this.play3 = this.add.sprite(950, 300, 'play3').setOrigin(0,0);

        this.play3.setInteractive().on('pointerdown', () => {
            nextRound3 = 0;
            number = 3;
            status3 = 0;
            const3 = 570;
            numberOfPlay = 4;
            time3 = 0;
            this.scene.start('Scene3');

        });

        this.textPlay3 = this.add.text(950, 550, "Place an object in a given \nposition above below \nanother object", {

            font: "20px Arial",
            fill: "black"

        }).setOrigin(0, 0);

        this.textPlay3.setInteractive().on('pointerdown', () => {
            nextRound3 = 0;
            numberOfPlay = 4;
            number = 3;
            status3 = 0;
            const3 = 570;
            time3 = 0;
            this.scene.start('Scene3');

        });

        this.input.on('gameobjectover', function (pointer, gameObject) {

            gameObject.setTint(0xE973CF);

        });

        this.input.on('gameobjectout', function (pointer, gameObject) {

            gameObject.clearTint();
            
        });

    }
     
    update() {
    }
}