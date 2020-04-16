import { TestScene } from "./TestScene";

type GameConfig = Phaser.Types.Core.GameConfig;

export const MyGameConfig: GameConfig = {
    type: Phaser.AUTO,
    render: {
        antialias: false
    },
    scale: {
        mode: Phaser.Scale.FIT
    },
    parent: 'game-parent',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    width: 240,
    height: 160,
    scene: [TestScene]
};