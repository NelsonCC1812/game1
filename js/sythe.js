class Sythe {

    constructor(ctx, posX, gameH) {

        this.ctx = ctx

        this.posX = posX

        this.width = 150
        this.height = 90

        this.frames = 20

        this.damage = 70

        this.count = 0

        this.maxPass = 3

        this.sprite = new Image()
        this.sprite.src = "sprites/sythe/sythe.png"
        this.sprite.frames = 4
        this.sprite.idx = 0

        this.posY = (gameH * .93 - this.height) * .95

        this.speed = 30
    }

    move = () => this.posX += this.speed


    draw(counter) {

        this.ctx.drawImage(
            this.sprite,
            this.sprite.idx * Math.floor(this.sprite.width / this.sprite.frames),
            0,
            Math.floor(this.sprite.width / this.sprite.frames),
            this.sprite.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )

        this.animate(counter)
    }

    animate(counter) {
        if (counter % this.frames) {
            this.sprite.idx++
            if (this.sprite.idx > this.sprite.frames - 1) this.sprite.idx = 0
        }
    }
}