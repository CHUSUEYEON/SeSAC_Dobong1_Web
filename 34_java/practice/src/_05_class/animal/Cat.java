package _05_class.animal;

public class Cat extends Animal{
    public Cat(String species, String name, int age){
//        super();
        this.type = "고양이";
        this.name =name;
        this.age = age;
    }

    @Override
    public void makeSound(){
        System.out.println(type + " 야옹");

    };
}
