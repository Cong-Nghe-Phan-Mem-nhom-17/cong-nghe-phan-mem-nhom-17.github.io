//var scene 1
let _const1 = 360; 
let _const_x = 1045;
let _number = 9;
let _x = 65;
let ballNumber1 = 9;
let status1 = 0;
let next1 = 0;
let next_round1 = 0;

let imageBug; // image bug
let displayResult2; // display result phase 2 
let textQuestion2; // question phase 2
let arr; // display ball

// zone to drag and drop
let zone1; 
let zone2;
let zone3;
let zone4;

let timedEvent1; // time event
let abv; // display above phase 1
let blw; // display below phase 1
let gameobject; // Object to compare
let nameBug; // name bug 
let nameObject; // name object

class Scene1 extends Phaser.Scene{

    constructor() {
        super('Scene1');
    }

    preload() {
        // load image background;
        this.load.image('backGround', 'assets/images/imageBackground/backGround.png');
        this.load.image('frameWork', "assets/images/imageBackground/frameWork.png");

        // load image button;
        this.load.image('buttonAbove', 'assets/images/imageButton/buttonAbove.png');
        this.load.image('effectTrueAbove', 'assets/images/imageButton/effectTrueAbove.png');
        this.load.image('effectFalseAbove', 'assets/images/imageButton/effectFalseAbove.png');
        this.load.image('buttonBelow', 'assets/images/imageButton/buttonBelow.png');
        this.load.image('effectTrueBelow', 'assets/images/imageButton/effectTrueBelow.png');
        this.load.image('effectFalseBelow', 'assets/images/imageButton/effectFalseBelow.png');
        this.load.image('backButton', 'assets/images/imageButton/backButton.png');
        this.load.image('lesson', 'assets/images/imageButton/lesson.png');

        // load image object;
        this.load.image('imageBird', 'assets/images/imageObject/imageBird.png');
        this.load.image('mouse', 'assets/images/imageObject/mouse.png');
        this.load.image('chicken', 'assets/images/imageObject/chicken.png');
        this.load.image('frog', 'assets/images/imageObject/frog.png');
        this.load.image('turtle', 'assets/images/imageObject/turtle.png');
        this.load.image('redBall', 'assets/images/imageObject/redBall.png');
        this.load.image('img1', 'assets/images/imageObject/img1.png');
        this.load.image('img2', 'assets/images/imageObject/img2.png');
        this.load.image('img3', 'assets/images/imageObject/img3.png');
        this.load.image('img4', 'assets/images/imageObject/img4.png');
        this.load.image('imageBug', 'assets/images/imageObject/imageBug.png');

        //load image zone;
        this.load.image('zonePut', 'assets/images/imageZone/zonePut.png');
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
            arr[i] = this.add.image(_const1 += _x, 137, "redBall").setOrigin(0, 0);
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
        this.input.on('gameobjectover', function (pointer, gameObject) { gameObject.setTint(0x8EEDE2); });

        this.input.on('gameobjectout', function (pointer, gameObject) { gameObject.clearTint(); });
    }

    //Handle events when click button above;
    eventClickButtonAbove(ball){
        if(status1 == 0){
            this.effectTrueAbove = this.add.image(233, 225, "effectTrueAbove").setOrigin(0, 0);
            this.drawIsCorrect(true, 1)

            timedEvent1 = this.time.delayedCall(2000, function Correct() {
                abv.setText("")
                this.displayResult.setText("Result");
                status1 = this.randomQuestion();
                this.effectTrueAbove.destroy();

                if (ballNumber1 == 5) {
                    this.destroyObject();
                    this.handleNextFrameGame();
                }
            }, [], this);
        }
        else{
            this.effectFalseAbove = this.add.image(233, 225, "effectFalseAbove").setOrigin(0, 0);
            this.drawIsCorrect(false, 1)
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

    

    //Handle events when click button below;
    eventClickButtonBelow(ball){
        if(status1 == 1){
            this.effectTrueBelow = this.add.image(233, 525, "effectTrueBelow").setOrigin(0, 0);
            this.drawIsCorrect (true, 0)
            timedEvent1 = this.time.delayedCall(2000, function correct() {
                blw.setText("")
                this.displayResult.setText("Result")
                status1 = this.randomQuestion();
                this.effectTrueBelow.destroy();

                if(ballNumber1 == 5){
                    this.destroyObject();
                    this.handleNextFrameGame();
                }
                
            }, [], this)
        }
        else{
            this.effectFalseBelow = this.add.image(233, 525, "effectFalseBelow").setOrigin(0, 0);
            this.drawIsCorrect (false, 0)
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

    //draw correct
    drawIsCorrect (isCorrect, text ){
        this.children.bringToTop(this.bird);
        if (isCorrect == false){
            this.displayResult.setText("Wrong!");
            if (text == 1)
                this.text1.setText("Below Below Below!");
            if (text == 0)   
                this.text1.setText("Above Above Above!");
        }
        else{
            this.displayResult.setText("Correct!");
            next_round1 = 1;
            if (text == 1)
                abv = this.add.text(440, 275, 'ABOVE', {font: '50px Arial', fill: 'black'});
            if (text == 0)   
                blw = this.add.text(440, 575, 'BELOW', {font: '50px Arial',fill: 'black'});
        }
        this.buttonBelow.visible = false;
        this.buttonAbove.visible = false;
        return 0;
    }

    //Random text question;
    randomQuestion(){
        var temp = Phaser.Math.Between(0, 1);
        this.text1.setText( "The next question?");
        if (ballNumber1 > 5){
            timedEvent1 = this.time.delayedCall(1000, function wrong() {
                this.buttonBelow.visible = true;
                this.buttonAbove.visible = true;

                if(temp == 1){
                    this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
                }
                else{
                    this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
                }
            }, [], this)
        }
        
        return temp;
    }

    //Destroy object to change frameGame;
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

    //Handle game over when ballNumber == 0;
    handleGameOver(){
            this.deleteBall()
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

    //Handle next framegame when ballNumber == 5;
    handleNextFrameGame(){
        displayResult2 = this.add.text(250, 350, "Result!", {font: '50px Arial', fill: 'Black'});
        status1 = 0;
        textQuestion2 = this.add.text(800, 350, ' Put the worm into' + '\n' + ' Above the bird!', {font: '50px Arial', fill: "Black"});

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
                clear_tint()
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
            if ((gameObject.x >= 450 && gameObject.x <= 600  && gameObject.y >= 250 && gameObject.y <= 350 ) || (gameObject.x >= 650 && gameObject.x <= 800  && gameObject.y >= 250 && gameObject.y <= 350 )){
                if(status1 == 0){
                    displayResult2.setText('True!');
                    gameObject.input.enabled = false;
                    next_round1 = 1;
                }
                else{
                    gameObject.input.enabled = true;
                    displayResult2.setText('False!');
                    textQuestion2.setText('Below Below '+ '\n' +'Below!');
                        gameObject.x = gameObject.input.dragStartX;
                        gameObject.y = gameObject.input.dragStartY;
                }
            }
            
            else if ((gameObject.x >= 450 && gameObject.x <= 600 && gameObject.y >= 540 && gameObject.y <= 640 ) || (gameObject.x >= 650 && gameObject.x <= 800 && gameObject.y >= 540 && gameObject.y <= 640 )){
                if(status1 == 1){
                    gameObject.input.enabled = false;
                    displayResult2.setText('True!');
                    next_round1 = 1;
                }
                else{
                    gameObject.input.enabled = true;
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

    }

    //Random text question;
    randomQuestion_1() {
        var temp2 = Phaser.Math.Between(0, 1);
        if(temp2 == 0){
            textQuestion2.setText('Put the ' + nameBug + ' into' + '\n' + 'Above the ' + nameObject + '!');
        }
        else{
            textQuestion2.setText('Put the ' + nameBug + ' into' + '\n' + 'Below the ' + nameObject + '!');
        }
        return temp2;
    }

    //Destroy object when game over;
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

    //Change object after ans true;
    changeObject(){
        if(next1){
            next1 = 0
            if(ballNumber1 == 4){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("bee", "mouse", 'img1')
                }, [], this)
            } else
            if(ballNumber1 == 3){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("butterfly", "chicken", 'img2')
                }, [], this)
            } else
            if(ballNumber1 == 2){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("bug", "frog", 'img3')
                }, [], this)
            } else
            if(ballNumber1 == 1){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("worm", "turtle", 'img4')
                }, [], this)
            }
        }
    }

    //drawImage
    drawImage (nameBug, object, bug) {
        nameBug = nameBug
        nameObject = object
        this.clear_tint()
        imageBug.destroy()
        if(ballNumber1 == 4) {
            this.bird.destroy()
            this.bird = null
        }
        else    
            gameobject.destroy()

        displayResult2.setText("Result!")
        status1 = this.randomQuestion_1()
        gameobject = this.add.image(550,  370, object).setOrigin(0, 0)
        imageBug = this.add.image(1020, 530, bug, Phaser.Math.RND.pick(this.framework)).setInteractive()
        this.input.setDraggable(imageBug)
    }

    //Clear effect of button;
    clear_tint() {
        zone1.clearTint()
        zone2.clearTint()
        zone3.clearTint()
        zone4.clearTint()
    }

    animationBall(){
        var var_x = _const_x - (_number - ballNumber1) * _x
        if(next_round1){
        
            if(arr[ballNumber1 - 1].x < var_x){
                arr[ballNumber1 - 1].x += 1.5
            } else {
                next_round1 = 0
                ballNumber1 --
                if(ballNumber1 <= 5){
                    next1 = 1
                } 
            }
            
        }
    }

    deleteBall(){
        for(var i = 0;i < _number; i++){
            arr[i].destroy()
        }
    }

    update(){
        if(ballNumber1 == 0){
            timedEvent1 = this.time.delayedCall(1500, function end_game(){
                this.handleGameOver()
            }, [], this)
        }
        this.changeObject();
        this.animationBall()
    }

}

