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

            this.player.idle(this.counter)

            this.counter++
        },1000/ this.fps)
    },

    // moveAll() {

    // },

    clearScreen() {

        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll() {

        this.background.draw()
        this.enemies.forEach(elm => elm.draw())

    },

    random() {

        return Math.random()
    }

}