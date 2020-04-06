let _const2=360;
let ballNumber2 = 9;
let status2 = 0;


class Scene2 extends Phaser.Scene{

    constructor() {
        super('Scene2');
    }

    preload() {
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('frameWork', 'assets/images/frameWork.png')
        this.load.image('redBall', 'assets/images/redBall.png')
        this.load.image('nextButton', 'assets/images/nextButton.png')
        this.load.image('cat', 'assets/images/cat.png')
        this.load.image('bird', 'assets/images/bird.png')
        this.load.image('backButton', 'assets/images/backButton.png')
        
        this.load.image('tree', 'assets/images/79.png')
        this.load.image('squirrel', 'assets/images/squirrel.png')

        //button
        this.load.image('ok1', 'assets/images/ok1.png')
        this.load.image('ok2', 'assets/images/ok2.png')
    }   

    create(){
        // Object of the game;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);
        this.tree = this.add.image(250, 270, "tree").setOrigin(0, 0);
        this.cat = this.add.image(250, 230, "cat").setOrigin(0, 0);
        this.bird = this.add.image(340, 560, "bird").setOrigin(0, 0);
        this.squirrel = this.add.image(350, 400, "squirrel").setOrigin(0, 0);

        this.ok1 = this.add.image(1105, 362, "ok1").setOrigin(0, 0);
        this.ok1 = this.add.image(1105, 420, "ok1").setOrigin(0, 0);

        //this.ok2 = this.add.image(1105, 362, "ok2").setOrigin(0, 0);

        this.backButton = this.add.sprite(245, 117, 'backButton').setOrigin(0,0);

        this.backButton.setInteractive().on('pointerdown', () => this.scene.start('Menu'))

        this.input.on('gameobjectover', function(pointer, gameObject){
            gameObject.setTint(0x8EEDE2);
        })

        this.input.on('gameobjectout', function(pointer, gameObject){
            gameObject.clearTint();
        })



        // ball;
        var arr = new Array("redBall");
        for(var i = 0; i < ballNumber2; i++){
            arr[i] = this.add.image(_const2 += 70, 137, "redBall").setOrigin(0, 0);
        }
        
        // Answers
        this.text1 = this.add.text(630, 270, "Which one is true?" + "\n", {font: "50px Arial", fill: "black"});

        //Button
        const helloButton1 = this.add.text(590, 360, 'The cat is above the squirrel.', {font: "40px Arial", fill: "#black" });
        helloButton1.setInteractive();

        const helloButton2 = this.add.text(590, 420, 'The cat is below the squirrel.', {font: "40px Arial", fill: "#black" });
        helloButton2.setInteractive();
        
    }
    update(){

    }

}