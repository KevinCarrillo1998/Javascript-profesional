class MediaPlayer {
    constructor(config) {
        const { element } = config;
        this.media = element;
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
}


export default MediaPlayer;