import pallete from '../objects/pallete.js'
class scenePlay extends Phaser.Scene{
    constructor(){
        super({
            key: 'scenePlay'
        });
    }
    create(){
        let widthCentered = this.sys.game.config.width/2
        let heightCentered =  this.sys.game.config.height/2

        this.add.image(widthCentered, heightCentered , 'separator');
        this.left = new pallete(this, 30, heightCentered, 'left' );
     
        this.right = new pallete(this, this.sys.game.config.width -30, heightCentered, 'right' );
        
        this.physics.world.setBoundsCollision(false, false, true, true)
        this.ball = this.physics.add.image( widthCentered, heightCentered, 'ball')
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-300);

        this.physics.add.collider(this.ball, this.left,this.palleteCollision ,null, this);
        this.physics.add.collider(this.ball, this.right,this.palleteCollision ,null, this);
        //right pallete
        this.cursor = this.input.keyboard.createCursorKeys(); 
        //left pallete
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    

    update(){

        //center the ball
        if(this.ball.x <0 || this.ball.x> this.sys.game.config.width){
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2)
        }
        //behavior control of right pallete
        if(this.cursor.down.isDown){
            this.right.body.setVelocityY(225)
        } else if(this.cursor.up.isDown){
            this.right.body.setVelocityY(-225)
        }else{
            this.right.body.setVelocityY(0)
        }
        
        //behavior control of left pallete
        if(this.cursor_S.isDown){
            this.left.body.setVelocityY(225)
        } else if(this.cursor_W.isDown){
            this.left.body.setVelocityY(-225)
        }else{
            this.left.body.setVelocityY(0)
        }
    }

    
    

    palleteCollision(){
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    };
}

export default scenePlay;