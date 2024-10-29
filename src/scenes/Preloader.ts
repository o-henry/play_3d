import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        const bg_images = [ 
            '1', '2', '3', '4', '5', 
            '6', '7', '8', '9', '10', 
            '11', '12', '13', '14', '15', 
            '16', 'christmas_tree'
        ];
    
        bg_images.forEach((key) => {
            this.add.image(512, 384, key);
        });
        //  We loaded this image in our Boot Scene, so we can display it here
        // this.add.image(512, 384, '1');
        // this.add.image(512, 384, '2');
        // this.add.image(512, 384, '3');
        // this.add.image(512, 384, '4');
        // this.add.image(512, 384, '5');
        // this.add.image(512, 384, '6');
        // this.add.image(512, 384, '7');
        // this.add.image(512, 384, '8');
        // this.add.image(512, 384, '9');
        // this.add.image(512, 384, '10');
        // this.add.image(512, 384, '11');
        // this.add.image(512, 384, '12');
        // this.add.image(512, 384, '13');
        // this.add.image(512, 384, '14');
        // this.add.image(512, 384, '15');
        // this.add.image(512, 384, '16');
        // this.add.image(512, 384, 'christmas_tree');
       

        //  A simple progress bar. This is the outline of the bar.
        // this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        // //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        // const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        // //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        // this.load.on('progress', (progress: number) => {

        //     //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
        //     bar.width = 4 + (460 * progress);

        // });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');
        this.load.spritesheet('otter_sleep', 'otter_sleeping_animation.gif', { frameWidth: 64, frameHeight: 64 });
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        // this.scene.start('MainMenu');

        /// 내 코드 
        // this.add.image(400, 300, 'otter_running'); // 기존 코드

        // const { width, height } = this.scale; // 현재 화면의 크기를 가져옵니다.
        // this.add.image(width / 2, height / 2, 'bg').setOrigin(0.5, 0.5); // 이미지를 화면 중앙에 배치

        // this.anims.create({
        //     key: 'sleep',
        //     frames: this.anims.generateFrameNumbers('otter_sleep'),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // const z = this.add.sprite(100, 450, 'sleep')
        // z.play('sleep');
    }
}