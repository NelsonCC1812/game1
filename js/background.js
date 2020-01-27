class Background{

    constructor(ctx, imgSrc, gameW, gameH){

        this.ctx= ctx
        this.gameW= gameW
        this.gameH=gameH

        this.posX= undefined
        this.posY= undefined


        this.img= new Image()
        this.img.src= imgSrc
        
    }

    draw(){

        ctx.drawImage(img, this.posX, this.posY, this.gameW, gameH)
        ctx.drawImage(img, this.posX+this.gameW,this.posY,this.gameW, this.gameH)
    }

    move(speed){

        this.posX+=speed
    }

}