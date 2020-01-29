class Enemy extends npc {

    constructor(ctx, animeSet, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.width = 100
        this.height = 150
        this.presetSpeed = 5
        this.damage = 25

        this.speed = 5
        this.posX = gameW
        this.posY = gameH * .93 - this.height

        this.sprite.src = this.animeSet.walk.img
        this.sprite.frames = this.animeSet.walk.frames
        this.sprite.idx = this.animeSet.walk.frames - 1
        this.action = "walk"

        this.process = false

    }
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
            this.sprite.idx--
            if (this.sprite.idx < 0) this.sprite.idx = this.sprite.frames - 1
        }
    }

    move() {
        this.posX -= this.speed
    }



}