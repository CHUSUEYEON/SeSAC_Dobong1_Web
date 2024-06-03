package _05_class.student;

public abstract class Student {
   String name;
   String school;
   int age;
   int number;


    public Student(String name, String school, int age, int number){
        this.name =name;
        this.age = age;
        this.school =school;
        this.number = number;
    }
    public String getName() {
        return name;
    }

    public String getSchool() {
        return school;
    }

    public int getAge() {
        return age;
    }

    public int getNumber() {
        return number;
    }
    abstract void todo();
}
