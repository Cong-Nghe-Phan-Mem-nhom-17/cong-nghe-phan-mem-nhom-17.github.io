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
    }
    create(){

        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameMenu").setOrigin(0, 0);

        this.play1 = this.add.sprite(233, 225, 'play1').setOrigin(0,0)
        this.play2 = this.add.sprite(466, 225, 'play2').setOrigin(0,0)
        this.play3 = this.add.sprite(699, 225, 'play3').setOrigin(0,0)

        this.play1.setInteractive().on('pointerdown', () => this.scene.start('Scene2'))

    }

    update() {

    }
}