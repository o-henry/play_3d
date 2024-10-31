import { Scene } from "phaser";

export function addInstructionTexts(scene: Scene) {
  const { width, height } = scene.scale;
  const textStyle = { font: "16px locus_sangsang", fill: "#ffffff" }; // 텍스트 스타일 설정

  const instructionTexts: Phaser.GameObjects.Text[] = [];
  instructionTexts.push(
    scene.add
      .text(width / 2 - 73, height / 2 + 30, "왼쪽 이동", textStyle)
      .setDepth(11)
      .setOrigin(0.5)
  );
  instructionTexts.push(
    scene.add
      .text(width / 2, height / 2 + 30, "오른쪽 이동", textStyle)
      .setDepth(11)
      .setOrigin(0.5)
  );
  instructionTexts.push(
    scene.add
      .text(width / 2 + 108, height / 2 + 30, "점프", textStyle)
      .setDepth(11)
      .setOrigin(0.5)
  );

  return instructionTexts;
}
