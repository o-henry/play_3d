import { Scene } from "phaser";

export class Preloader extends Scene {
  private backgrounds: {
    sprite: Phaser.GameObjects.TileSprite;
    speed: number;
  }[];
  private otter: Phaser.Physics.Arcade.Sprite;

  // 방향키를 감지할 키를 추가하기!
  private leftKey: Phaser.Input.Keyboard.Key | null = null;
  private rightKey: Phaser.Input.Keyboard.Key | null = null;
  private spaceKey: Phaser.Input.Keyboard.Key | null = null;

  constructor() {
    super("Preloader");
    this.backgrounds = []; // 초기화
  }

  init() {
    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);
    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress: number) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
    this.input.keyboard.createCursorKeys();
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
  }

  create() {
    const { width, height } = this.scale;

    const fixed_bg = this.add.image(0, 0, "1");
    fixed_bg.setOrigin(0, 0.35);
    const scaleX = width / fixed_bg.width;
    const scaleY = height / fixed_bg.height;
    const scale = Math.max(scaleX, scaleY);
    fixed_bg.setScale(scale).setScrollFactor(0);

    const layer_one = ["3", "4"];
    const layer_two = ["5", "6", "7", "8"];
    const layer_three = ["9", "10", "11", "12"];
    const layer_four = ["13"];
    const layer_five = ["14", "15", "16"];

    const addLayer = (keys: string[], speed: number) => {
      keys.forEach((key) => {
        const bg = this.add.tileSprite(0, 0, width, height, key);
        bg.setOrigin(0, 0);
        bg.setScrollFactor(0, 0);
        bg.setDisplaySize(width, height); // 이미지 크기를 화면 크기로 설정합니다
        this.backgrounds.push({ sprite: bg, speed });
      });
    };

    addLayer(layer_one, 0.2); // 레이어 1
    addLayer(layer_two, 0.4); // 레이어 2
    addLayer(layer_three, 0.8); // 레이어 3
    addLayer(layer_four, 0.9); // 레이어 4
    addLayer(layer_five, 2); // 레이어 5 (가장 빠름)

    /// sleep
    this.anims.create({
      key: "sleep",
      frames: [
        { key: "otter0" },
        { key: "otter1" },
        { key: "otter2" },
        { key: "otter3" },
        { key: "otter4" },
        { key: "otter5" },
        { key: "otter6" },
        { key: "otter7" },
        { key: "otter8", duration: 50 },
      ],
      frameRate: 9,
      repeat: -1,
    });

    /// move_right
    this.anims.create({
      key: "move_right",
      frames: [
        { key: "otter_run_0" },
        { key: "otter_run_1" },
        { key: "otter_run_2" },
        { key: "otter_run_3" },
        { key: "otter_run_4", duration: 50 },
      ],
      frameRate: 5,
      repeat: -1,
    });

    // jump
    this.anims.create({
      key: "jump",
      frames: [
        { key: "otter_jump_0" },
        { key: "otter_jump_1" },
        { key: "otter_jump_2" },
        { key: "otter_jump_3" },
        { key: "otter_jump_4" },
        { key: "otter_jump_5" },
        { key: "otter_jump_6" },
        { key: "otter_jump_7" },
        { key: "otter_jump_8" },
        { key: "otter_jump_9", duration: 50 },
      ],
      frameRate: 10,
      repeat: -1,
    });

    this.otter = this.physics.add.sprite(40, 228, "otter0").play("sleep");
    this.otter.setDisplaySize(94, 94);

    // 사용할 키를 추가해줍니다.
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.rightKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
    this.spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  update() {
    const { width } = this.scale;

    if (this.otter) {
      // 수달 캐릭터 이동
      if (this.leftKey?.isDown) {
        this.otter.setVelocityX(-100);
        this.otter.play("move_right", true);
        this.otter.setFlipX(true);
        this.backgrounds.forEach((bg) => {
          bg.sprite.tilePositionX -= bg.speed * 2; // 배경을 오른쪽으로 이동
        });
      } else if (this.rightKey?.isDown) {
        this.otter.setVelocityX(100);
        this.otter.play("move_right", true);
        this.otter.setFlipX(false);
        this.backgrounds.forEach((bg) => {
          bg.sprite.tilePositionX += bg.speed * 2; // 배경을 왼쪽으로 이동
        });
      } else {
        this.otter.setVelocityX(0);
        this.otter.play("sleep", true);
      }
      // 스페이스바를 눌렀을 때 점프
      if (this.spaceKey?.isDown && this.otter.body.touching.down) {
        this.otter.play("jump", true);
        this.otter.setVelocityY(-300);
      }

      // 화면 밖으로 못 나가게 하기
      if (this.otter.x < 0) {
        this.otter.x = 0;
      } else if (this.otter.x > width - this.otter.displayWidth) {
        this.otter.x = width - this.otter.displayWidth;
      }
    }
  }
}
