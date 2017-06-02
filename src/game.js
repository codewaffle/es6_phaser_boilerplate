class BootState extends Phaser.State {
    preload() {
        console.log('booting up');
    }

    create() {
        this.state.start('game');
    }
}

class GameState extends Phaser.State {
    create() {
        console.log('playing');
    }

    update() {
    }
}



class Game extends Phaser.Game {

    constructor() {
        super(1280, 720, Phaser.AUTO, 'content', null);
        this.state.add('boot', BootState, false);
        this.state.add('game', GameState, false);

        this.state.start('boot');
    }

}

new Game();