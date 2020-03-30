let game;

window.onload=function () {
	const config = {
		type: Phaser.AUTO,
		width: 1525,
		height: 770,
		parent: 'phaser-game',
		background: 0x000000,
		scene: [Scene2]
	};

	game = new Phaser.Game(config);
}





