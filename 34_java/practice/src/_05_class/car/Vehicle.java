package _05_class.car;

public class Vehicle {
    public String brand;
    public String model;
    public int year;

    public void turnOn(){
        System.out.println("차량 시동을 걸었습니다.");
    }
    public void park(){
        System.out.println("주차했습니다.");
    }
    public void transfer(){
        System.out.println("승객을 운송합니다.");
    }
    public void stop(){
        System.out.println("차량을 정지했습니다.");
    }
    public void motorCycle(){
        System.out.println("울림통을 합니다.");
    }
}
