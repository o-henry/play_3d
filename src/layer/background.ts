import { Scene } from "phaser";

export class BackgroundLayer {
  constructor(
    private scene: Scene,
    private keys: string[],
    private speed: number,
    private depth: number
  ) {
    this.addLayer();
  }

  private addLayer() {
    const { width, height } = this.scene.scale;
    this.keys.forEach((key) => {
      const bg = this.scene.add.tileSprite(0, 0, width, height, key);
      bg.setOrigin(0, 0);
      bg.setScrollFactor(0, 0);
      bg.setDisplaySize(width, height); // 이미지 크기를 화면 크기로 설정
      bg.setDepth(this.depth);
      this.backgrounds.push({ sprite: bg, speed: this.speed });
    });
  }

  private backgrounds: {
    sprite: Phaser.GameObjects.TileSprite;
    speed: number;
  }[] = [];

  move(direction: "left" | "right") {
    const moveSpeed = direction === "left" ? -this.speed * 2 : this.speed * 2;
    this.backgrounds.forEach((bg) => (bg.sprite.tilePositionX += moveSpeed));
  }
}
