class Player extends npc {

    constructor(ctx, animeSet, controls, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.speed = 20
        this.presetSpeed = 20
        this.speedBack = 15
        this.posY = gameH * .75
        this.health = 100

        this.width = 120
        this.height = 150
        this.controls = controls

        this.sprite.src = this.animeSet.idle.img
        this.sprite.frames = this.animeSet.idle.frames
        this.sprite.idx = 0


    }
    showHealth() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(0, 0, this.health * 10, 20)
    }

    walk() {
        this.posX += this.speed
    }
    walkBack() {
        this.posX -= this.speedBack
    }

    receibeDamage(damage) {
        this.health -= damage

    }

    setListeners() {
        document.onkeydown = (e) => {

            switch (e.keyCode) {

                case this.controls.j:

                    this.sprite.src = this.animeSet.attack.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.attack.frames
                    this.height = 240
                    this.width = 180
                    this.posY = this.gameH * .95 - this.height
                    this.sprite.time = 250

                    break;

                case this.controls.d:
                    this.walk()

                    if (!this.sprite.test) {

                        this.sprite.src = this.animeSet.walk.img
                        this.sprite.idx = 0
                        this.sprite.frames = this.animeSet.walk.frames
                        this.height = 150
                        this.width = 100
                        this.posY = this.gameH * .94 - this.height
                        this.sprite.test = true
                    }

                    break;
                case this.controls.a:
                    this.walkBack()

                    if (!this.sprite.test) {

                        this.sprite.src = this.animeSet.walk.img
                        this.sprite.idx = 0
                        this.sprite.frames = this.animeSet.walk.frames
                        this.height = 150
                        this.width = 100
                        this.posY = this.gameH * .94 - this.height
                        this.sprite.test = true
                    }

                    break;

                case this.controls.s:

                    if (!this.sprite.test) {

                        this.sprite.src = this.animeSet.block.img
                        this.sprite.idx = 0
                        this.sprite.frames = this.animeSet.block.frames
                        this.height = 150
                        this.width = 100
                        this.posY = this.gameH * .94 - this.height
                        this.sprite.test = true
                    }

                    break;
                case this.controls.space:

                    this.sprite.src = this.animeSet.invoke.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.invoke.frames
                    this.height = 180
                    this.width = 120
                    this.posY = this.gameH * .94 - this.height
                    this.sprite.time = 500

                    break;
                case this.controls.k:

                    this.sprite.src = this.animeSet.throw.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.throw.frames
                    this.height = 200
                    this.width = 180
                    this.posY = this.gameH * .94 - this.height
                    this.sprite.time = 500


                    break;

            }
        }

        document.onkeyup = e => {
            if (e.keyCode === this.controls.d) {
                this.posY = this.gameH * 0.75
                this.width = 100
                this.height = 150
                this.sprite.src = this.animeSet.idle.img
                this.sprite.frames = this.animeSet.idle.frames
                this.sprite.time = undefined
                this.sprite.idx = 0
                this.sprite.test = false
            }
            if (e.keyCode === this.controls.s) {

                this.posY = this.gameH * 0.75
                this.width = 100
                this.height = 150
                this.sprite.src = this.animeSet.idle.img
                this.sprite.frames = this.animeSet.idle.frames
                this.sprite.time = undefined
                this.sprite.idx = 0
                this.sprite.test = false
            }

            if (e.keyCode === this.controls.a) {
                this.posY = this.gameH * 0.75
                this.width = 100
                this.height = 150
                this.sprite.src = this.animeSet.idle.img
                this.sprite.frames = this.animeSet.idle.frames
                this.sprite.time = undefined
                this.sprite.idx = 0
                this.sprite.test = false
            }


        }


    }
}