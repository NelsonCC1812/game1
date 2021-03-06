class Player extends npc {

    constructor(ctx, animeSet, controls, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.speed = 20
        this.presetSpeed = 20
        this.speedBack = 15
        this.posY = gameH * .75
        this.health = 200

        this.damage = 50

        this.width = 120
        this.height = 150
        this.controls = controls

        this.sprite.src = this.animeSet.idle.img
        this.sprite.frames = this.animeSet.idle.frames
        this.sprite.idx = 0

        this.action = "idle"

        this.test = false

        this.process = false

        this.invoke = true

        this.sythe = undefined

        this.sytheReady = true
    }

    throwSythe() {

        if (!this.sythe && this.sytheReady) {
            this.sythe = new Sythe(this.ctx, this.posX + this.width, this.gameH)
            this.sytheReady = false

            setTimeout(() => {
                this.sytheReady = true

            }, 3000)
        }
    }

    drawSythe(counter) {

        if (this.sythe) {
            this.sythe.move()
            this.sythe.draw(counter)
        }
    }

    destroySythe = () => this.sythe = undefined


    showHealth() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(0, 0, this.health * 5, 20)
    }

    walk = () => this.posX += this.speed

    walkBack = () => this.posX -= this.speedBack


    setIdle() {
        this.width = 120
        this.height = 150
        this.sprite.src = this.animeSet.idle.img
        this.sprite.frames = this.animeSet.idle.frames
        this.sprite.idx = 0

        this.action = "idle"
    }



    setListeners() {
        document.onkeydown = (e) => {

            switch (e.keyCode) {

                case this.controls.j:

                    if (this.test == false) {
                        this.sprite.src = this.animeSet.attack.img
                        this.sprite.idx = 0
                        this.sprite.frames = this.animeSet.attack.frames
                        this.height = 240
                        this.width = 180
                        this.posY = this.gameH * .95 - this.height
                        this.sprite.time = 250
                        this.test = true

                        this.action = "attack"

                        setTimeout(() => {
                            this.test = false
                        }, 800)
                    }

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
                        this.action = "walk"
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

                        this.action = "walkBack"
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

                        this.action = "block"
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

                    this.action = "invoke"

                    setTimeout(() => this.action = "idle", 500)

                    break;
                case this.controls.k:

                    this.sprite.src = this.animeSet.throw.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.throw.frames
                    this.height = 200
                    this.width = 180
                    this.posY = this.gameH * .94 - this.height
                    this.sprite.time = 500
                    this.throwSythe()

                    this.action = "throw"

                    setTimeout(() => {
                        this.setIdle()
                    }, 1000)
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

                this.action = "idle"
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

                this.action = "idle"
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

                this.action = "idle"
            }

            if (e.keyCode === this.controls.j) {
                this.posY = this.gameH * 0.75
                this.width = 100
                this.height = 150
                this.sprite.src = this.animeSet.idle.img
                this.sprite.frames = this.animeSet.idle.frames
                this.sprite.time = undefined
                this.sprite.idx = 0
                this.sprite.test = false

                this.action = "idle"
            }
        }
    }
}