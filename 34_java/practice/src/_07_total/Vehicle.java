package _07_total;

abstract public class Vehicle {
    public String name;
    public int maxSpeed;

    abstract void move();

    public String getName() {
        return name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }
}
