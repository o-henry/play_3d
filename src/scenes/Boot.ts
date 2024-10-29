import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('1', 'assets/winter_bg/1.png');
        this.load.image('2', 'assets/winter_bg/2.png');
        this.load.image('3', 'assets/winter_bg/3.png');
        this.load.image('4', 'assets/winter_bg/4.png');
        this.load.image('5', 'assets/winter_bg/5.png');
        this.load.image('6', 'assets/winter_bg/6.png');
        this.load.image('7', 'assets/winter_bg/7.png');
        this.load.image('8', 'assets/winter_bg/8.png');
        this.load.image('9', 'assets/winter_bg/9.png');
        this.load.image('10', 'assets/winter_bg/10.png');
        this.load.image('11', 'assets/winter_bg/11.png');
        this.load.image('12', 'assets/winter_bg/12.png');
        this.load.image('13', 'assets/winter_bg/13.png');
        this.load.image('14', 'assets/winter_bg/14.png');
        this.load.image('15', 'assets/winter_bg/15.png');
        this.load.image('16', 'assets/winter_bg/16.png');
        this.load.image('christmas_tree', 'assets/winter_bg/christmas_tree.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
