const Game = {
    canvas: undefined,
    ctx: undefined,

    width: undefined,
    height: undefined,

    fps: 25,
    interval: undefined,
    counter: 0,

    player: undefined,

    enemies: [],
    enemiesType: [],

    background: undefined,
    backgroundimg: "img/background/background.png",

    controls: {
        j: 74,
        d: 68,
        s: 83,
        space: 32,
        k: 75,
        a: 65
    },
    action: false,

    init(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")

        this.setDimensions()
        this.start()
    },

    setDimensions() {

        this.width = window.innerWidth
        this.height = window.innerHeight

        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {


        this.reset()
        this.engine()
    },

    reset() {
        this.status = "playing"
        this.enemies = []
        this.player = new Player(this.ctx, playerAnimations, this.controls, this.width, this.height)
        this.background = new Background(this.ctx, this.backgroundimg, this.width, this.height)
        this.player.setListeners()

        counter = 0

    },


    engine() {

        this.interval = setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.player.showHealth()
            this.moveAll()
            this.enemiesHealth()
            this.checkAll()
            this.enemiesHealth()
            this.checkHealth()


            if (this.counter % 70 == 0) {
                this.enemies.push(new Enemy(this.ctx, skeletonAnimations, this.width, this.height))
            }


            this.counter++
        }, 1000 / this.fps)
    },

    clearScreen() {

        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll() {

        this.background.draw()
        this.enemies.forEach(elm => elm.draw(this.counter))
        this.player.draw(this.counter)
    },

    moveAll() {
        this.enemies.forEach(elm => elm.move())
    },

    enemiesHealth() {

        this.enemies.forEach((elm, idx) => {
            if (elm.health <= 0) {
                elm.sprite.src = elm.animeSet.death.img
                elm.sprite.frames = elm.animeSet.death.frames
                elm.sprite.idx = 0
                elm.speed = 0
                setTimeout(() => {
                    this.enemies.splice(idx, 1)
                }, 300)
            }
        })
    },

    checkAll() {

        this.enemies.forEach(elm => {

            if (elm.posX <= this.player.posX - 70 + this.player.width && !elm.process && elm.health > 0) {
                elm.process = true
                setTimeout(() => {
                    if (elm.posX <= this.player.posX - 70 + this.player.width && this.player.action != "block")
                        this.player.receibeDamage(elm.damage)
                    elm.process = false
                }, 820)
            }

            if (this.player.action == "attack" && elm.posX <= this.player.posX + this.player.width && elm.health > 0) {

                this.player.process = true
                setTimeout(() => {

                    if (elm.posX <= this.player.posX + this.player.width) {
                        elm.receibeDamage(this.player.damage)
                    }

                    elm.process = false
                }, 200)

            }

            if (elm.posX <= this.player.posX - 70 + this.player.width && elm.action != "attack" && elm.health > 0) {

                elm.sprite.src = elm.animeSet.attack.img
                elm.sprite.frames = elm.animeSet.attack.frames
                elm.sprite.idx = elm.sprite.frames - 1
                elm.speed = 0
                elm.action = "attack"
                this.player.speed = 0

                elm.width = 150
                elm.height = 200

                elm.posY = this.height * .93 - elm.height

            } else if (elm.action != "walk" && !(elm.posX <= this.player.posX + this.player.width && elm.health > 0)) {
                elm.sprite.src = elm.animeSet.walk.img
                elm.sprite.frames = elm.animeSet.walk.frames
                elm.sprite.idx = elm.animeSet.walk.frames - 1
                elm.speed = elm.presetSpeed
                elm.action = "walk"
                this.player.speed = this.player.presetSpeed

                elm.width = 100
                elm.height = 150
                elm.posY = this.height * .93 - elm.height
            }
        })
    },

    checkHealth() {
        if (this.player.health <= 0 && this.player.action != "death") {
            this.player.sprite.src = this.player.animeSet.death.img
            this.player.sprite.frames = this.player.animeSet.death.frames
            this.player.sprite.idx = 0
            this.player.action = "death"

        }
        if (this.player.action == "death") {
            setTimeout(() => {
                this.status = "dead"
            }, 650)
        }
        if (this.status == "dead") {
            confirm("Reintentar?") ? this.reset() : window.close()
        }
    }

}