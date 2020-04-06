let _const = 360;
let ballNumber = 9;
let status = 0;

class Scene2 extends Phaser.Scene{

    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('frameWork', "assets/images/frameWork.png")
        this.load.image('redBall', 'assets/images/redBall.png')
        this.load.image('nextButton', 'assets/images/nextButton.png')
        this.load.image('tree', 'assets/images/79.png')
        this.load.image('cat', 'assets/images/cat.png')
        this.load.image('bird', 'assets/images/bird.png')
        this.load.image('squirrel', 'assets/images/squirrel.png')
}   

    create(){
        // Object of the game;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);
        this.tree = this.add.image(250, 270, "tree").setOrigin(0, 0);
        this.cat = this.add.image(250, 220, "cat").setOrigin(0, 0);
        this.bird = this.add.image(340, 560, "bird").setOrigin(0, 0);
        this.squirrel = this.add.image(350, 400, "squirrel").setOrigin(0, 0);


        // ball;
        var arr = new Array("redBall");
        for(var i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(_const += 70, 137, "redBall").setOrigin(0, 0);
        }
        
        // Answers
        this.text1 = this.add.text(550, 250, "Which one is true?" + "\n", {font: "50px Arial", fill: "black"});

        //Button
        const helloButton1 = this.add.text(550, 350, 'The cat is above the squirrel', {font: "40px Arial", fill: "#black" });
        helloButton1.setInteractive();

        const helloButton2 = this.add.text(550, 450, 'The cat is below the squirrel', {font: "40px Arial", fill: "#black" });
        helloButton2.setInteractive();
        
    }
    update(){

    }

}