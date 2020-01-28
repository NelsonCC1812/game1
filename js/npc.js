class npc {

    constructor(ctx, animeSet, gameW, gameH) {
        this.ctx = ctx
        this.gameW = gameW
        this.gameH = gameH

        this.posX = 0
        this.posY = gameH * .75

        this.width = 80
        this.height = 100

        this.frames = 5


        this.health = undefined

        this.animeSet = animeSet

        this.animeAttack = new Image()
        this.animeAttack.src = animeSet.attack.img
        this.animeAttack.frames = animeSet.attack.frames
        this.animeAttack.idx = 0

        this.animeIdle = new Image()
        this.animeIdle.src = animeSet.idle.img
        this.animeIdle.frames = animeSet.idle.frames
        this.animeIdle.idx = 0

        this.animeDeath = new Image()
        this.animeDeath.src = animeSet.death.img
        this.animeDeath.frames = animeSet.death.frames
        this.animeDeath.idx = 0

        this.animeHit = new Image()
        this.animeHit.src = animeSet.hit.img
        this.animeHit.frames = animeSet.hit.frames
        this.animeHit.idx = 0

        this.animeWalk = new Image()
        this.animeWalk.src = animeSet.walk.img
        this.animeWalk.frames = animeSet.walk.frames
        this.animeWalk.idx = 0

    }

    attack(counter) {

        while (true) {

            this.ctx.drawImage(
                this.animeAttack,
                this.animeAttack.idx * Math.floor(this.animeAttack.width / this.animeAttack.frames),
                0,
                Math.floor(this.animeAttack.width / this.animeAttack.frames),
                this.animeAttack.height,
                this.posX,
                this.posY,
                this.width,
                this.height
            )
            if (this.animate(counter, this.animeAttack)) return false
        }
    }

    idle(counter) {

        this.ctx.drawImage(
            this.animeIdle,
            this.animeIdle.idx * Math.floor(this.animeIdle.width / this.animeIdle.frames),
            0,
            Math.floor(this.animeIdle.width / this.animeIdle.frames),
            this.animeIdle.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(counter, this.animeIdle)
    }

    death(counter) {
        this.ctx.drawImage(
            this.animeDeath,
            this.animeDeath.idx * Math.floor(this.animeDeath.width / this.animeDeath.frames),
            0,
            Math.floor(this.animeDeath.width / this.animeDeath.frames),
            this.animeDeath.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(counter, this.animeDeath)

    }

    hit(counter) {

        this.ctx.drawImage(
            this.animeHit,
            this.animeHit.idx * Math.floor(this.animeHit.width / this.animeHit.frames),
            0,
            Math.floor(this.animeHit.width / this.animeHit.frames),
            this.animeHit.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(counter, this.animeHit)

    }

    walk(counter) {
        this.ctx.drawImage(
            this.animeWalk,
            this.animeWalk.idx * Math.floor(this.animeWalk.width / this.animeWalk.frames),
            0,
            Math.floor(this.animeWalk.width / this.animeWalk.frames),
            this.animeWalk.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(counter, this.animeWalk)

    }


    animate(counter, img) {
        if (counter % this.frames) {
            img.idx++
            if (img.idx > img.frames - 1) img.idx = 0
        }

        if (img.idx <= img.frames) return true
    }



}