import { Scene } from 'phaser';

export class Preloader extends Scene
{

    private bgImages: { sprite: Phaser.GameObjects.TileSprite, speed: number }[]; // bgImages 멤버 변수 선언

    constructor ()
    {
        super('Preloader');
        this.bgImages = []; // 초기화
    }

    init ()
    {
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
        const { width, height } = this.scale;
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        // this.scene.start('MainMenu');

        /// 내 코드 
        // this.add.image(400, 300, 'otter_running'); // 기존 코드
        const fixed_bg = ['1']
        const layer_one = ['3','4']
        const layer_two = ['5','6','7','8']
        const layer_three = ['9','10','11','12']
        const layer_four = ['13']
        const layer_five = ['14','15','16']

        // const bgKeys = [ 
        //     '1', '2', '3', '4', '5', 
        //     '6', '7', '8', '9', '10', 
        //     '11', '12', '13', '14', '15', '16',
        //     // 'christmas_tree',
        // ];
    
        
        //  We loaded this image in our Boot Scene, so we can display it here
        // bgKeys.forEach((key) => {
        //     const bg = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, key); // 타일 스프라이트 생성
        //     bg.setOrigin(0, 0); // 원점을 상단 왼쪽으로 설정
        //     this.bgImages.push(bg); // 배열에 추가

        //     // this.add.tileSprite(640, 200, 1280, 400, key)
        //     // const { width, height } = this.scale; // 현재 화면의 크기를 가져옵니다.
        //     // this.add.image(width / 2, height / 2, key).setOrigin(0.5, 0.5); // 이미지를 화면 중앙에 배치
        // });
        const addLayer = (keys: string[], speed: number) => {
            keys.forEach((key) => {
                const bg = this.add.tileSprite(0, 0, width, height, key);
                bg.setOrigin(0, 0);
                bg.setScrollFactor(0, 0);
                bg.setDisplaySize(width, height); // 이미지 크기를 화면 크기로 설정합니다
                this.bgImages.push({ sprite: bg, speed });
            });
        };

        addLayer(fixed_bg, 0);       // 레이어 0 (고정)
        addLayer(layer_one, 0.2);    // 레이어 1
        addLayer(layer_two, 0.4);    // 레이어 2
        addLayer(layer_three, 0.8);  // 레이어 3
        addLayer(layer_four, 0.9);   // 레이어 4
        addLayer(layer_five, 2);     // 레이어 5 (가장 빠름)
    }

    update() { 
        this.bgImages.forEach((bg) => { 
            bg.sprite.tilePositionX += bg.speed;
        })
    }
}