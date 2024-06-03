package _05_class.car;

public class VehicleEx {
    public static void main(String[] args) {
        System.out.println("===== Bus 정보 =====");
        Bus b1 = new Bus("Hyundai", "City Bus", 2022, 30);
        System.out.println("Bue {brand= "+b1.brand+", model= "+b1.model+", year= "+b1.year+", passengerCapacity= "+b1.passengerCapacity+"}");
        b1.turnOn();
        b1.transfer();
        b1.stop();

        System.out.println("===== Car 정보 =====");
        Car c1 = new Car("Toyota", "Camry", 2023, true);
        System.out.println("Car {brand= "+c1.brand+", model= "+c1.model+", year= "+c1.year+", passengerCapacity= "+c1.convertible+"}");

        c1.turnOn();
        c1.park();
        c1.stop();

        System.out.println("===== Motorcyle 정보 =====");
        Motorcycle m1 = new Motorcycle("Harley-Davidson", "Sportster", 2021, "A");
        System.out.println("Motorcycle {brand= "+m1.brand+", model= "+m1.model+", year= "+m1.year+", passengerCapacity= "+m1.licenseType+"}");
        m1.turnOn();
        m1.motorCycle();
        m1.stop();
    }
}
