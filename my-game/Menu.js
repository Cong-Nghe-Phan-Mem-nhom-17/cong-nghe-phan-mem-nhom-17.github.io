

class Menu extends Phaser.Scene {
    constructor() {
        super('Menu')
    }

    preload() {
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('frameMenu', 'assets/images/frameMenu.png')
        this.load.image('play1', 'assets/images/play1.png')
        this.load.image('play2', 'assets/images/play2.png')
        this.load.image('play3', 'assets/images/play3.png')
        this.load.audio('audioBelow', 'assets/audio/below.mp3')
    }
    create(){
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameMenu").setOrigin(0, 0);
        // this.audioBelow = this.add.audio('audioBelow')
         

        this.text0 = this.add.text(350, 200, "CHOOSE A GAME TO PLAY!", {font: "50px Arial", fill: "red"}).setOrigin(0, 0);

        this.play1 = this.add.sprite(350, 300, 'play1').setOrigin(0,0)
        this.play2 = this.add.sprite(650, 300, 'play2').setOrigin(0,0)
        this.play3 = this.add.sprite(950, 300, 'play3').setOrigin(0,0)

       
       // this.play2.setInteractive().on('pointerdown', () => this.audioBelow.play());

        this.play1.setInteractive().on('pointerdown', () => {
            _const1 = 360;
            ballNumber1 = 9;
            status1 = 0;
            this.scene.start('Scene1')
        })

        this.play2.setInteractive().on('pointerdown', () => {
            _const2 = 360;
            ballNumber2 = 9;
            status2 = 0;
            this.scene.start('Scene2')
        })

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