package _05_class;


import java.util.ArrayList;
import java.util.List;

public class StudentEx {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>();
        Student s1 = new Student("김새싹", 20231001, 1);
        Student s2 = new Student("박지은", 20231002, 2);
        Student s3 = new Student("이은지", 20231003, 3);
        list.add(s1);
        list.add(s2);
        list.add(s3);
        for(int i = 0; i<list.size();i++){
        System.out.println("===학생 정보===");
        System.out.println("이름: "+ list.get(i).name);
        System.out.println("이름: "+ list.get(i).student_ID);
        System.out.println("이름: "+ list.get(i).grade+"\n");
        }

        System.out.println("총 학생 수는 "+ list.size()+"명 입니다.");
    }
}
