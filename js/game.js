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
        this.enemies = []
        this.player = new Player(this.ctx, playerAnimations, this.controls, this.width, this.height)
        this.background = new Background(this.ctx, this.backgroundimg, this.width, this.height)
        this.player.setListeners()

        counter = 0

    },


    engine() {

        this.interval = setInterval(() => {
            this.clearScreen()
            this.moveAll()
            this.drawAll()


            if (this.counter % 50 == 0) {
                this.enemies.push(new Enemy(this.ctx, skeletonAnimations, this.width, this.height))
                console.log(this.enemies[0].posY)
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
    }


}