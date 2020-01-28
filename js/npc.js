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


        this.health = undefined

        this.animeSet = animeSet

        this.sprite = new Image()
        this.sprite.src = this.animeSet.idle.img
        this.sprite.frames = this.animeSet.idle.frames
        this.sprite.idx = 0
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



        console.log(this.posY)
        this.animate(counter)
    }


    animate(counter) {
        if (counter % this.frames) {
            this.sprite.idx++
            if (this.sprite.idx > this.sprite.frames - 1) this.sprite.idx = 0
        }
    }



}