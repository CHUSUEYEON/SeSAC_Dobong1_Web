package _05_class;

public class Student {
    public String name;
    public int student_ID;
    public int grade;

    public Student(String name, int student_ID, int grade){
        this.name = name;
        this.student_ID =student_ID;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStudent_ID() {
        return student_ID;
    }

    public void setStudent_ID(int student_ID) {
        this.student_ID = student_ID;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public static int totalStudents = 0;
}
