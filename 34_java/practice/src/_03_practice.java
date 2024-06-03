import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class _03_practice {
    public static void main(String[] args) {
//        System.out.println("5개의 정수를 입력하세요");
        Scanner sc = new Scanner(System.in);
////        int num1 = sc.nextInt();
////        int num2 = sc.nextInt();
////        int num3 = sc.nextInt();
////        int num4 = sc.nextInt();
////        int num5 = sc.nextInt();
////        System.out.println("평균은 "+(double) (num1+num2+num3+num4+num5)/5);
//      int[] arr = new int[5];
////        System.out.println(arr);
//        for(int i = 0 ; i < arr.length ; i++) {
//            arr[i] = sc.nextInt();
//        }
//            int sum = 0;
//            for(int j = 0; j < arr.length; j++){
//                sum += arr[j];
//            }
//            System.out.println("평균은 " + (double) sum/5);
//


        List<String> strings = new ArrayList<String>();
//        strings.add("코딩온");
//        strings.add("코딩온 안녕?");
//        strings.add("응 반가워");
//        strings.add("exit");
//        System.out.println(strings);
//        System.out.println("문자를 입력해주세요.");
//        String str = sc.next();
//        switch (str){
//            case "코딩온":
//            case "코딩온 안녕?":
//            case "응 반가워":
//            case "exit":
//                strings.remove("3");
//                for (String s : strings) {
//                    System.out.print(s + " ");
//                }
//            default:
//        }
        while(true){
            System.out.println("문자를 입력해주세요.");
            String str = sc.nextLine();
            strings.add(str);
            if(str.equals("exit")){
                for (String s : strings) {
                    System.out.print(s + " ");
                }
                break;
            }

        }


    }
}

