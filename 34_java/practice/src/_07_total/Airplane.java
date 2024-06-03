package _07_total;

public class Airplane extends Vehicle implements Flyable{
    public Airplane(String name, int maxSpeed){
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    @Override
    void move(){
        System.out.println("하늘을 날아가는 중");
    }
    @Override
    public void fly(){
        System.out.println("고도 10,000 피트에서 비행 중");
    }

}
