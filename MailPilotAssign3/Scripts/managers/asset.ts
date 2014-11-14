module managers {
    var manifest = [
        { id: "ocean", src: "assets/images/ocean.gif" },
        { id: "game_background", src: "assets/images/ocean2.png" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" },
        { id: "space_shot", src: "assets/sounds/space_shot.wav" },
        { id: "boss_engine", src: "assets/sounds/boss_engine.wav" },
        { id: "boss_explosion", src: "assets/sounds/boss_explosion.wav" },
        { id: "enemy_engine", src: "assets/sounds/enemy_engine.wav" },
        { id: "enemy_explosion", src: "assets/sounds/enemy_explosion.wav" },
        { id: "enemy_shot", src: "assets/sounds/enemy_shot.wav" },
        { id: "space_engine", src: "assets/sounds/space_engine.wav" },
        { id: "space_explosion", src: "assets/sounds/space_explosion.wav" },
        { id: "space_shot", src: "assets/sounds/space_shot.wav" },
        { id: "space_powerup", src: "assets/sounds/space_powerup.wav" },
        { id: "background", src: "assets/sounds/background.mp3" },
    ];
    
    var spriteSheetData = {
        "images": ["assets/images/blueprint.png"],
        "frames": [

            [2, 205, 127, 25],
            [131, 205, 127, 25],
            [260, 205, 127, 25],
            [388, 178, 25, 12],
            [2, 2, 384, 201],
            [389, 192, 32, 32],
            [388, 2, 140, 93],
            [389, 97, 127, 25],
            [389, 151, 122, 25],
            [389, 124, 127, 25]
        ],
        "animations": {

            "black_instructions": [0],
            "black_start": [1],
            "black_tryagain": [2],
            "bullet": [3],
            "cloud": [4],
            "island": [5],
            "plane": [6],
            "white_instructions": [7],
            "white_start": [8],
            "white_tryagain": [9]
        },
    }
export class assets {

        public static loader;
        public static atlas: createjs.SpriteSheet;




        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(manifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

   
    }
} 