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
let timedEvent1;
let abv;
let blw;
let next1 = 0;
let gameobject;

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
        this.load.image('effectTrueAbove', 'assets/images/effectTrueAbove.png');
        this.load.image('effectFalseAbove', 'assets/images/effectFalseAbove.png');
        this.load.image('buttonBelow', 'assets/images/buttonBelow.png');
        this.load.image('effectTrueBelow', 'assets/images/effectTrueBelow.png');
        this.load.image('effectFalseBelow', 'assets/images/effectFalseBelow.png');
        this.load.image('nextButton', 'assets/images/nextButton.png');
        this.load.image('backButton', 'assets/images/backButton.png');
        this.load.image('lesson', 'assets/images/lesson.png');


        // load image object;
        this.load.image('imageBird', 'assets/images/imageBird.png');
        this.load.image('mouse', 'assets/images/mouse.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('frog', 'assets/images/frog.png');
        this.load.image('turtle', 'assets/images/turtle.png');
        this.load.image('redBall', 'assets/images/redBall.png');
        this.load.image('img1', 'assets/images/img1.png');
        this.load.image('img2', 'assets/images/img2.png');
        this.load.image('img3', 'assets/images/img3.png');
        this.load.image('img4', 'assets/images/img4.png');
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

        // add image object;
        this.bird = this.add.image(420, 340, "imageBird").setOrigin(0, 0);

        arr = new Array("redBall");
        for(let i = 0; i < ballNumber1; i++){
            arr[i] = this.add.image(_const1 += 70, 137, "redBall").setOrigin(0, 0);
        }

        // add text;
        this.text1 = this.add.text(800, 350, "Click Above " + "\n" + "The Strange Creature", {font: "50px Arial", fill: "black"});
        this.displayResult = this.add.text(250, 350, "Result", {font: "50px Arial", fill: "black"});

        // set onClick for the buttons;
        
            this.buttonAbove.setInteractive().on('pointerdown', () => { 
                    this.eventClickButtonAbove(arr[ballNumber1 - 1])
            });

            this.buttonBelow.setInteractive().on('pointerdown', () => {
                    this.eventClickButtonBelow(arr[ballNumber1 - 1])
            });
        
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
            this.effectTrueAbove = this.add.image(233, 225, "effectTrueAbove").setOrigin(0, 0);
            this.children.bringToTop(this.bird);
            this.displayResult.setText("Correct!");

            abv = this.add.text(440, 275, 'ABOVE', {font: '50px Arial', fill: 'black'});

            this.buttonBelow.visible = false;
            this.buttonAbove.visible = false;

            timedEvent1 = this.time.delayedCall(2000, function above() {
                this.deleteBall(ball);
                abv.setText("")
                this.displayResult.setText("Result");
                status1 = this.randomQuestion();
                this.effectTrueAbove.destroy();
                this.buttonBelow.visible = true;
                this.buttonAbove.visible = true;
                if (ballNumber1 == 5) {
                    this.destroyObject();
                    this.handleNextFrameGame();
                }
            }, [], this);
        }
        else{
            this.effectFalseAbove = this.add.image(233, 225, "effectFalseAbove").setOrigin(0, 0);
            this.children.bringToTop(this.bird);
            this.displayResult.setText("Wrong!");
            this.text1.setText("Below Below Below!");
            this.buttonBelow.visible = false;
            this.buttonAbove.visible = false;

            timedEvent1 = this.time.delayedCall(1000, function wrong() {
                this.effectFalseAbove.destroy();
                this.buttonBelow.visible = true;
                this.buttonAbove.visible = true;
                this.displayResult.setText("Result")
                this.text1.setText("Click Below \nThe Strange Creature")
            }, [], this)

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
            this.effectTrueBelow = this.add.image(233, 525, "effectTrueBelow").setOrigin(0, 0);
            this.children.bringToTop(this.bird);
            this.displayResult.setText("Correct!");
            this.deleteBall (ball);

            blw = this.add.text(440, 575, 'BELOW', {
                font: '50px Arial',
                fill: 'black'
            });
            this.buttonBelow.visible = false;
            this.buttonAbove.visible = false;

            timedEvent1 = this.time.delayedCall(2000, function below() {
                blw.setText("")
                this.displayResult.setText("Result")
                status1 = this.randomQuestion();
                this.effectTrueBelow.destroy();
                if(ballNumber1 == 5){
                    this.destroyObject();
                    this.handleNextFrameGame();
                } else {
                    this.buttonBelow.visible = true;
                    this.buttonAbove.visible = true;
                }
                
            }, [], this)
        }
        else{
            this.effectFalseBelow = this.add.image(233, 525, "effectFalseBelow").setOrigin(0, 0);
            this.children.bringToTop(this.bird);
            this.displayResult.setText("Wrong!");
            this.text1.setText("Above Above Above!");
            this.buttonBelow.visible = false;
            this.buttonAbove.visible = false;

            timedEvent1 = this.time.delayedCall(1000, function wrong() {
                this.effectFalseBelow.destroy();
                this.buttonBelow.visible = true;
                this.buttonAbove.visible = true;
                this.displayResult.setText("Result")
                this.text1.setText("Click Above \nThe Strange Creature")
            }, [], this)

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
        this.text1.setText( "The next question?");
        if (ballNumber1 > 5){
            timedEvent1 = this.time.delayedCall(1000, function wrong() {
                if(temp == 1){
                    this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
                }
                else{
                    this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
                }
            }, [], this)
        }
        else 
        {
            if(temp == 1){
                this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
            }
            else{
                this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
            }
        }
        
        return temp;
    }

    deleteBall (ball){
        ball.destroy();
        ball = null;
        ballNumber1--;
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
        displayResult2 = this.add.text(250, 350, "Result!", {font: '40px Arial', fill: 'Black'});
        status1 = 0;
        textQuestion2 = this.add.text(760, 350, ' Put the Bug into' + '\n' + ' Above the strange creature!', {font: '40px Arial', fill: "Black"});

        imageBug = this.add.image(1020, 530, 'imageBug', Phaser.Math.RND.pick(this.framework)).setInteractive();
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
            gameObject.clearTint()
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
            dropZone.clearTint()
        });

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            if (gameObject.x >= 450 && gameObject.x <= 600  && gameObject.y >= 250 && gameObject.y <= 350 ){
                if(status1 == 0){
                    displayResult2.setText('True!');
                    deleteBall (arr[ballNumber1 - 1]);
                    next1 = 1;
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Below Below '+ '\n' +'Below!');
                        gameObject.x = gameObject.input.dragStartX;
                        gameObject.y = gameObject.input.dragStartY;
                }
            }
            else if (gameObject.x >= 650 && gameObject.x <= 800  && gameObject.y >= 250 && gameObject.y <= 350 ){
                if(status1 == 0){
                    displayResult2.setText('True!');
                    deleteBall (arr[ballNumber1 - 1]);
                    next1 = 1;
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Below Below '+ '\n' +'Below!');
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                }
            }
            else if (gameObject.x >= 450 && gameObject.x <= 600 && gameObject.y >= 540 && gameObject.y <= 640 ){
                if(status1 == 1){
                    displayResult2.setText('True!');
                    deleteBall (arr[ballNumber1 - 1]);
                    next1 = 1;
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Above Above '+ '\n' +'Above!');
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                }
            }
            else if (gameObject.x >= 650 && gameObject.x <= 800 && gameObject.y >= 540 && gameObject.y <= 640 ){
                if(status1 == 1){
                    displayResult2.setText('True!');
                    deleteBall (arr[ballNumber1 - 1]);
                    next1 = 1;
                }
                else{
                    displayResult2.setText('False!');
                    textQuestion2.setText('Above Above '+ '\n' +'Above!');
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                }
            }
            else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });

        function deleteBall(ball){
            ball.destroy();
            ball = null;
            ballNumber1--;
        }
        
    }

    randomQuestion_1() {
        var temp2 = Phaser.Math.Between(0, 1);
        if(temp2 == 0){
            textQuestion2.setText('Put the Bug into' + '\n' + 'Above the strange creature!');
        }
        else{
            textQuestion2.setText('Put the Bug into' + '\n' + 'Below the strange creature!');
        }
        return temp2;
    }
    
    destroyObject2(){
        displayResult2.destroy();
        imageBug.destroy();
        textQuestion2.destroy();
        zone1.destroy();
        zone2.destroy();
        zone3.destroy();
        zone4.destroy();
        gameobject.destroy();
        this.backButton.destroy()
    }

    changeObject(){
        if(next1){
            next1 = 0
            if(ballNumber1 == 4){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.clear_tint()
                    imageBug.destroy()
                    this.bird.destroy()
                    this.bird = null
                    displayResult2.setText("Result!")
                    status1 = this.randomQuestion_1();
                    gameobject = this.add.image(550, 370, 'mouse').setOrigin(0, 0)
                    imageBug = this.add.image(1020, 530, 'img1', Phaser.Math.RND.pick(this.framework)).setInteractive()
                    this.input.setDraggable(imageBug)
                }, [], this)
            } else
            if(ballNumber1 == 3){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.clear_tint()
                    imageBug.destroy()
                    gameobject.destroy()
                    displayResult2.setText("Result!")
                    status1 = this.randomQuestion_1()
                    gameobject = this.add.image(550,  370, 'chicken').setOrigin(0, 0)
                    imageBug = this.add.image(1020, 530, 'img2', Phaser.Math.RND.pick(this.framework)).setInteractive()
                    this.input.setDraggable(imageBug)
                }, [], this)
            } else
            if(ballNumber1 == 2){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.clear_tint()
                    imageBug.destroy()
                    gameobject.destroy()
                    displayResult2.setText("Result!")
                    status1 = this.randomQuestion_1()
                    gameobject = this.add.image(550,  370, 'frog').setOrigin(0, 0)
                    imageBug = this.add.image(1020, 530, 'img3', Phaser.Math.RND.pick(this.framework)).setInteractive()
                    this.input.setDraggable(imageBug)
                }, [], this)
            } else
            if(ballNumber1 == 1){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.clear_tint()
                    imageBug.destroy()
                    gameobject.destroy()
                    displayResult2.setText("Result!")
                    status1 = this.randomQuestion_1()
                    gameobject = this.add.image(550,  370, 'turtle').setOrigin(0, 0)
                    imageBug = this.add.image(1020, 530, 'img4', Phaser.Math.RND.pick(this.framework)).setInteractive()
                    this.input.setDraggable(imageBug)
                }, [], this)
            }
        }
    }

    clear_tint() {
        zone1.clearTint()
        zone2.clearTint()
        zone3.clearTint()
        zone4.clearTint()
    }

    update(){
        this.handleGameOver();
        this.changeObject()
    }

}

