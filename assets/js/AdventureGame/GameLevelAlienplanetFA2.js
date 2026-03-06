// Adventure Game Custom Level
// Exported from GameBuilder on 2026-03-06T07:31:09.835Z
// How to use this file:
// 1) Save as assets/js/adventureGame/GameLevelAlienplanet2Js.js in your repo.
// 2) Reference it in your runner or level selector. Examples:
//    import GameLevelPlanets from '/assets/js/GameEnginev1/GameLevelPlanets.js';
//    import GameLevelAlienplanet2Js from '/assets/js/adventureGame/GameLevelAlienplanet2Js.js';
//    export const gameLevelClasses = [GameLevelPlanets, GameLevelAlienplanet2Js];
//    // or pass it directly to your GameControl as the only level.
// 3) Ensure images exist and paths resolve via 'path' provided by the engine.
// 4) You can add more objects to this.classes inside the constructor.
// Adventure Game Custom Level
// Exported from GameBuilder on 2026-03-05T09:09:33.517Z


// add java documentation to explain the interaction and collision and where it occurs
import GameEnvBackground from '/assets/js/GameEnginev1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1/essentials/Npc.js';
import Barrier from '/assets/js/GameEnginev1/essentials/Barrier.js';


class GameLevelAlienplanet {
    constructor(gameEnv) {
        const path = gameEnv.path;
        const width = gameEnv.innerWidth;
        const height = gameEnv.innerHeight;

        // background configuration for the alien planet level
        // the background is dark and eerie with a purple hue 
        // it features strange rock formations and a starry sky 

        const bgData = {
            name: "custom_bg",
            src: path + "/images/gamebuilder/bg/alien_planet.jpg",
            pixels: { height: 772, width: 1134 }
        };
        
        // player configuration for the UFO character
        // the UFO has a unique movement pattern with floaty physics
        // it can move in all directions and has a small hitbox for precise navigation
        // animation rate set to 50, to maintain a steady, smooth animation for the player character

        const playerData = {
            id: 'playerData',
            src: path + "/images/gamebuilder/sprites/ufos.png",
            SCALE_FACTOR: 5,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 0, y: 0 },
            pixels: { height: 500, width: 500 },
            orientation: { rows: 4, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },
            downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
            downLeft: { row: 0, start: 0, columns: 3, rotate: -Math.PI/16 },
            left: { row: 2, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
            upRight: { row: 3, start: 0, columns: 3, rotate: -Math.PI/16 },
            hitbox: { widthPercentage: 0, heightPercentage: 0 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }
            };
      
            
        // npc configuration for the astronaut character
        // the astronaut is stranded on the alien planet and needs to be rescued
        

        // animation rate set to 50, to maintain a steady, smooth animation for the NPC
        const npcData1 = {
            id: 'astro',
            greeting: 'Hey! You rescued me!',
            src: path + "/images/gamebuilder/sprites/astro.png",
            SCALE_FACTOR: 8,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 800, y: 374 },
            pixels: { height: 770, width: 513 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            right: { row: Math.min(1, 4 - 1), start: 0, columns: 3 },
            left: { row: Math.min(2, 4 - 1), start: 0, columns: 3 },
            up: { row: Math.min(3, 4 - 1), start: 0, columns: 3 },
            upRight: { row: Math.min(3, 4 - 1), start: 0, columns: 3 },
            downRight: { row: Math.min(1, 4 - 1), start: 0, columns: 3 },
            upLeft: { row: Math.min(2, 4 - 1), start: 0, columns: 3 },
            downLeft: { row: 0, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            dialogues: ['Hey! You rescued me!'],

    
            // the reaction function is called when the player first rescues the astronaut
            // while the interact function is called when the player interacts with the astronaut after rescuing them

            // reaction function to show a message when the astronaut is rescued
            reaction: function() { 
                // Check if the rescue message has already been shown to prevent duplicates
                if (!window.__rescueMsgShown) {
                    window.__rescueMsgShown = true;
                    const msg = document.createElement('div');
                    msg.textContent = 'The astronaut was rescued!';
                    msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.95);color:#00ff00;padding:40px 60px;font-size:36px;font-weight:bold;border:3px solid #00ff00;border-radius:10px;z-index:999999;font-family:monospace;box-shadow:0 0 30px #00ff00;';
                    document.body.appendChild(msg);
                    setTimeout(() => { msg.style.opacity = '0'; msg.style.transition = 'opacity 0.5s'; setTimeout(() => msg.remove(), 500); }, 3000);
                }
                if (this.dialogueSystem) { this.showReactionDialogue(); } 
            },
            // interact function to show a message when the player interacts with the astronaut after rescuing them
            interact: function() { 
                if (!window.__rescueMsgShown) {
                    window.__rescueMsgShown = true;
                    const msg = document.createElement('div');
                    msg.textContent = 'The astronaut was rescued!';
                    msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.95);color:#00ff00;padding:40px 60px;font-size:36px;font-weight:bold;border:3px solid #00ff00;border-radius:10px;z-index:999999;font-family:monospace;box-shadow:0 0 30px #00ff00;';
                    document.body.appendChild(msg);
                    setTimeout(() => { msg.style.opacity = '0'; msg.style.transition = 'opacity 0.5s'; setTimeout(() => msg.remove(), 500); }, 3000);
                }
                if (this.dialogueSystem) { this.showRandomDialogue(); } 
            }
        };
        // the reaction function is designed to trigger a special message 
        // when the player first rescues the astronaut, providing immediate feedback and a sense of accomplishment. 
        
        // The interact function allows for ongoing interaction with the NPC, showing different dialogues to keep the experience fresh and engaging.


        // barrier configuration for the invisible barriers in the level
        const dbarrier_1 = {
            id: 'dbarrier_1', x: 591, y: 3, width: 133, height: 279, visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const dbarrier_2 = {
            id: 'dbarrier_2', x: 15, y: 247, width: 222, height: 96, visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const dbarrier_3 = {
            id: 'dbarrier_3', x: 88, y: 201, width: 14, height: 36, visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };
this.classes = [      { class: GameEnvBackground, data: bgData },
      { class: Player, data: playerData },
      { class: Npc, data: npcData1 },
      { class: Barrier, data: dbarrier_1 },
      { class: Barrier, data: dbarrier_2 },
      { class: Barrier, data: dbarrier_3 }
];

    }
}

export const gameLevelClasses = [GameLevelAlienplanet];