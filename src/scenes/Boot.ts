import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

    // foods
    this.load.image("hotdog", "assets/foods/56_hotdog_dish.png");
    this.load.image("cookie", "assets/foods/29_cookies_dish.png");
    this.load.image("pudding", "assets/foods/76_pudding_dish.png");
    this.load.image("pizza", "assets/foods/82_pizza_dish.png");
    this.load.image("cabbage", "assets/foods/cabbage.png");
    this.load.image("duck", "assets/foods/rubber_duck.png");
    this.load.image("soap", "assets/foods/soap.png");
    this.load.image("vegetable", "assets/foods/vegetable.png");
    this.load.image("bell_pepper", "assets/foods/bell_pepper.png");

    // keyboard
    this.load.image("key_a", "assets/guide/a_4x.png");
    this.load.image("key_d", "assets/guide/d_4x.png");
    this.load.image("key_space", "assets/guide/space_md_4x.png");
    this.load.image("key_q", "assets/guide/q_4x.png");
    this.load.image("left_click", "assets/guide/LeftClick-Blue_4x.png");

    // bg
    this.load.image("1", "assets/winter_bg/1.png");
    this.load.image("2", "assets/winter_bg/2.png");
    this.load.image("3", "assets/winter_bg/3.png");
    this.load.image("4", "assets/winter_bg/4.png");
    this.load.image("5", "assets/winter_bg/5.png");
    this.load.image("6", "assets/winter_bg/6.png");
    this.load.image("7", "assets/winter_bg/7.png");
    this.load.image("8", "assets/winter_bg/8.png");
    this.load.image("9", "assets/winter_bg/9.png");
    this.load.image("10", "assets/winter_bg/10.png");
    this.load.image("11", "assets/winter_bg/11.png");
    this.load.image("12", "assets/winter_bg/12.png");
    this.load.image("13", "assets/winter_bg/13.png");
    this.load.image("14", "assets/winter_bg/14.png");
    this.load.image("15", "assets/winter_bg/15.png");
    this.load.image("16", "assets/winter_bg/16.png");
    this.load.image("christmas_tree", "assets/winter_bg/christmas_tree.png");
    this.load.image("wn_house", "assets/winter_bg/wn_house.png");
    this.load.image("mid-layer-a", "assets/winter_bg/mid-layer-a.png");
    this.load.image("mountain", "assets/winter_bg/Mountain_12.png");
    this.load.image("mountain_7", "assets/winter_bg/Mountain_7.png");

    // Load the assets for the game - Replace with your own assets
    // otter
    // sleep
    this.load.setPath("assets/character/otter");
    this.load.image("otter0", "sleep/tile000.png");
    this.load.image("otter1", "sleep/tile001.png");
    this.load.image("otter2", "sleep/tile002.png");
    this.load.image("otter3", "sleep/tile003.png");
    this.load.image("otter4", "sleep/tile004.png");
    this.load.image("otter5", "sleep/tile005.png");
    this.load.image("otter6", "sleep/tile006.png");
    this.load.image("otter7", "sleep/tile007.png");
    this.load.image("otter8", "sleep/tile008.png");

    // running
    this.load.image("otter_run_0", "running/tile000.png");
    this.load.image("otter_run_1", "running/tile001.png");
    this.load.image("otter_run_2", "running/tile002.png");
    this.load.image("otter_run_3", "running/tile003.png");
    this.load.image("otter_run_4", "running/tile004.png");

    // jumping
    this.load.image("otter_jump_0", "jumping/tile000.png");
    this.load.image("otter_jump_1", "jumping/tile001.png");
    this.load.image("otter_jump_2", "jumping/tile002.png");
    this.load.image("otter_jump_3", "jumping/tile003.png");
    this.load.image("otter_jump_4", "jumping/tile004.png");
    this.load.image("otter_jump_5", "jumping/tile005.png");
    this.load.image("otter_jump_6", "jumping/tile006.png");
    this.load.image("otter_jump_7", "jumping/tile007.png");
    this.load.image("otter_jump_8", "jumping/tile008.png");
    this.load.image("otter_jump_9", "jumping/tile009.png");

    // standing
    this.load.image("otter_stand_0", "standing/tile000.png");
    this.load.image("otter_stand_1", "standing/tile001.png");
    this.load.image("otter_stand_2", "standing/tile002.png");
    this.load.image("otter_stand_3", "standing/tile003.png");

    // attack
    this.load.image("otter_attack_0", "attack/tile000.png");
    this.load.image("otter_attack_1", "attack/tile001.png");
    this.load.image("otter_attack_2", "attack/tile002.png");
    this.load.image("otter_attack_3", "attack/tile003.png");
    this.load.image("otter_attack_4", "attack/tile004.png");
    this.load.image("otter_attack_5", "attack/tile005.png");
    this.load.image("otter_attack_6", "attack/tile006.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}
