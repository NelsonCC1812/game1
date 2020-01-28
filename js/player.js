class Player extends npc {

    constructor(ctx, animeSet, controls, gameW, gameH) {

        super(ctx, animeSet, gameW, gameH)

        this.speed = undefined
        this.posY = gameH * .75

        this.width = 120
        this.height = 150
        this.controls = controls


    }
    setListeners() {
        document.onkeydown = (e) => {

            switch (e.keyCode) {

                case this.controls.j:

                    this.sprite.src = this.animeSet.attack.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.attack.frames
                    this.height = 240
                    this.width = 180
                    this.posY = this.gameH * .95 - this.height
                    break;

                case this.controls.d:

                    this.sprite.src = this.animeSet.walk.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.walk.frames
                    this.height = 150
                    this.width = 100
                    this.posY = this.gameH * .94 - this.height
                    break;

                case this.controls.s:

                    this.sprite.src = this.animeSet.block.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.block.frames
                    this.height = 150
                    this.width = 100
                    this.posY = this.gameH * .94 - this.height

                    break;
                case this.controls.space:

                    this.sprite.src = this.animeSet.invoke.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.invoke.frames
                    this.height = 180
                    this.width = 120
                    this.posY = this.gameH * .94 - this.height

                    break;
                case this.controls.k:

                    this.sprite.src = this.animeSet.throw.img
                    this.sprite.idx = 0
                    this.sprite.frames = this.animeSet.throw.frames
                    this.height = 200
                    this.width = 180
                    this.posY = this.gameH * .94 - this.height


                    break;

            }
        }


    }
}