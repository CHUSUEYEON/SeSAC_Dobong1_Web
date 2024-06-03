import java.util.Scanner;

public class _02_practice {
    public static void main(String[] args) {
        System.out.println("숫자를 입력하세요");

        Scanner scan = new Scanner(System.in);
        int number = scan.nextInt();

        for(int i = 1;i<= number;i++){
            System.out.println(i);
        }

        System.out.println("숫자 두 개를 입력하세요");
        double num1 = scan.nextInt();
        double num2 = scan.nextInt();
        System.out.println("덧셈 결과: "+ (num1 + num2));
        System.out.println("뺄셈 결과: "+ (num1 - num2));
        System.out.println("나눗셈 결과: "+ (num1 / num2));
        System.out.println("곱셈 결과: "+ (num1 * num2));

        System.out.println("반지름이 5인 원의 넓이: " + area(5));
        System.out.println("가로 4, 세로 7인 직사각형의 넓이: "+ area(4,7));
        System.out.println("밑변 6, 높이 3인 직사각형의 넓이: "+ area(6,3, true));
        scan.close();
    }

    public static double area(double a){
        return Math.PI * a * a;
    }
    // math.pow : 제곱

    public static double area(double a, double b){
        return a * b;
    }

    public static double area(double x, double y, boolean z){
        return (x * y)/2;
    }
}
