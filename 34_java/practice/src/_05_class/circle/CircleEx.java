package _05_class.circle;

import java.util.Scanner;

public class CircleEx {
    public static void main(String[] args) {
        Circle c = new Circle();
        Scanner sc = new Scanner(System.in);
        System.out.println("원의 반지름을 입력하세요: ");
        double r = sc.nextInt();
        System.out.println("원의 반지름: "+r);
        System.out.println("원의 넓이: "+r*r* c.PI);

    }
}
