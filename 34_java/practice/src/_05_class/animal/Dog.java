package _05_class.animal;

public class Dog extends Animal{
    public Dog(String species, String name, int age){
//        super();
        this.type = "강아지";
        this.name =name;
        this.age = age;
    }

    @Override
    public void makeSound(){
        System.out.println(type + " 멍멍");

    };
}
