class Enemy extends npc {

    constructor(ctx, animeSet, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.speed = 5
        this.posX = gameW

    }

    move() {

        this.posX -= this.speed
    }




}