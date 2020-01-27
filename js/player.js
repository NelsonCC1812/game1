class Player extends npc {

    constructor(ctx, animeSet, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.speed = undefined


        this.animeBlock = new Image()
        this.animeBlock.src = animeSet.block.img
        this.animeBlock.frames = animeSet.block.frames
        this.animeBlock.idx = 0



        this.animeThrow = new Image()
        this.animeThrow.src = animeSet.block.img
        this.animeThrow.frames = animeSet.block.frames
        this.animeThrow.idx = 0

    }


    block() {

    }

    invoke() {


    }

    throw () {


    }

}