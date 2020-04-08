let ball;
let arrNumberOfPlay;
let _const3 = 200;
let number = 3;
let status3 = 0;
let displayResult;
let textQuestion3;
let imag1;
let ballNumber3 = 4;

class Scene3 extends Phaser.Scene{

    constructor() {

        super('Scene3');

    }

    preload() {
        // load image background;
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('frameWork', 'assets/images/frameWork.png')
        this.load.image('castle', "assets/images/castle.png")

        // load image button;
        this.load.image('backButton', 'assets/images/backButton.png')

        // load image object;
        this.load.image('redBall', 'assets/images/redBall.png')
        this.load.image('numberOfPlay', "assets/images/numberOfPlay.png")
        this.load.image('img1', 'assets/images/img1.png')
        this.load.image('zonePutWindow', 'assets/images/zonePutWindow.png');
    }

    create(){
        // add image background and framework;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);
        this.castle = this.add.image(335, 200, "castle").setOrigin(0, 0);

        // add image button;
        this.backButton = this.add.sprite(245, 117, 'backButton').setOrigin(0,0);

        // add image object;
        imag1 = this.add.image(1150, 550, 'img1', Phaser.Math.RND.pick(this.framework));
        ball = this.add.image(430, 137, "redBall").setOrigin(0, 0);

        arrNumberOfPlay = new Array("numberOfPlay");

        for(let i = 0; i < number; i++){
            arrNumberOfPlay[i] = this.add.image(1200, _const3 += 70, "numberOfPlay").setOrigin(0, 0);
        }

        // add text;
        textQuestion3 = this.add.text(450, 620, "Place the bee BELOW the window", {font: "35px Arial", fill: "black"})
        displayResult = this.add.text(250, 350, "Result!", {font: "50px Arial", fill: "black"});

        // set onClick for the buttons;
        this.backButton.setInteractive().on('pointerdown', () => {

            this.scene.start('Menu')

        });

        this.input.on('gameobjectover', function(pointer, gameObject) {
            
            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })
        imag1.setInteractive();
        this.input.setDraggable(imag1);

        var zone1 = this.add.image(575, 325, 'zonePutWindow').setInteractive();
        var zone2 = this.add.image(920, 325, 'zonePutWindow').setInteractive();
        var zone3 = this.add.image(575, 550, 'zonePutWindow').setInteractive();
        var zone4 = this.add.image(920, 550, 'zonePutWindow').setInteractive();


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

            if (gameObject.x >= 500 && gameObject.x <= 640  && gameObject.y >= 255 && gameObject.y <= 395 )
                zone1.setTint(0x00ff00);
            else if (gameObject.x >= 850 && gameObject.x <= 990  && gameObject.y >= 255 && gameObject.y <= 395)
                zone2.setTint(0x00ff00);
            else if (gameObject.x >= 500 && gameObject.x <= 640 && gameObject.y >= 475 && gameObject.y <= 595)
                zone3.setTint(0x00ff00);
            else if (gameObject.x >= 850 && gameObject.x <= 990 && gameObject.y >= 475 && gameObject.y <= 595 )
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
            if (gameObject.x >= 500 && gameObject.x <= 640  && gameObject.y >= 255 && gameObject.y <= 395 ){
                if(status3 == 0){
                    displayResult.setText("Correct!");
                    status3 = randomQuestion();
                    zone1.destroy();
                    zone1 = null;
                    gameObject.input.enabled = false;
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Below Below Below!');
                    gameObject.x = 1150;
                    gameObject.y = 550;
                }
            }
            else if (gameObject.x >= 850 && gameObject.x <= 990  && gameObject.y >= 255 && gameObject.y <= 395){
                if(status3 == 0){
                    displayResult.setText("Correct!");
                    status3 = randomQuestion();
                    zone2.destroy();
                    zone2 = null;
                    gameObject.input.enabled = false;
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Below Below Below!');
                    gameObject.x = 1150;
                    gameObject.y = 550;
                }
            }
            else if (gameObject.x >= 500 && gameObject.x <= 640 && gameObject.y >= 475 && gameObject.y <= 595){
                if(status3 == 1){
                    displayResult.setText("Correct!");
                    status3 = randomQuestion();
                    zone3.destroy();
                    zone3 = null;
                    gameObject.input.enabled = false;
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Above Above Above!');
                    gameObject.x = 1150;
                    gameObject.y = 550;
                }
            }
            else if (gameObject.x >= 850 && gameObject.x <= 990 && gameObject.y >= 475 && gameObject.y <= 595 ){
                if(status3 == 1){
                    displayResult.setText("Correct!");
                    status3 = randomQuestion();
                    zone4.destroy();
                    zone4 = null;
                    gameObject.input.enabled = false;
                }
                else{
                    displayResult.setText("Wrong!");
                    textQuestion3.setText('Above Above Above!');
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
            var temp = Phaser.Math.Between(0, 1);
            if(temp == 0){
                textQuestion3.setText("Place the bee ABOVE the window");
            }
            else{
                textQuestion3.setText("Place the bee BELOW the window");
            }
            return temp;
        }

        function destroyobject2() {
            displayResult2.destroy();
            displayResult2 = null;
            imageBug.destroy();
            imageBug = null;
            textQuestion2.destroy();
            textQuestion2 = null;
            zone1.destroy();
            zone1 = null;
            zone2.destroy();
            zone2 = null;
            zone3.destroy();
            zone3 = null;
            zone4.destroy();
            zone4 = null;
        }
    }

    update(){
        // this.input.on('pointerup', () =>{
        //     imag1 = this.add.image(1150, 550, 'img1', Phaser.Math.RND.pick(this.framework));
        //     imag1.setInteractive();
        //     this.input.setDraggable(imag1);
        // })
    }

}

