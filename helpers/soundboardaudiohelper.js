// class SBAudioHelper extends AudioHelper {
class SBAudioHelper {

    activeSounds = [];
    constructor() {

    }

    play({src, volume}) {
        volume *= game.settings.get("core", "globalInterfaceVolume");
        let sbhowl = new Howl({src, volume, onend: (id)=>{
            this.removeActiveSound(id)
        },
        onstop: (id)=>{
            this.removeActiveSound(id)
        }});
        sbhowl.play();
        this.activeSounds.push(sbhowl);
    }

    stop() {
        SoundBoard.log("Not yet implemented");
    }

    stopAll() {
        this.activeSounds.forEach(sound => {
            // Howl.stop(sound);
            sound.stop();
        });
    }

    getActiveSounds() {
        return this.activeSounds;
    }

    removeActiveSound(id) {
        let soundIndex = this.activeSounds.findIndex((element)=>{
            return element._getSoundIds()[0] == id
        });
        if (soundIndex > -1) {
            this.activeSounds.splice(soundIndex, 1);
        }
    }
    
}