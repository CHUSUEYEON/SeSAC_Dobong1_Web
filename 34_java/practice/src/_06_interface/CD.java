package _06_interface;

public class CD implements Music{
    private String song;
    public CD(String song){
        this.song = song;
    }

    @Override
    public String play(){
        return "CD 플레이어에서 '"+this.song+"' 음악을 재생합니다.";
    }

    @Override
    public String stop(){
        return "CD 플레이어에서 '"+this.song+"' 음악을 정지합니다.";
    }

    @Override
    public String toString(){
        return "======CD Player =======\n" + play() + "\n" + stop() + "\n";
    }
}
