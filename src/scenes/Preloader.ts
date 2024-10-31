import { Scene } from "phaser";
import { Otter } from "../layer/otter";
import { BackgroundLayer } from "../layer/background";
import { addInstructionTexts } from "../layer/instruction";

export class Preloader extends Scene {
  private leftKey: Phaser.Input.Keyboard.Key | null = null;
  private rightKey: Phaser.Input.Keyboard.Key | null = null;
  private spaceKey: Phaser.Input.Keyboard.Key | null = null;

  private otter: Otter;

  private backgroundLayers: BackgroundLayer[] = [];
  private instructions: Phaser.GameObjects.Image[] = [];
  private instructionTexts: Phaser.GameObjects.Text[] = []; // 키보드 설명 텍스트를 위한 배열
  private backgroundOverlay: Phaser.GameObjects.Graphics; // 어두운 배경 오버레이

  constructor() {
    super("Preloader");
    this.handleInput = this.handleInput.bind(this); // handleInput 메서드를 바인딩
  }

  init() {
    const progressBar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);
    this.load.on("progress", (progress: number) => {
      progressBar.width = 4 + 460 * progress;
    });
    this.input.keyboard.createCursorKeys();
  }

  preload() {
    // Load the assets for the game - Replace with your own assets
  }

  create() {
    /// 배경 설정
    const { width, height } = this.scale;

    const fixed_bg = this.add.image(0, 0, "1");
    fixed_bg.setOrigin(0, 0.35);
    const scaleX = width / fixed_bg.width;
    const scaleY = height / fixed_bg.height;
    const scale = Math.max(scaleX, scaleY);
    fixed_bg.setScale(scale).setScrollFactor(0);

    const layers = [
      { keys: ["3", "4"], speed: 0.2, depth: 0 },
      { keys: ["5", "6", "7", "8"], speed: 0.4, depth: 1 },
      { keys: ["9", "10", "11", "12"], speed: 0.8, depth: 2 },
      { keys: ["13"], speed: 0.9, depth: 2 },
      { keys: ["christmas_tree"], speed: 0.8, depth: 3 },
      { keys: ["14", "15", "16"], speed: 2, depth: 4 },
    ];

    layers.forEach((layer) => {
      const bgLayer = new BackgroundLayer(
        this,
        layer.keys,
        layer.speed,
        layer.depth
      );
      this.backgroundLayers.push(bgLayer);
    });

    /// otter 초기화
    this.otter = new Otter(this);
    this.otter.setAnimationKeys();
    this.otter.getSprite().setDepth(2);

    // 어두운 배경 오버레이 추가
    this.backgroundOverlay = this.add.graphics();
    this.backgroundOverlay.fillStyle(0x000000, 0.5); // 어두운 색과 투명도 설정
    this.backgroundOverlay.fillRect(0, 0, width, height);
    this.backgroundOverlay.setDepth(4); // 가장 앞에 표시

    // 키보드 입력 설명 이미지 추가
    const imageScale = 0.25; // 이미지 크기를 줄이기 위해 스케일을 설정
    this.instructions.push(
      this.add
        .image(width / 2 - 70, height / 2 - 20, "key_a")
        .setScale(imageScale)
        .setDepth(11)
        .setOrigin(0.5)
    );
    this.instructions.push(
      this.add
        .image(width / 2, height / 2 - 20, "key_d")
        .setScale(imageScale)
        .setDepth(11)
        .setOrigin(0.5)
    );
    this.instructions.push(
      this.add
        .image(width / 2 + 110, height / 2 - 20, "key_space")
        .setScale(imageScale)
        .setDepth(11)
        .setOrigin(0.5)
    );
    // 키보드 설명 텍스트 추가
    this.instructionTexts = addInstructionTexts(this);
    // 입력 감지 이벤트 추가
    this.input.keyboard.on("keydown", this.handleInput, this);

    /// 키 매핑
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.rightKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
    this.spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  handleInput() {
    // 입력이 감지되면 키보드 이미지와 어두운 배경을 숨기기
    this.instructions.forEach((image) => image.setVisible(false));
    this.instructionTexts.forEach((text) => text.setVisible(false));
    this.backgroundOverlay.setVisible(false);

    // 입력 감지 이벤트 제거
    this.input.keyboard.off("keydown", this.handleInput, this);
  }

  update() {
    if (this.otter) {
      if (this.leftKey?.isDown) {
        this.otter.move("left");
        this.backgroundLayers.forEach((layer) => layer.move("left"));
      } else if (this.rightKey?.isDown) {
        this.otter.move("right");
        this.backgroundLayers.forEach((layer) => layer.move("right"));
      } else {
        this.otter.idle();
      }

      if (this.spaceKey?.isDown) {
        this.otter.jump();
      }

      /// 화면 밖으로 나가지 못하도록 하기
      const { width } = this.scale;
      const position = this.otter.getPosition();
      const halfWidth = this.otter.getSprite().displayWidth / 2; // 수달의 반 너비

      if (position < halfWidth) {
        this.otter.setPosition(halfWidth);
      } else if (position > width - halfWidth) {
        this.otter.setPosition(width - halfWidth);
      }
    }
  }
}
