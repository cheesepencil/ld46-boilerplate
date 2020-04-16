export class TestScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScene' });
    }

    preload(): void {
        this.load.image('test', require('./assets/test.png'));
    }

    create(): void {
        const test = this.add.image(100, 100, 'test').setOrigin(0, 0);
    }
}