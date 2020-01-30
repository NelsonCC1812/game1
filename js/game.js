const Game = {
    canvas: undefined,
    ctx: undefined,
    btn: undefined,

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
    hit: false,
    enemiesCounter: 0,
    enemiesObjetive: 1,
    enginei: undefined,
    status: "starting",
    music: [
        "music/music1.mp3",
        "music/music2.mp3",
        "music/music3.mp3",
        "music/music4.mp3"
    ],

    init(canvas, btn, enemies) {


        this.canvas = canvas
        this.ctx = canvas.getContext("2d")

        this.btn = btn
        if (enemies) this.enemiesObjetive = enemies

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
        this.warMusic = document.createElement("audio")
        this.warMusic.src = this.music[Math.floor(Math.random() * this.music.length)]
        this.warMusic.volume = 0
        this.warMusic.play()

        let sound = document.createElement("audio")
        sound.src = "sounds/planet-secret.wav"
        sound.volume = .4
        sound.play()


        this.status = "playing"
        this.enemies = []
        this.player = new Player(this.ctx, playerAnimations, this.controls, this.width, this.height)
        this.background = new Background(this.ctx, this.backgroundimg, this.width, this.height)
        this.player.setListeners()

        counter = 0

    },


    engine() {



        this.enginei = setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.player.showHealth()
            this.moveAll()
            this.enemiesHealth()
            this.checkAll()
            this.checkInvoke()
            this.enemiesHealth()
            this.checkHealth()
            this.player.drawSythe(this.counter)
            this.invokeShow()
            this.enemiesCountShow()

            if (this.warMusic.volume < .5) this.warMusic.volume++

            if (this.player.sythe) this.checkSythe()


            if (this.counter % 70 == 0) {
                this.enemies.push(new Enemy(this.ctx, this.counter, skeletonAnimations, this.width, this.height))
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

                this.enemiesCounter++
                this.enemies.splice(idx, 1)

                // setTimeout(() => {

                // }, 300)
            }
        })
        if (this.enemiesCounter >= this.enemiesObjetive) this.win()
    },

    checkAll() {

        this.enemies.forEach((elm, idx) => {

            if (elm.posX <= this.player.posX - 70 + this.player.width && !elm.process && elm.health > 0) {
                elm.process = true
                setTimeout(() => {
                    if (elm.posX <= this.player.posX - 70 + this.player.width && this.player.action != "block" && !this.hit) {
                        this.player.receibeDamage(elm.damage)
                        let sound = document.createElement("audio")
                        sound.src = "sounds/heart-beat.wav"
                        sound.volume = .4
                        sound.play()
                        this.hit = true
                        setTimeout(() => {
                            this.hit = false
                        }, 1000)
                        console.log("hit")
                    }
                }, 820)
                elm.process = false
            }

            //Enemies damage counters
            if (this.player.action == "attack" && elm.health > 0 && !this.player.process) {

                this.player.process = true
                setTimeout(() => {

                    this.enemies.forEach(elm2 => {
                        if (this.player.posX + this.player.width >= elm2.posX - 20) {
                            elm2.receibeDamage(this.player.damage)
                        }
                    })

                    this.player.process = false
                }, 200)
            }

            //Enemies Animations

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

    invokeShow() {
        this.ctx.font = "18px Arial"
        if (this.player.invoke) {
            this.ctx.fillStyle = "green"
            this.ctx.fillText("Invoke Ready", 10, 40)
        } else {
            this.ctx.fillStyle = "black"
            this.ctx.fillText("Invoke Refreshing", 10, 40)


        }

    },

    enemiesCountShow() {

        this.ctx.font = "20px Arial"
        this.ctx.fillStyle = "blue"
        this.ctx.fillText(this.enemiesObjetive - this.enemiesCounter, this.width * .90, 40)

    },

    checkInvoke() {
        if (this.player.action === "invoke" && !this.player.process && this.player.invoke) {
            this.player.process = true
            this.player.invoke = false

            this.enemies.forEach(elm => elm.posX += 400)
            setTimeout(() => {

                this.player.invoke = true

            }, 5000)
            setTimeout(() => {
                this.player.process = false

            }, 1000)

        }
    },

    checkSythe() {

        this.enemies.forEach(elm => {
            if (elm.posX <= this.player.sythe.posX + this.player.sythe.width && !elm.sytheHit) {
                elm.receibeDamage(this.player.sythe.damage)
                this.player.sythe.count++
            }
        })

        if (this.player.sythe.count >= this.player.sythe.maxPass || this.player.sythe.posX >= this.width) this.player.destroySythe()
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

            clearInterval("engine1")
            this.ctx.fillStyle = "white"
            this.ctx.fillText("You Have Died!!", this.width / 2 - 60, this.height / 2 - 100)


            this.btn.innerText = "Restart?"
            this.btn.classList.remove("invisible")

            this.btn.onclick = () => {
                this.btn.classList.add("invisible")
                this.enemiesCounter = 0
                this.warMusic.pause()
                this.start()
            }
        }
    },

    win() {

        this.fps *= .50

        clearInterval(this.enginei)

        setTimeout(() => {
            this.status = "win"

            this.winWindow()
        }, 1000)

    },

    winWindow() {
        this.ctx.fillStyle = "white"
        this.ctx.fillText("You Have Won!!", this.width / 2 - 60, this.height / 2 - 100)


        this.btn.innerText = "Restart"
        this.btn.classList.remove("invisible")

        this.btn.onclick = () => {
            this.btn.classList.add("invisible")
            this.enemiesCounter = 0
            this.warMusic.pause()
            this.start()
        }

    }

}