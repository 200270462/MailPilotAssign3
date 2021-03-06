﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/content.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/gameover.ts"/>

// Mail Pilot Version 11 - Added basic state machine structure - Added Button and Label classes
// Changed online repo

var stage: createjs.Stage;
var game: createjs.Container;

var ocean: objects.Ocean;
var plane: objects.Plane;
var island: objects.Island;
var clouds = []; // Clouds array;
var bullets = []; // Bullets array;
var bulletWasShot: boolean = false;
var bulletTurn: number = 0;
var scoreboard: objects.Scoreboard;

var collision: managers.Collision;

var tryAgain: objects.Button;
var playButton: objects.Button;
var instructionsButton: objects.Button;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.assets.init();
    managers.assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    createjs.Sound.play('background', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    stage.addEventListener("click", bulletShot);

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

function bulletShot(event: MouseEvent): void {
    if (currentState == constants.PLAY_STATE) {
        bulletWasShot = true;
    }

}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
        MediaSource.apply;
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentState = constants.MENU_STATE;
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentState = constants.PLAY_STATE;
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            currentState = constants.GAME_OVER_STATE;
            states.gameOver();
            break;

        case constants.INSTRUCTIONS_STATE:
            currentState = constants.INSTRUCTIONS_STATE;
            currentStateFunction = states.instructionsState;
            states.instructions();
            break;
    }
}





