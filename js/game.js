const Game = {
    canvas: undefined,
    ctx: undefined,

    width: undefined,
    height: undefined,

    fps: 1,
    interval: undefined,

    player: undefined,
    playerimg: {

    },

    enemies: [],
    enemiesType: [],

    background: undefined,
    backgroundimg: "img/background/background.png",

    init(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")

        this.width = window.innerWidth
        this.height = window.innerHeight

        console.log(this.width, this.height)

        this.canvas.width = this.width
        this.canvas.height = this.height

        this.start()
    },

    start() {


        this.reset()
        this.engine()
    },

    reset() {
        this.enemies = []
        this.player = new Player(this.ctx, this.playerimg, this.width, this.height)
        this.background = new Background(this.ctx, this.backgroundimg, this.width, this.height)

    },


    engine() {

        this.interval = setInterval(() => {
            this.clearScreen()
            this.moveAll()
            this.drawAll()
        }, this.fps / 60)
    },

    moveAll() {


    },

    clearScreen() {

        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll() {

        this.background.draw()
        this.enemies.forEach(elm => elm.draw())
        this.player.draw()

    },

    random() {

        return Math.random()
    }

}