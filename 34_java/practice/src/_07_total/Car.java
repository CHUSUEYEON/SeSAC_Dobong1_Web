package _07_total;

public class Car extends Vehicle{
    public Car(String name, int maxSpeed){
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    @Override
    void move(){
        System.out.println("도로를 따라 이동 중");
    }
}
