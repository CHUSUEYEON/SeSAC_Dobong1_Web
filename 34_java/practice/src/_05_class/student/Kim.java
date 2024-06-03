package _05_class.student;

public class Kim extends Student{
    public Kim(String name, String school, int age, int number){
    super(name, school, age, number);
    }
@Override
    void todo(){
    System.out.println("점심은 김가네 김밥");
}
}

