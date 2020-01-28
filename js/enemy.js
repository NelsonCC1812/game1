class Enemy extends npc {

    constructor(ctx, animeSet, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.speed = 5
        this.posX = gameW
        this.posY = gameH * .93 - this.height

        this.sprite.src = this.animeSet.walk.img
        this.sprite.frames = this.animeSet.walk.frames
        this.sprite.idx = 0

    }

    move() {

        this.posX -= this.speed
    }




}