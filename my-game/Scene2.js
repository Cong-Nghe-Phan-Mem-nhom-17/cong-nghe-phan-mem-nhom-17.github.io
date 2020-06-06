let const2=360;
let constX2 = 1045;
let number2 = 9;
let x2 = 65;
let ballNumber2 = 9;
let status2 = 0;
let timedEvent2;
let nextRound2 = 0;
let time2 = 0;
let speak2;
let questionAudio;
let answerAudio1;
let answerAudio2;
let wrongAudio2;
let iconAudio1;
let iconAudio2;

class Scene2 extends Phaser.Scene{

    constructor() {
        super('Scene2');
    }

    preload() {
        //load image backGround, frameWork;
        this.load.image('backGround', 'assets/images/imageBackground/backGround.png');
        this.load.image('frameWork', 'assets/images/imageBackground/frameWork.png');

        //load image button;
        this.load.image('nextButton', 'assets/images/imageButton/nextButton.png');
        this.load.image('backButton', 'assets/images/imageButton/backButton.png');
        this.load.image('ok1', 'assets/images/imageButton/ok1.png');
        this.load.image('ok2', 'assets/images/imageButton/ok2.png');
        this.load.image('lesson', 'assets/images/imageButton/lesson.png');

        //load image outside;
        this.load.image('home0', 'assets/images/imageOutside/home0.png');
        this.load.image('home1', 'assets/images/imageOutside/home1.png');
        this.load.image('home2', 'assets/images/imageOutside/home2.png');
        this.load.image('tree', 'assets/images/imageOutside/79.png');
        this.load.image('dragon', 'assets/images/imageOutside/dragon.png')

        //load image object;
        this.load.image('cat', 'assets/images/imageObject/cat.png');
        this.load.image('bird', 'assets/images/imageObject/bird.png');
        this.load.image('squirrel', 'assets/images/imageObject/squirrel.png');
        this.load.image('mouse', 'assets/images/imageObject/mouse.png');
        this.load.image('turtle', 'assets/images/imageObject/turtle.png');
        this.load.image('chicken', 'assets/images/imageObject/chicken.png');
        this.load.image('frog', 'assets/images/imageObject/frog.png');
        this.load.image('redBall', 'assets/images/imageObject/redBall.png');

        // load image audio;
        this.load.image('speak 2', 'assets/images/imageAudio/speak 1.png');

        // load audio
        this.load.audio('wrong', 'assets/audio/audioScene2/wrong.mp3');
        this.load.audio('birdAboveCat', 'assets/audio/audioScene2/birdAboveCat.mp3');
        this.load.audio('birdBelowCat', 'assets/audio/audioScene2/birdBelowCat.mp3');
        this.load.audio('catAboveSquirrel', 'assets/audio/audioScene2/catAboveSquirrel.mp3');
        this.load.audio('catBelowSquirrel', 'assets/audio/audioScene2/catBelowSquirrel.mp3');
        this.load.audio('chickenAboveFrog', 'assets/audio/audioScene2/chickenAboveFrog.mp3');
        this.load.audio('chickenBelowFrog', 'assets/audio/audioScene2/chickenBelowFrog.mp3');
        this.load.audio('frogAboveCat', 'assets/audio/audioScene2/frogAboveCat.mp3');
        this.load.audio('frogAboveChicken', 'assets/audio/audioScene2/frogAboveChicken.mp3');
        this.load.audio('frogAboveTurtle', 'assets/audio/audioScene2/frogAboveTurtle.mp3');
        this.load.audio('frogBelowChicken', 'assets/audio/audioScene2/frogBelowChicken.mp3');
        this.load.audio('frogBelowTurtle', 'assets/audio/audioScene2/frogBelowTurtle.mp3');
        this.load.audio('squirrelAboveBird', 'assets/audio/audioScene2/squirrelAboveBird.mp3');
        this.load.audio('squirrelBelowBird', 'assets/audio/audioScene2/squirrelBelowBird.mp3');
        this.load.audio('turtleAboveMouse', 'assets/audio/audioScene2/turtleAboveMouse.mp3');
        this.load.audio('turtleBelowMouse', 'assets/audio/audioScene2/turtleBelowMouse.mp3');
        this.load.audio('turtleBelowFrog', 'assets/audio/audioScene2/turtleBelowFrog.mp3');
        this.load.audio('mouseBelowCat', 'assets/audio/audioScene2/mouseBelowCat.mp3');
        this.load.audio('question', 'assets/audio/audioScene2/question.mp3');
 
    }   

    create(){
        // Object of the game;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);
        this.tree = this.add.image(250, 250, "tree").setOrigin(0, 0);
        this.cat = this.add.sprite(250, 230, "cat").setOrigin(0, 0);
        this.bird = this.add.sprite(340, 545, "bird").setOrigin(0, 0).setAlpha(0.5);
        this.squirrel = this.add.sprite(350, 400, "squirrel").setOrigin(0, 0);

        // Add image buttons;
        this.backButton = this.add.sprite(245, 117, 'backButton').setOrigin(0,0);
        this.backButton.setInteractive().on('pointerdown', () => this.scene.start('Menu'))

        wrongAudio2 = this.sound.add('wrong');

        this.input.on('gameobjectover', function(pointer, gameObject){
            gameObject.setTint(0x8EEDE2);
        })

        this.input.on('gameobjectout', function(pointer, gameObject){
            gameObject.clearTint();
        })

        // ball;
        arr = new Array("redBall");
        for(var i = 0; i < ballNumber2; i++){
            arr[i] = this.add.image(const2 += x2, 137, "redBall").setOrigin(0, 0);
        }

        this.textTime = this.add.text(1150, 150, "00:00",{
            font: "30px Arial",
            fill: "red"
        }).setOrigin(0, 0);

        this.countTime()
        this.phase1();
    }

    phase1() {
        // Question
        this.question = this.add.text(630, 270, "Which one is true?" + "\n", {font: "50px Arial", fill: "black"});

        //image audio;
        iconAudio1 = this.add.image(520, 355, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(520, 415, 'speak 2').setOrigin(0, 0);
        //audio
        answerAudio1 = this.sound.add('catAboveSquirrel');
        answerAudio2 = this.sound.add('catBelowSquirrel');
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play()
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play()
        })

        // Answers
        this.answer1 = this.add.text(580, 360, 'The cat is ABOVE the squirrel.', {font: "40px Arial", fill: "black" });

        this.answer2 = this.add.text(580, 420, 'The cat is BELOW the squirrel.', {font: "40px Arial", fill: "black" });

        this.ok1 = this.add.sprite(1130, 362, "ok1").setOrigin(0, 0)

        this.ok1.setInteractive().on('pointerdown', () => {
            nextRound2 = 1;
            answerAudio1.destroy();
            answerAudio2.destroy();
            iconAudio1.destroy();
            iconAudio2.destroy();
            this.ok1.destroy();
            this.ok2.destroy();
            this.answer1.setScale(1.2)
            this.answer2.setText("")
            this.question.setText("")
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer1.setScale(1);
                this.phase2();

            }, [], this)
        });

        this.ok2 = this.add.sprite(1130, 420, "ok2").setOrigin(0, 0);

        this.ok2.setInteractive().on('pointerdown', () => {
            wrongAudio2.play();
            this.ok1.destroy();
            this.ok2.destroy();
            iconAudio1.destroy();
            iconAudio2.destroy();
            this.answer1.setText("");
            this.answer2.setScale(1).setText("Wrong! Do it again.")
            this.question.setText("")
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer2.setScale(1);
                this.answer2.destroy();
                this.phase1();
                
            }, [], this)

        })

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2);

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint();

        })


    }

    phase2(){
        
        this.cat.setAlpha(0.5);
        this.bird.setAlpha(1);
        this.question.setText('Which one is true?');

        //image audio;
        iconAudio1 = this.add.image(520, 355, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(520, 415, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('squirrelBelowBird');
        answerAudio2 = this.sound.add('squirrelAboveBird');
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play()
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play()
        })


        this.answer1.setText('The squirrel is BELOW the bird.');
        this.answer2.setText('The squirrel is ABOVE the bird.'); 

        var ok1 = this.add.sprite(1150, 362, "ok1").setOrigin(0, 0);
        var ok2 = this.add.sprite(1150, 420, "ok2").setOrigin(0, 0);

        ok1.setInteractive().on('pointerdown', () => {
            wrongAudio2.play()
            ok1.destroy();
            ok2.destroy();
            iconAudio1.destroy();
            iconAudio2.destroy();
            this.answer1.setText("Wrong! Do it again.")
            this.answer2.setText("")
            this.question.setText("")
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.phase2();
            }, [], this)

        });

        

       
        ok2.setInteractive().on('pointerdown', () => {
            nextRound2 = 1;
            ok1.destroy();
            ok2.destroy();
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy();
            answerAudio2.destroy();
            this.answer1.setText("");
            this.answer2.setScale(1.2)
            this.question.setText("");

            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer2.setScale(1);
                this.phase3();
            }, [], this)

        });

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2);

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint();

        })

    }

    phase3() {
        this.cat.setAlpha(1);
        this.squirrel.setAlpha(0.5);
        this.question.setText('Which one is true?');
        //image audio;
        iconAudio1 = this.add.image(520, 355, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(520, 415, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('birdAboveCat');
        answerAudio2 = this.sound.add('birdBelowCat');
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play();
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play();
        })

        this.answer1.setText('The bird is ABOVE the cat.');
        this.answer2.setText('The bird is BELOW the cat.'); 

        var ok1 = this.add.sprite(1105, 362, "ok1").setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {
            wrongAudio2.play();
            ok1.destroy();
            ok2.destroy();
            iconAudio1.destroy();
            iconAudio2.destroy();
            this.answer1.setText("Wrong! Do it again.");
            this.answer2.setText("");
            this.question.setText("");
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.phase3();
            }, [], this)

        })

        var ok2 = this.add.sprite(1105, 420, "ok2").setOrigin(0, 0);

       
        ok2.setInteractive().on('pointerdown', () => {
            nextRound2 = 1;
            ok1.destroy();
            ok2.destroy();
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy();
            answerAudio2.destroy();
            this.answer1.setText("");
            this.answer2.setScale(1.2);
            this.question.setText("");

            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer2.setScale(1);
                this.tree.destroy();
                this.cat.destroy();
                this.squirrel.destroy();
                this.bird.destroy();
                this.phase4();
            }, [], this)
        });

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2);

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint();

        })

    }

    phase4() {

        this.home0 = this.add.sprite(265, 250, 'home0').setOrigin(0,0);
        this.mouse = this.add.sprite(300, 250, 'mouse').setOrigin(0,0);
        this.turtle = this.add.sprite(290, 455, 'turtle').setOrigin(0,0);

        //image audio;
        iconAudio1 = this.add.image(520, 355, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(520, 415, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('turtleAboveMouse');
        answerAudio2 = this.sound.add('turtleBelowMouse');
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play();
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play();
        })

        this.question.setText('Which one is true?')
        this.answer1.setText('The turtle is ABOVE the mouse.')
        this.answer2.setText('The turtle is BELOW the mouse.')

        var ok1 = this.add.sprite(1160, 362, 'ok1').setOrigin(0,0)

        ok1.setInteractive().on('pointerdown', () => {
            iconAudio1.destroy();
            iconAudio2.destroy();
            wrongAudio2.play();
            ok1.destroy();
            ok2.destroy();
            
            this.answer1.setText("Wrong! Do it again.");
            this.answer2.setText("");
            this.question.setText("");
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.home0.destroy();
                this.turtle.destroy();
                this.mouse.destroy();
                this.phase4();
            }, [], this)

        })

        var ok2 = this.add.sprite(1160, 420, 'ok2').setOrigin(0,0)

        ok2.setInteractive().on('pointerdown', () =>{
            nextRound2 = 1;
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy()
            answerAudio2.destroy()
            ok2.destroy();
            ok1.destroy();
            this.answer1.setText("");
            this.answer2.setScale(1.2);
            this.question.setText("");

            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer2.setScale(1);
                this.turtle.destroy();
                this.mouse.destroy();
                this.phase5();
            }, [], this)


        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2);

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint();
        })
 
    }

    phase5() {

        this.chicken = this.add.sprite(295, 250, 'chicken').setOrigin(0,0);
        this.frog = this.add.sprite(287, 455, 'frog').setOrigin(0,0);

        //image audio;
        iconAudio1 = this.add.image(520, 355, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(520, 415, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('chickenAboveFrog');
        answerAudio2 = this.sound.add('chickenBelowFrog');
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play();
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play();
        })

        this.question.setText('Which one is true?');
        this.answer1.setText('The chicken is ABOVE the frog.');
        this.answer2.setText('The chicken is BELOW the frog.');

        var ok1 = this.add.sprite(1155, 362, 'ok1').setOrigin(0,0)

        ok1.setInteractive().on('pointerdown', () => {
            nextRound2 = 1
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy();
            answerAudio2.destroy();
            ok2.destroy();
            ok1.destroy();
            this.answer1.setScale(1.2);
            this.answer2.setText("");
            this.question.setText("");

            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer1.setScale(1);
                this.chicken.destroy();
                this.phase6();
            }, [], this)


        })

        var ok2 = this.add.sprite(1155, 420, 'ok2').setOrigin(0,0)

        ok2.setInteractive().on('pointerdown', () =>{
            iconAudio1.destroy();
            iconAudio2.destroy();
            wrongAudio2.play();
            ok1.destroy();
            ok2.destroy();
            
            this.answer1.setText("");
            this.answer2.setText("Wrong! Do it again.");
            this.question.setText("");
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.frog.destroy();
                this.answer1.setScale(1);
                this.chicken.destroy();
                this.phase5();
            }, [], this)

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2);

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint(

            );
        })
 
    }

    phase6() {

        this.home0.destroy();
        this.frog.destroy();
        this.home0 = this.add.sprite(265, 250, 'home0').setOrigin(0,0);
        this.turtle = this.add.sprite(300, 250, 'turtle').setOrigin(0,0);
        this.frog = this.add.sprite(287, 455, 'frog').setOrigin(0,0);

        //image audio;
        iconAudio1 = this.add.image(520, 355, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(520, 415, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('frogAboveTurtle');
        answerAudio2 = this.sound.add('frogBelowTurtle');
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play();
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play();
        })

        this.question.setText('Which one is true?');
        this.answer1.setText('The frog is ABOVE the turtle.');
        this.answer2.setText('The frog is BELOW the turtle.');

        var ok1 = this.add.sprite(1140, 362, 'ok1').setOrigin(0,0)

        ok1.setInteractive().on('pointerdown', () => {
            iconAudio1.destroy();
            iconAudio2.destroy();
            wrongAudio2.play();
            ok1.destroy();
            ok2.destroy();
            
            this.answer1.setText("Wrong! Do it again.");
            this.answer2.setText("");
            this.question.setText("");
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.home0.destroy();
                this.turtle.destroy();
                this.frog.destroy();
                this.turtle.destroy();
                this.phase6();
            }, [], this)
            
        })
        

        var ok2 = this.add.sprite(1140, 420, 'ok2').setOrigin(0,0);

        ok2.setInteractive().on('pointerdown', () =>{
            nextRound2 = 1;
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy();
            answerAudio2.destroy();
            ok2.destroy();
            ok1.destroy();
            this.answer1.setText("");
            this.answer2.setScale(1.2);
            this.question.setText("");
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.question.destroy();
                this.home0.destroy();
                this.turtle.destroy();
                this.frog.destroy();
                this.answer1.destroy();
                this.answer2.destroy();
                this.phase7();
            }, [], this)
            
        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2);

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint(

            );
        })
 
    }

    phase7() {
        this.home0.destroy();
        this.turtle.destroy();
        this.frog.destroy();

        this.home1 = this.add.sprite(850, 250, 'home1').setOrigin(0, 0);
        this.home2 = this.add.sprite(1070, 250, 'home2').setOrigin(0, 0);
        this.frog = this.add.sprite(882, 295, 'frog').setOrigin(0, 0);
        this.chicken = this.add.sprite(1095, 425, 'chicken').setOrigin(0, 0);

        // Question
        this.question = this.add.text(275, 300, 'Which one is true?', {

            font: '50px Arial',
            fill: 'black'

        })

        //image audio;
        iconAudio1 = this.add.image(240, 385, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(240, 485, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('frogAboveChicken')
        answerAudio2 = this.sound.add('frogBelowChicken')
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play()
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play()
        })

        // Answers
        this.answer1 = this.add.text(290, 390, 'The frog is ABOVE the chicken.', {

            font: '40px Arial',
            fill: 'black'

        })

        this.answer2 = this.add.text(290, 490, 'The frog is BELOW the chicken.', {

            font: '40px Arial',
            fill: 'black'

        })

        var ok1 = this.add.sprite(290, 440, 'ok1').setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {
            nextRound2 = 1
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy()
            answerAudio2.destroy()
            ok1.destroy()
            ok2.destroy()
            this.answer1.setScale(1.2)
            this.answer2.setText("")
            this.question.setText("")

            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer1.setScale(1)
                this.home1.destroy()
                this.home2.destroy()
                this.frog.destroy()
                this.chicken.destroy()
                this.phase8()
            }, [], this)
            
            
        })

        var ok2 = this.add.sprite(290, 550, 'ok2').setOrigin(0, 0)

        ok2.setInteractive().on('pointerdown', () => {
            iconAudio1.destroy();
            iconAudio2.destroy();
            wrongAudio2.play()
            ok1.destroy()
            ok2.destroy()
            this.answer1.setText("Wrong! Do it again.")
            this.answer2.setText("")
            this.question.setText("")
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer1.destroy()
                this.home1.destroy()
                this.home2.destroy()
                this.frog.destroy()
                this.chicken.destroy()
                this.phase7()
            }, [], this)

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })
    }

    phase8() {
        this.home1.destroy()
        this.home2.destroy()
        this.frog.destroy()
        this.chicken.destroy()
        this.home1 = this.add.sprite(1070, 250, 'home1').setOrigin(0, 0)
        this.home2 = this.add.sprite(850, 250, 'home2').setOrigin(0, 0)
        this.frog = this.add.sprite(1095, 295, 'frog').setOrigin(0, 0)
        this.turtle = this.add.sprite(882, 430, 'turtle').setOrigin(0, 0)

        //image audio;
        iconAudio1 = this.add.image(240, 385, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(240, 485, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('turtleBelowFrog')
        answerAudio2 = this.sound.add('frogBelowTurtle')
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play()
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play()
        })

        this.question.setText('Which one is true?');
        this.answer1.setText('The turtle is BELOW the frog.');
        this.answer2.setText('The frog is BELOW the turtle.');

        var ok1 = this.add.sprite(290, 440, 'ok1').setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {
            nextRound2 = 1
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy()
            answerAudio2.destroy()
            ok1.destroy()
            ok2.destroy()
            this.answer1.setScale(1.2)
            this.answer2.setText("")
            this.question.setText("")

            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.answer1.setScale(1)
                this.home1.destroy()
                this.frog.destroy()
                this.turtle.destroy()
                this.phase9()
            }, [], this)
            
        })

        var ok2 = this.add.sprite(290, 550, 'ok2').setOrigin(0, 0)

        ok2.setInteractive().on('pointerdown', () => {
            iconAudio1.destroy();
            iconAudio2.destroy();
            wrongAudio2.play()
            ok1.destroy()
            ok2.destroy()
            this.answer1.setText("Wrong! Do it again.")
            this.answer2.setText("")
            this.question.setText("")
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.home1.destroy()
                this.home2.destroy()
                this.turtle.destroy()
                this.chicken.destroy()
                this.phase8()
            }, [], this)

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })


    }

    phase9() {
        this.home0.destroy()
        this.home1.destroy()
        this.home2.destroy()
        this.frog.destroy()
        this.chicken.destroy()
        this.mouse.destroy()
        this.cat.destroy()

        //image audio;
        iconAudio1 = this.add.image(240, 385, 'speak 2').setOrigin(0, 0);
        iconAudio2 = this.add.image(240, 485, 'speak 2').setOrigin(0, 0);
        // audio
        answerAudio1 = this.sound.add('mouseBelowCat')
        answerAudio2 = this.sound.add('frogAboveCat')
        iconAudio1.setInteractive().on('pointerdown', () =>{
            answerAudio1.play()
        })
        iconAudio2.setInteractive().on('pointerdown', () =>{
            answerAudio2.play()
        })

        this.home0 = this.add.sprite(1070, 250, 'home0').setOrigin(0, 0)
        this.home2 = this.add.sprite(850, 250, 'home2').setOrigin(0, 0)
        this.frog = this.add.sprite(1095, 255, 'frog').setOrigin(0, 0)
        this.cat = this.add.sprite(882, 460, 'cat').setOrigin(0, 0)
        this.mouse = this.add.sprite(1105, 450, 'mouse').setOrigin(0, 0)

        this.question.setText('Which one is true?')
        this.answer1.setText('The mouse is BELOW the cat.')
        this.answer2.setText('The frog is ABOVE the cat.')

        var ok1 = this.add.sprite(290, 440, 'ok1').setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {
            iconAudio1.destroy();
            iconAudio2.destroy();
            wrongAudio2.play()
            ok1.destroy()
            ok2.destroy()
            this.answer1.setText("")
            this.answer2.setText("Wrong! Do it again.")
            this.question.setText("")
            
            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.phase9()
            }, [], this)
            
        })

        var ok2 = this.add.sprite(290, 550, 'ok2').setOrigin(0, 0)

        ok2.setInteractive().on('pointerdown', () => {
            nextRound2 = 1
            iconAudio1.destroy();
            iconAudio2.destroy();
            answerAudio1.destroy()
            answerAudio2.destroy()
            wrongAudio2.destroy()
            ok1.destroy()
            ok2.destroy()
            this.answer1.setText("")
            this.answer2.setScale(1.2)
            this.question.setText("")

            timedEvent2 = this.time.delayedCall(1500, function nextPhase(){
                this.home0.destroy()
                this.home2.destroy()
                this.frog.destroy()
                this.cat.destroy()
                this.mouse.destroy()
                this.question.destroy()
                this.answer1.destroy()
                this.answer2.destroy()
                this.endScene()
            }, [], this)


        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })


    }

    endScene() {
        this.deleteBall()
        this.backButton.destroy()
        
        this.notification = this.add.text(475, 145, 'Well done! You completed the card!', {

            font: '35px Arial',
            fill: 'red'

        })

        this.dragon = this.add.image(625, 210, 'dragon').setOrigin(0, 0).setScale(0.35);
        var lesson = this.add.sprite(650, 610, 'lesson').setOrigin(0, 0);

        lesson.setInteractive().on('pointerdown', () => {

            this.scene.start('Menu')

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })
    }
    
    animationBall(){
        var varX = constX2 - (number2 - ballNumber2) * x2
        if(nextRound2){
        
            if(arr[ballNumber2 - 1].x < varX){
                arr[ballNumber2 - 1].x += 1.5
            } else {
                nextRound2 = 0
                ballNumber2 --
            }
            
        }
    }

    deleteBall(){
        for(var i = 0;i < number2; i++){
            arr[i].destroy()
        }
    }

    countTime(){
        var timedEvent = this.time.addEvent({
            delay: 1000,
            callback:  () => {
                time2 ++;
                var sec = Math.floor(time2 % 60);
                if(sec < 10){
                    sec = "0" + sec; 
                }
                var min = Math.floor((time2 / 60) % 60); 
                if(min < 10){
                    min = "0" + min;
                }
                this.textTime.setText(min + ":" + sec);
                if(ballNumber2===0){
                    timedEvent.remove(true);
                    console.log(ballNumber2);
                }
            },
            callbackScope: this,
            loop: true
        });
       
    }

    update() {
        this.animationBall();
    }

}