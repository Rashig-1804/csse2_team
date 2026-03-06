import GameEnvBackground from '/assets/js/GameEnginev1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1/essentials/Npc.js';
import Barrier from '/assets/js/GameEnginev1/essentials/Barrier.js';

/**
 * @class GameLevelCustom
 * @description FA1: Space Kingdom Mini-Game.
 * Includes a cloud background, an astronaut player with floaty physics,
 * a decorative astronaut NPC, and a custom collision barrier.
 */
class GameLevelCustom {
    constructor(gameEnv) {
        const path = gameEnv.path;

        /** @type {Object} bgData - Included: One Background (Clouds) */
        const bgData = {
            name: "custom_bg",
            src: path + "/images/gamebuilder/bg/clouds.jpg",
            pixels: { height: 720, width: 1280 }
        };

        /** @type {Object} playerData - Included: One Player (Astronaut) with custom speed and rotation */
        const playerData = {
            id: 'playerData',
            src: path + "/images/gamebuilder/sprites/astro.png",
            SCALE_FACTOR: 5,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 100, y: 300 },
            pixels: { height: 770, width: 513 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
            downLeft: { row: 0, start: 0, columns: 3, rotate: -Math.PI/16 },
            left: { row: 1, start: 0, columns: 3 },
            right: { row: 2, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
            upRight: { row: 3, start: 0, columns: 3, rotate: -Math.PI/16 },
            hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
            // Controls disabled for FA1 baseline
            keypress: { up: null, left: null, down: null, right: null }
        };

        /** @type {Object} npcData1 - Included: One NPC (Astronaut) */
        const npcData1 = {
            id: 'Astronaut1',
            src: path + "/images/gamebuilder/sprites/astro.png",
            SCALE_FACTOR: 4,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 500, y: 300 },
            pixels: { height: 770, width: 513 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            right: { row: Math.min(1, 4 - 1), start: 0, columns: 3 },
            left: { row: Math.min(2, 4 - 1), start: 0, columns: 3 },
            up: { row: Math.min(3, 4 - 1), start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            greeting: "",
            dialogues: []
        };

        /** @type {Object} dbarrier_1 - Included: One Barrier for collision testing */
        const dbarrier_1 = {
            id: 'dbarrier_1', 
            x: 315, 
            y: 42, 
            width: 228, 
            height: 117, 
            visible: true,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        this.classes = [
            { class: GameEnvBackground, data: bgData },
            { class: Player, data: playerData },
            { class: Npc, data: npcData1 },
            { class: Barrier, data: dbarrier_1 }
        ];

        /* BUILDER_ONLY_START */
        try {
            setTimeout(() => {
                try {
                    const objs = Array.isArray(gameEnv?.gameObjects) ? gameEnv.gameObjects : [];
                    const summary = objs.map(o => ({ cls: o?.constructor?.name || 'Unknown', id: o?.canvas?.id || '', z: o?.canvas?.style?.zIndex || '' }));
                    if (window && window.parent) window.parent.postMessage({ type: 'rpg:objects', summary }, '*');
                } catch (_) {}
            }, 250);
        } catch (_) {}
        /* BUILDER_ONLY_END */
    }
}

export const gameLevelClasses = [GameLevelCustom];