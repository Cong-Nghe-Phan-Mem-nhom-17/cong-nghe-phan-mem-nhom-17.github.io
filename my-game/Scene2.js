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
        this.load.image('backButton', 'assets/images/backButton.png')

        this.load.image('cat', 'assets/images/cat.png')
        this.load.image('bird', 'assets/images/bird.png')
        this.load.image('tree', 'assets/images/79.png')
        this.load.image('squirrel', 'assets/images/squirrel.png')

        this.load.image('mouse', 'assets/images/mouse.png')

        //button
        this.load.image('ok1', 'assets/images/ok1.png')
        this.load.image('ok2', 'assets/images/ok2.png')
    }   

    create(){
        // Object of the game;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);

        this.backButton = this.add.sprite(245, 117, 'backButton').setOrigin(0,0);

        this.backButton.setInteractive().on('pointerdown', () => this.scene.start('Menu'))

        this.input.on('gameobjectover', function(pointer, gameObject){
            gameObject.setTint(0x8EEDE2);
        })

        this.input.on('gameobjectout', function(pointer, gameObject){
            gameObject.clearTint();
        })

        // ball;
        arr = new Array("redBall");
        for(var i = 0; i < ballNumber2; i++){
            arr[i] = this.add.image(_const2 += 70, 137, "redBall").setOrigin(0, 0);
        }

       
        this.phase_1()

    }

    phase_1() {

        this.tree = this.add.image(250, 250, "tree").setOrigin(0, 0);
        this.cat = this.add.sprite(250, 230, "cat").setOrigin(0, 0);
        this.bird = this.add.sprite(340, 545, "bird").setOrigin(0, 0).setAlpha(0.5);
        this.squirrel = this.add.sprite(350, 400, "squirrel").setOrigin(0, 0);
        
        // Question
        this.text1 = this.add.text(630, 270, "Which one is true?" + "\n", {font: "50px Arial", fill: "black"});

        // Answers
        this.answer_1 = this.add.text(580, 360, 'The cat is above the squirrel.', {font: "40px Arial", fill: "black" });
        this.answer_1.setInteractive();

        this.answer_2 = this.add.text(580, 420, 'The cat is below the squirrel.', {font: "40px Arial", fill: "black" });
        this.answer_2.setInteractive();

        this.ok1 = this.add.sprite(1105, 362, "ok1").setOrigin(0, 0)

        this.ok1.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            this.ok1.destroy()
            this.ok2.destroy()
            this.phase_2()

        });

        this.ok2 = this.add.sprite(1105, 420, "ok2").setOrigin(0, 0);

        this.ok2.setInteractive().on('pointerdown', () => {

            this.ok2.setTint('red')

        })

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })


    }

    phase_2(){
        
        this.cat.setAlpha(0.5)
        this.bird.setAlpha(1)
        this.answer_1.setText('The squirrel is below the bird.');
        this.answer_2.setText('The squirrel is above the bird.'); 

        var ok1 = this.add.sprite(1105, 362, "ok1").setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {

            ok1.setTint('red')

        })

        var ok2 = this.add.sprite(1105, 420, "ok2").setOrigin(0, 0);

       
        ok2.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            ok1.destroy()
            ok2.destroy()
            this.phase_3()

        });

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })

    }

    phase_3() {

        this.cat.setAlpha(1)
        this.squirrel.setAlpha(0.5)
        this.answer_1.setText('The bird is above the cat.');
        this.answer_2.setText('The bird is below the cat.'); 

        var ok1 = this.add.sprite(1105, 362, "ok1").setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {

            ok1.setTint('red')

        })

        var ok2 = this.add.sprite(1105, 420, "ok2").setOrigin(0, 0);

       
        ok2.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            ok1.destroy()
            ok2.destroy()
            this.tree.destroy()
            this.cat.destroy()
            this.squirrel.destroy()
            this.bird.destroy()
            // this.phase_4()

        });

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })

    }

    phase_4() {

        
    }
    
    destroyBall(){

        arr[ballNumber2 - 1].destroy()
        ballNumber2 --

    }

    update() {

        
    }

}