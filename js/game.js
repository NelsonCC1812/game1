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
        k: 75
    },
    action: false,

    init(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")

        this.setListeners()
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
        this.enemies = []
        this.player = new Player(this.ctx, playerAnimations, this.width, this.height)
        this.background = new Background(this.ctx, this.backgroundimg, this.width, this.height)

        counter = 0

    },


    engine() {

        this.interval = setInterval(() => {
            // this.clearScreen()
            // this.moveAll()
            this.drawAll()



            if (this.counter % 40 == 0) {
                let obj = new Enemy(this.ctx, skeletonAnimations, this.width, this.height)
                this.enemies.push(obj)
            }

            this.counter++
        }, 1000 / this.fps)
    },

    clearScreen() {

        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll() {

        this.background.draw()
        this.enemies.forEach(elm => elm.idle())

        if (!this.action) this.player.idle(this.counter, this.action)
        else this.action = false
    },

    random() {

        return Math.random()
    },

    setListeners() {
        document.onkeydown = (e) => {



            switch (e.keyCode) {
                case this.controls.j:
                    this.action = "attack"
                    this.action = this.player.attack(this.counter, this.action);
                    console.log(this.action)
                    break;
                case this.controls.d:
                    this.player.walk(this.counter, this.action);
                    break;
                case this.controls.s:
                    this.player.block(this.counter, this.action);
                    break;
                case this.controls.space:
                    this.player.invoke(this.counter, this.action);
                    break;
                case this.controls.k:
                    this.player.throw(this.counter, this.action);
                    break;

            }
        }


    }

}