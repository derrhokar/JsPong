class pallete extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, name){
        super(scene, x, y, name);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.immovable = true;
        this.body.setCollideWorldBounds(true);
    }
}

export default pallete