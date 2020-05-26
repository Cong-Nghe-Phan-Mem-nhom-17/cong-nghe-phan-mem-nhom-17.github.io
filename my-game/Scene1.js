//var scene 1
let const1 = 360; 
let constX = 1045;
let number1 = 9;
let x1 = 65;
let ballNumber1 = 9;
let status1 = 0;
let next1 = 0;
let nextRound1 = 0;
let time1 = 0;

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
let gameObject1; // Object to compare
let nameBug; // name bug 
let nameObject; // name object

let speak1; // name speak audio
let putAudio; 
let correctAudio;
let wrongAudio;
let clickAudio;

class Scene1 extends Phaser.Scene{

    constructor() {
        super('Scene1');
    }

    //load image and audio;
    preload() {
        // load image background;
        this.load.image('backGround', 'assets/images/imageBackground/backGround.png');
        this.load.image('frameWork', "assets/images/imageBackground/frameWork.png");
        this.load.image('dragon', 'assets/images/imageOutside/dragon.png');

        // load image button;
        this.load.image('buttonAbove', 'assets/images/imageButton/buttonAbove.png');
        this.load.image('effectTrueAbove', 'assets/images/imageButton/effectTrueAbove.png');
        this.load.image('effectFalseAbove', 'assets/images/imageButton/effectFalseAbove.png');
        this.load.image('buttonBelow', 'assets/images/imageButton/buttonBelow.png');
        this.load.image('effectTrueBelow', 'assets/images/imageButton/effectTrueBelow.png');
        this.load.image('effectFalseBelow', 'assets/images/imageButton/effectFalseBelow.png');
        this.load.image('backButton', 'assets/images/imageButton/backButton.png');
        this.load.image('lesson', 'assets/images/imageButton/lesson.png');

        // load image audio;
        this.load.image('speak 1', 'assets/images/imageAudio/speak 1.png');

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

        // Load audio
        this.load.audio('above','assets/audio/audioScene1/above.mp3')
        this.load.audio('below','assets/audio/audioScene1/below.mp3')
        this.load.audio('clickAbove','assets/audio/audioScene1/clickAbove.mp3')
        this.load.audio('clickBelow','assets/audio/audioScene1/clickBelow.mp3')
        this.load.audio('putBAM','assets/audio/audioScene1/putBeeAboveMouse.mp3')
        this.load.audio('putBBM','assets/audio/audioScene1/putBeeBelowMouse.mp3')
        this.load.audio('putBAF','assets/audio/audioScene1/putBugAboveFrog.mp3')
        this.load.audio('putBBF','assets/audio/audioScene1/putBugBelowFrog.mp3')
        this.load.audio('putBAC','assets/audio/audioScene1/putButterflyAboveChicken.mp3')
        this.load.audio('putBBC','assets/audio/audioScene1/putButterflyBelowChicken.mp3')
        this.load.audio('putWAB','assets/audio/audioScene1/putWormAboveBird.mp3')
        this.load.audio('putWAT','assets/audio/audioScene1/putWormAboveTurtle.mp3')
        this.load.audio('putWBT','assets/audio/audioScene1/putWormBelowTurtle.mp3')
        this.load.audio('wrong', 'assets/audio/audioScene1/wrong.mp3')
        this.load.audio('wrong1', 'assets/audio/audioScene1/wrong1.mp3')
    }

    //create game;
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
            arr[i] = this.add.image(const1 += x1, 137, "redBall").setOrigin(0, 0);
        }

        // add text;
        clickAudio = this.sound.add('clickAbove')
        this.text1 = this.add.text(800, 350, "\t\t\t\t" + "Click Above " + "\n" + "The Strange Creature.", {
            font: "50px Arial", 
            fill: "black"
        });

        this.displayResult = this.add.text(250, 350, "Result", {
            font: "50px Arial", 
            fill: "black"
        });

        this.textTime = this.add.text(1150, 150, "00:00",{
            font: "30px Arial",
            fill: "red"
        }).setOrigin(0, 0);

        // add image audio;
        speak1 = this.add.image(825, 375, 'speak 1');
        speak1.setInteractive({cursor:'pointer'}).on('pointerdown', () =>{
            clickAudio.play()
        });

        // set onClick for the buttons;
        this.buttonAbove.setInteractive({cursor:'pointer'}).on('pointerdown', () => {
            this.eventClickButtonAbove(arr[ballNumber1 - 1])
        });

        this.buttonBelow.setInteractive({cursor:'pointer'}).on('pointerdown', () => {
            this.eventClickButtonBelow(arr[ballNumber1 - 1])
        });
        
        this.backButton.setInteractive({cursor:'pointer'}).on('pointerdown', () => this.scene.start('Menu'));

        //effect of sprites;
        this.input.on('gameobjectover', function (pointer, gameObject) { gameObject.setTint(0x8EEDE2); });

        this.input.on('gameobjectout', function (pointer, gameObject) { gameObject.clearTint(); });
        
        this.countTime();
    }

    //Handle events when click button above;
    eventClickButtonAbove(ball){
        if(status1 == 0){
            clickAudio.destroy()
            correctAudio = this.sound.add('above')
            correctAudio.play()
            this.effectTrueAbove = this.add.image(233, 225, "effectTrueAbove").setOrigin(0, 0);
            this.drawIsCorrect(true, 1)

            timedEvent1 = this.time.delayedCall(2000, function Correct() {
                correctAudio.destroy()

                this.effectTrueAbove.destroy();
                abv.setText("");
                this.displayResult.setText("Result");
                status1 = this.randomQuestion();
                if (ballNumber1 == 5) {
                    this.destroyObject();
                    this.handleNextFrameGame();
                }
            }, [], this);
        }
        else{
            this.effectFalseAbove = this.add.image(233, 225, "effectFalseAbove").setOrigin(0, 0);
            this.drawIsCorrect(false, 1)
            wrongAudio = this.sound.add('wrong')
            wrongAudio.play()
            timedEvent1 = this.time.delayedCall(2000, function wrong() {
                wrongAudio.destroy()
                this.effectFalseAbove.destroy();
                this.buttonBelow.visible = true;
                this.buttonAbove.visible = true;
                this.displayResult.setText("Result");
                speak1.visible = true 
                this.text1.setText("\t\t\t\t" + "Click Below \nThe Strange Creature.")
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
            clickAudio.destroy()
            correctAudio = this.sound.add('below')
            correctAudio.play()
            this.effectTrueBelow = this.add.image(233, 525, "effectTrueBelow").setOrigin(0, 0);
            this.drawIsCorrect (true, 0)

            timedEvent1 = this.time.delayedCall(2000, function correct() {
                correctAudio.destroy()
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
            wrongAudio = this.sound.add('wrong')
            wrongAudio.play()
            timedEvent1 = this.time.delayedCall(2000, function wrong() {
                wrongAudio.destroy()
                this.effectFalseBelow.destroy();
                this.buttonBelow.visible = true;
                this.buttonAbove.visible = true;
                this.displayResult.setText("Result")
                speak1.visible = true 
                this.text1.setText("\t\t\t\t" + "Click Above \nThe Strange Creature.")
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
        speak1.visible = false
        if (isCorrect == false){
            this.displayResult.setText("Wrong!");
            if (text == 1)
                this.text1.setText("Below Below Below!");
            if (text == 0)   
                this.text1.setText("Above Above Above!");
        }
        else{
            this.displayResult.setText("Correct!");
            nextRound1 = 1;
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
        this.text1.setText( "Next question.");
        if (ballNumber1 > 5){
            timedEvent1 = this.time.delayedCall(1000, function nextQuestion() {

                speak1.visible = true 
                this.buttonBelow.visible = true;
                this.buttonAbove.visible = true;

                if(temp == 1){
                    clickAudio = this.sound.add('clickBelow')
                    speak1.setInteractive().on('pointerdown', () =>{
                        clickAudio.play()
                    })
                    this.text1.setText( "\t\t\t\t" + "Click Below " + "\n" + "The Strange Creature.");
                }
                else{
                    clickAudio = this.sound.add('clickAbove')
                    speak1.setInteractive().on('pointerdown', () =>{
                        clickAudio.play()
                    })
                    this.text1.setText( "\t\t\t\t" + "Click Above " + "\n" + "The Strange Creature.");
                }
            }, [], this)
        }
        
        return temp;
    }

    //Destroy object to change frameGame;
    destroyObject(){
        speak1.destroy()
        this.buttonAbove.destroy();
        this.buttonAbove = null;
        this.buttonBelow.destroy();
        this.buttonBelow = null;
        this.text1.destroy();
        this.text1 = null;
        this.displayResult.destroy();
        this.displayResult = null;
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
        gameObject1.destroy();
        speak1.destroy();
        this.backButton.destroy()
    }

    //Handle game over when ballNumber == 0;
    handleGameOver(){
            this.deleteBall()
            this.destroyObject2();
            this.notification = this.add.text(475, 145, 'Well done! You completed the card!', {font: '35px Arial', fill: 'red'});
            this.dragon = this.add.image(625, 210, 'dragon').setOrigin(0, 0).setScale(0.35);
            var lesson = this.add.sprite(650, 610, 'lesson').setOrigin(0, 0);

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

    //Handle next frameGame when ballNumber == 5;
    handleNextFrameGame(){
        displayResult2 = this.add.text(250, 350, "Result!", {font: '50px Arial', fill: 'Black'});
        status1 = 0;
        speak1 = this.add.image(800, 325, 'speak 1');
        putAudio = this.sound.add('putWAB')
        speak1.setInteractive().on('pointerdown', () =>{
            putAudio.play()
        })
        wrongAudio = this.sound.add('wrong1')
        textQuestion2 = this.add.text(770, 300, '\t\t\t' + ' Put the worm into' + '\n' + '    Above the bird!', {font: '50px Arial', fill: "Black"});

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
            if ((gameObject.x >= 450 && gameObject.x <= 600  && gameObject.y >= 250 && gameObject.y <= 350 ) || (gameObject.x >= 650 && gameObject.x <= 800  && gameObject.y >= 250 && gameObject.y <= 350 )){
                if(status1 == 0){
                    speak1.visible = false 
                    displayResult2.setText('True!');
                    gameObject.input.enabled = false;
                    nextRound1 = 1;
                }
                else{
                    speak1.visible = false 
                    gameObject.input.enabled = true;
                    displayResult2.setText('False!');
                    textQuestion2.setText('\t\t' +'Below Below Below!');
                    wrongAudio.play()
                        gameObject.x = gameObject.input.dragStartX;
                        gameObject.y = gameObject.input.dragStartY;
                }
            }
            
            else if ((gameObject.x >= 450 && gameObject.x <= 600 && gameObject.y >= 540 && gameObject.y <= 640 ) || (gameObject.x >= 650 && gameObject.x <= 800 && gameObject.y >= 540 && gameObject.y <= 640 )){
                if(status1 == 1){
                    gameObject.input.enabled = false;
                    displayResult2.setText('True!');
                    nextRound1 = 1;
                    speak1.visible = false 
                }
                else{
                    speak1.visible = false 
                    gameObject.input.enabled = true;
                    displayResult2.setText('False!');
                    textQuestion2.setText('\t\t' +'Above Above Above!');
                    wrongAudio.play()
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
    randomQuestion1() {
        var temp2 = Phaser.Math.Between(0, 1);
        speak1.visible = true 
        if(temp2 == 0){
            textQuestion2.setText('\t\t\t' + ' Put the ' + nameBug + ' into' + '\n' + '    Above the ' + nameObject + '!');
        }
        else{
            textQuestion2.setText('\t\t\t' + ' Put the ' + nameBug + ' into' + '\n' + '    Below the ' + nameObject + '!');
        }
        return temp2;
    }

    //Change object after ans true;
    changeObject(){
        if(next1){
            next1 = 0
            if(ballNumber1 == 4){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("bee", "mouse", 'img1');
                    if(status1){
                        putAudio = this.sound.add('putBBM')
                    } else {
                        putAudio = this.sound.add('putBAM')
                    }
                    speak1.setInteractive().on('pointerdown', () =>{
                        putAudio.play()
                    })
                }, [], this)
            } else
            if(ballNumber1 == 3){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("butterfly", "chicken", 'img2');
                    if(status1){
                        putAudio = this.sound.add('putBBC')
                    } else {
                        putAudio = this.sound.add('putBAC')
                    }
                    speak1.setInteractive().on('pointerdown', () =>{
                        putAudio.play()
                    })
                }, [], this)
            } else
            if(ballNumber1 == 2){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("bug", "frog", 'img3');
                    if(status1){
                        putAudio = this.sound.add('putBBF')
                    } else {
                        putAudio = this.sound.add('putBAF')
                    }
                    speak1.setInteractive().on('pointerdown', () =>{
                        putAudio.play()
                    })
                }, [], this)
            } else
            if(ballNumber1 == 1){
                timedEvent1 = this.time.delayedCall(2000, function next (){
                    this.drawImage("worm", "turtle", 'img4');
                    if(status1){
                        putAudio = this.sound.add('putWBT')
                    } else {
                        putAudio = this.sound.add('putWAT')
                    }
                    speak1.setInteractive().on('pointerdown', () =>{
                        putAudio.play()
                    })
                }, [], this)
            }
        }
    }

    //drawImage part2;
    drawImage (bug, object, img) {
        nameBug = bug
        nameObject = object
        this.clearTint1()
        imageBug.destroy()
        if(ballNumber1 == 4) {
            this.bird.destroy()
            this.bird = null
        }
        else    
            gameObject1.destroy()

        displayResult2.setText("Result!")
        status1 = this.randomQuestion1()
        gameObject1 = this.add.image(550,  370, object).setOrigin(0, 0)
        imageBug = this.add.image(1020, 530, img, Phaser.Math.RND.pick(this.framework)).setInteractive()
        this.input.setDraggable(imageBug)
    }

    //Move on ball when client click true;
    animationBall(){
        var varX = constX - (number1 - ballNumber1) * x1
        if(nextRound1){
        
            if(arr[ballNumber1 - 1].x < varX){
                arr[ballNumber1 - 1].x += 1.5
            } else {
                nextRound1 = 0
                ballNumber1 --
                if(ballNumber1 < 5){
                    next1 = 1
                } 
            }
            
        }
    }

    //Remove effect;
    clearTint1(){
        zone1.clearTint();
        zone2.clearTint();
        zone3.clearTint();
        zone4.clearTint();
    }

    //Delete ball;
    deleteBall(){
        for(var i = 0;i < number1; i++){
            arr[i].destroy()
        }
    }

    countTime(){
        var timedEvent = this.time.addEvent({
            delay: 1000,
            callback:  () => {
                time1 ++;
                var sec = Math.floor(time1 % 60);
                if(sec < 10){
                    sec = "0" + sec; 
                }
                var min = Math.floor((time1 / 60) % 60); 
                if(min < 10){
                    min = "0" + min
                }
                this.textTime.setText(min + ":" + sec);
                if(ballNumber1===0){
                    timedEvent.remove(true)
                    console.log(ballNumber1)
                }
            },
            callbackScope: this,
            loop: true
        });
       
    }

    //Update;
    update(){
        if(ballNumber1 == 0){
            timedEvent1 = this.time.delayedCall(1500, function endGame(){
                if(speak1 != null) speak1.destroy();
                this.handleGameOver()
            }, [], this)
        };
        this.changeObject();
        this.animationBall();
    }

}

