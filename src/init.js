import loader from './loader.js';
import scenePlay from './scenes/sceneplay.js'
const config = {
    width: 640,
    height: 400,
    parent: 'container',
    physics: {
        default: 'arcade'
    },
    scene: [
        loader,
        scenePlay,
    ]
}

new Phaser.Game(config)