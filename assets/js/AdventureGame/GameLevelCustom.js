import GameEnvBackground from '/assets/js/GameEnginev1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1/essentials/Npc.js';
import Barrier from '/assets/js/GameEnginev1/essentials/Barrier.js';

class GameLevelCustom {
    constructor(gameEnv) {
        const path = gameEnv.path;

        // YOUR NEW BACKGROUND (.jpeg)
        const bgData = {
            name: "my_custom_bg",
            src: path + "/images/gamebuilder/bg/my_custom_bg.jpeg", 
            pixels: { height: 1080, width: 1920 }
        };

        // THE ASTRONAUT (Fixed Rows)
        const playerData = {
            id: 'playerData',
            src: path + "/images/gamebuilder/sprites/astro.png", 
            SCALE_FACTOR: 5,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 100, y: 400 },
            pixels: { height: 770, width: 513 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 }, 
            left: { row: 2, start: 0, columns: 3 },  
            up: { row: 3, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }
        };

        this.classes = [
            { class: GameEnvBackground, data: bgData },
            { class: Player, data: playerData }
        ];
    }
}

export default GameLevelCustom;
