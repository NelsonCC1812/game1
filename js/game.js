const Game={
    canvas: undefined,
    ctx: undefined,

    width: undefined,
    heigth: undefined,

    fps: 60,
    interval: undefined,

    player: undefined,
    playerimg: {

    },

    enemies: [],
    enemiesType: [],

    background: undefined,

    init(canvas){
    
        this.canvas= canvas
        this.ctx= canvas.getContext("2d")

        this.width= window.innerWidth
        this.heigth= window.innerHeight

        this.canvas.width= this.width
        this.canvas.heigth= this.heigth

        this.start()
    },

    start(){


        this.reset()
        this.engine()
    },

    reset(){
        this.enemies=[]
        this.player= new Player(this.ctx, this.playerimg , this.width, this.heigth)
        this.background= new Background(this.ctx, this.width, this.heigth)

    },


    engine(){
        
        this.interval= setInterval(()=>{

            drawAll()
        },this.fps/60)
    },

    moveAll(){


    },

    drawAll(){


    }

}