package _05_class.student;

public class StudentEx {
    public static void main(String[] args) {
        Kim k = new Kim("김철수", "ABC 고등학교", 17, 20220001);
        System.out.println("===== "+ k.name+" 학생의 정보 =====");
        System.out.println("학교: "+ k.school);
        System.out.println("나이: "+ k.age);
        System.out.println("학번: "+ k.number );
        k.todo();

        Baek b = new Baek("백영희", "XYZ 고등학교", 18, 20220002);
        System.out.println("===== "+ b.name+" 학생의 정보 =====");
        System.out.println("학교: "+ b.school);
        System.out.println("나이: "+ b.age);
        System.out.println("학번: "+ b.number );
        b.todo();
    }
}
