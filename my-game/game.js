const ratio = Math.max(window.innerWidth / window.innerHeight, window.innerHeight / window.innerWidth);
const DEFAULT_HEIGHT = 770;
const DEFAULT_WIDTH = ratio * DEFAULT_HEIGHT;

const config = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		parent: 'phaser-example',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: DEFAULT_WIDTH,
		height: DEFAULT_HEIGHT
	},
	// width: 1525,
	// height: 770,
	//parent: 'phaser-game',
	background: 0x000000,
	scene: [Menu,Scene2,Scene1,Scene3]
};

var game = new Phaser.Game(config);

	





