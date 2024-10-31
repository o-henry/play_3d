import { Scene } from "phaser";

export class Otter {
  private sprite: Phaser.Physics.Arcade.Sprite;
  private lastMoveTime: number = 0;

  constructor(private scene: Scene) {
    this.sprite = this.scene.physics.add
      .sprite(40, 228, "otter0")
      .play("sleep");
    this.sprite.setDisplaySize(94, 94);
    this.sprite.setBounce(0.2);
    this.sprite.setCollideWorldBounds(true);
  }

  setAnimationKeys() {
    const anims = [
      {
        key: "sleep",
        frames: [
          "otter0",
          "otter1",
          "otter2",
          "otter3",
          "otter4",
          "otter5",
          "otter6",
          "otter7",
          "otter8",
        ],
        frameRate: 9,
        repeat: -1,
      },
      {
        key: "move_right",
        frames: [
          "otter_run_0",
          "otter_run_1",
          "otter_run_2",
          "otter_run_3",
          "otter_run_4",
        ],
        frameRate: 5,
        repeat: -1,
      },
      {
        key: "jumping",
        frames: [
          "otter_jump_0",
          "otter_jump_1",
          "otter_jump_2",
          "otter_jump_3",
          "otter_jump_4",
          "otter_jump_5",
          "otter_jump_6",
          "otter_jump_7",
          "otter_jump_8",
          "otter_jump_9",
        ],
        frameRate: 10,
        repeat: 0,
      },
      {
        key: "stand",
        frames: [
          "otter_stand_0",
          "otter_stand_1",
          "otter_stand_2",
          "otter_stand_3",
        ],
        frameRate: 4,
        repeat: -1,
      },
    ];

    anims.forEach((anim) =>
      this.scene.anims.create({
        key: anim.key,
        frames: anim.frames.map((frame) => ({ key: frame })),
        frameRate: anim.frameRate,
        repeat: anim.repeat,
      })
    );
  }

  move(direction: "left" | "right") {
    const velocity = direction === "left" ? -300 : 300;
    this.sprite.setVelocityX(velocity);
    this.sprite.play("move_right", true);
    this.sprite.setFlipX(direction === "left");
    this.lastMoveTime = this.scene.time.now;
  }

  jump() {
    if (this.sprite.body.blocked.down || this.sprite.body.touching.down) {
      this.sprite.setVelocityY(-240);
      this.sprite.play("jumping", true);
      this.lastMoveTime = this.scene.time.now;
    }
  }

  idle() {
    this.sprite.setVelocityX(0);
    if (this.scene.time.now - this.lastMoveTime > 1000) {
      // 1초 이상 멈춘 경우
      this.sprite.play("sleep", true);
    } else {
      this.sprite.play("stand", true);
    }
  }

  getPosition() {
    return this.sprite.x;
  }

  setPosition(x: number) {
    this.sprite.x = x;
  }

  getSprite() {
    return this.sprite;
  }
}
