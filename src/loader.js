class loader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Loader'
        })
    }
    preload(){
        this.load.on('complete', ()=>{this.scene.start('scenePlay')
    });
        
       
        this.load.image('ball','./assets/ball.png')
        this.load.image('left','./assets/leftPallete.png')
        this.load.image('right','./assets/rightPallete.png')
        this.load.image('separator','./assets/separator.png')
        
    }
   
}

export default loader;