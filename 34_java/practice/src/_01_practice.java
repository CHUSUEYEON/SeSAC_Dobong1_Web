import java.util.Scanner;

public class _01_practice {
    public static void main(String[] args) {
        System.out.println("이름을 입력하세요.");
        Scanner scan = new Scanner(System.in);
        String name = scan.next();
        System.out.println("나이를 입력하세요.");
        int age = scan.nextInt();
        System.out.println("안녕하세요! " + name +"님(" + age + "세)");


        // 실습2

        System.out.println("나이를 입력하세요.");
        int input = scan.nextInt();

        if(input>=1 && input<=7){
            System.out.println("유아");
        } else if ( input >= 8 && input <= 13) {
            System.out.println("초등학생");
        } else if (input >= 14 && input <= 16){
            System.out.println("중학생");
        } else if (input >= 17 && input <= 19) {
            System.out.println("고등학생");
        } else{
            System.out.println("성인");
        }


        System.out.println("이름을 입력하세요.");
        String name2 = scan.next();
        switch (name2){
            case ("홍길동"):
                System.out.println("남자");
                break;
            case  ("성춘향"):
                System.out.println("여자");
                break;
            default:
                System.out.println("모르겠어요.");
                break;
        }
        scan.close();
    }
}
