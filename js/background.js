class Background {

    constructor(ctx, imgSrc, gameW, gameH) {

        this.ctx = ctx
        this.gameW = gameW
        this.gameH = gameH

        this.posX = 0
        this.posY = 0


        this.img = new Image()
        this.img.src = imgSrc

    }

    draw() {

        this.ctx.drawImage(this.img, this.posX - this.gameW, this.posY, this.gameW, this.gameH)
        this.ctx.drawImage(this.img, this.posX, this.posY, this.gameW, this.gameH)
        this.ctx.drawImage(this.img, this.posX + this.gameW, this.posY, this.gameH, this.gameH)
    }

    move(speed) {

        this.posX -= speed

        if (this.this.posX <= -this.gameW) this.posX = 0
    }

}