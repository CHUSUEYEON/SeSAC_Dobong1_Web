package _05_class.student;

public class Baek extends Student{
    public Baek(String name, String school, int age, int number){
        super(name, school, age, number);
    }
    @Override
    void todo(){
        System.out.println("점심은 백종원 피자");
    }
}
