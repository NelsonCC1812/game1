class Enemy extends npc {

    constructor(ctx, counter, animeSet, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.width = 100
        this.height = 150
        this.presetSpeed = 5
        this.damage = 25 + counter * .1

        this.health = 100 + counter * .1

        this.speed = 5
        this.posX = gameW
        this.posY = gameH * .93 - this.height

        this.sprite.src = this.animeSet.walk.img
        this.sprite.frames = this.animeSet.walk.frames
        this.sprite.idx = this.animeSet.walk.frames - 1
        this.action = "walk"


    }

    receibeDamage(damage) {
        this.health -= damage
        this.sprite.src = this.animeSet.hit.img
        this.sprite.frames = this.animeSet.hit.frames
        this.sprite.idx = 0
        this.action = "hit"

        setTimeout(() => {

            elm.sprite.src = elm.animeSet.attack.img
            elm.sprite.frames = elm.animeSet.attack.frames
            elm.sprite.idx = elm.sprite.frames - 1
            elm.speed = 0
            elm.action = "attack"
            this.player.speed = 0

            elm.width = 150
            elm.height = 200

            elm.posY = this.height * .93 - elm.height

        }, 200)

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