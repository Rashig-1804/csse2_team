---
layout: post
codemirror: true
title: My Game Builder FA3
description: Formative 3 - Asset Management and Custom Level.
permalink: /search/mygame
---

{% capture challenge1 %}
Run the game. Use WASD to move your Astronaut around the new space background!
{% endcapture %}

{% capture code1 %}
// 1. Core Imports
import GameControl from '/assets/js/GameEnginev1/essentials/GameControl.js';
import GameEnvBackground from '/assets/js/GameEnginev1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1/essentials/Player.js';

class CustomLevel {
  constructor(gameEnv) {
    const path = gameEnv.path;
    
    // 2. Your NEW Background (.jpeg)
    const bgData = {
        name: 'custom_bg',
        src: path + "/images/gamebuilder/bg/my_custom_bg.jpeg",
        pixels: { height: 1080, width: 1920 }
    };

    // 3. Your Astronaut Player
    const playerData = {
      id: 'Astro',
      src: path + "/images/gamebuilder/sprites/astro.png",
      SCALE_FACTOR: 5,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 100, y: 300 },
      pixels: { height: 770, width: 513 },
      orientation: { rows: 4, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    this.classes = [
      { class: GameEnvBackground, data: bgData },
      { class: Player, data: playerData },
    ];
  }
}
export const gameLevelClasses = [CustomLevel];
export { GameControl };
{% endcapture %}

{% include game-runner.html
   runner_id="game1"
   challenge=challenge1
   code=code1
   height="600px"
%}
