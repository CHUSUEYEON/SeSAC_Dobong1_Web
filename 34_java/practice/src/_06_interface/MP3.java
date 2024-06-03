package _06_interface;

public class MP3 implements Music{
    private String song;
    public MP3(String song){
        this.song =song;
    }
    @Override
    public String play(){
//        this.song = song;
//        System.out.println("MP3 플레이어에서 '"+this.song+"' 음악을 재생합니다.");
        return "MP3 플레이어에서 '"+this.song+"' 음악을 재생합니다.";
    }
    @Override
    public String stop(){
//        this.song = song;
//        System.out.println("MP3 플레이어에서 '"+this.song+"' 음악을 정지합니다.");
        return "MP3 플레이어에서 '"+this.song+"' 음악을 정지합니다.";

    }

    @Override
    public String toString(){
        return "======MP3 Player ======\n" + play() + "\n" + stop() + "\n";
    }
}
