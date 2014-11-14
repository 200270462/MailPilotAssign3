/// <reference path="../managers/asset.ts" />
module objects {
    // Bullet Class
    export class Bullet {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        bulletSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.assets.atlas, "bullet");
            this.image.x = stage.canvas.width;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            game.addChild(this.image);
        }

        update() {
            if (this.image.x > 0 && stage.canvas.width + this.width > this.image.x) {
                this.image.x += constants.BULLET_SPEED;
            } else {
                //this.destroy();
            }
        }

        reset(x: number, y: number) {
            this.bulletSound = createjs.Sound.play('space_shot');
            this.image.x = x;
            this.image.y = y;
        }

        destroy() {
            this.bulletSound.stop();
            this.image.x = -600;
        }
    }
}  