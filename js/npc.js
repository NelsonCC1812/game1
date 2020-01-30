class npc {

    constructor(ctx, animeSet, gameW, gameH) {
        this.ctx = ctx
        this.gameW = gameW
        this.gameH = gameH

        this.posX = 0
        this.posY = gameH * 0.75

        this.width = 80
        this.height = 100

        this.frames = 5
        this.posY = undefined


        this.health = undefined

        this.animeSet = animeSet

        this.sprite = new Image()

        this.sprite.time = undefined

        this.process = false

    }

    draw(counter) {

        if (this.sprite.test) {
            this.drawControl(counter)

        } else if (this.sprite.time) {
            setTimeout(() => {
                this.posY = this.gameH * 0.75
                this.width = 100
                this.height = 150
                this.sprite.src = this.animeSet.idle.img
                this.sprite.frames = this.animeSet.idle.frames
                this.sprite.time = undefined
                this.sprite.att = false
                this.sprite.idx = 0

            }, this.sprite.time)

            this.drawControl(counter)

        } else this.drawControl(counter)
    }

    drawControl(counter) {
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
    receibeDamage(damage) {
        this.health -= damage
        this.sprite.src = this.animeSet.hit.img
        this.sprite.frames = this.animeSet.hit.frames
        this.sprite.idx = 0
        this.action = "hit"

        setTimeout(() => {
            this.sprite.src = this.animeSet.idle.img
            this.sprite.frames = this.animeSet.idle.frames
            this.sprite.idx = 0
            this.action = "idle"

        }, 200)

    }


    animate(counter) {
        if (counter % this.frames) {
            this.sprite.idx++
            if (this.sprite.idx > this.sprite.frames - 1) this.sprite.idx = 0
        }
    }

}