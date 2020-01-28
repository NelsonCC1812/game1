class Player extends npc {

    constructor(ctx, animeSet, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.speed = undefined

        this.width = 120
        this.height = 150

        this.posYO = this.posY - this.width

        this.animeBlock = new Image()
        this.animeBlock.src = this.animeSet.block.img
        this.animeBlock.frames = this.animeSet.block.frames
        this.animeBlock.idx = 0



        this.animeThrow = new Image()
        this.animeThrow.src = this.animeSet.throw.img
        this.animeThrow.frames = this.animeSet.throw.frames
        this.animeThrow.idx = 0

        this.animeInvoke = new Image()
        this.animeInvoke.src = this.animeSet.invoke.img
        this.animeInvoke.frames = this.animeSet.invoke.frames
        this.animeInvoke.idx = 0

    }


    block(counter) {
        this.ctx.drawImage(
            this.animeBlock,
            this.animeBlock.idx * Math.floor(this.animeBlock.width / this.animeBlock.frames),
            0,
            Math.floor(this.animeBlock.width / this.animeBlock.frames),
            this.animeBlock.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(counter, this.animeBlock)



    }

    invoke(counter) {



        this.ctx.drawImage(
            this.animeInvoke,
            this.animeInvoke.idx * Math.floor(this.animeInvoke.width / this.animeInvoke.frames),
            0,
            Math.floor(this.animeInvoke.width / this.animeInvoke.frames),
            this.animeInvoke.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(counter, this.animeInvoke)



    }

    throw (counter) {


        this.ctx.drawImage(
            this.animeThrow,
            this.animeThrow.idx * Math.floor(this.animeThrow.width / this.animeThrow.frames),
            0,
            Math.floor(this.animeThrow.width / this.animeThrow.frames),
            this.animeThrow.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(counter, this.animeThrow)


    }

}