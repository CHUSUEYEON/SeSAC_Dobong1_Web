package _07_total;

import java.util.ArrayList;

public class VehicleEx {
    public static void main(String[] args) {
        Car c = new Car("rexton", 200);
        Airplane a = new Airplane("비행기", 500);

        ArrayList<Vehicle> list = new ArrayList<>();
        list.add(c);
        list.add(a);

        System.out.println(c instanceof Car); //true
        System.out.println(c instanceof Flyable); //false

        for(int i = 0 ; i < list.size() ; i++){
            list.get(i).move();
            if(list.get(i) instanceof Flyable){
                ((Flyable)list.get(i)).fly();
            }
        }
    }
}
