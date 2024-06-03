package _05_class.rectangle;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class RectangleUpgradeEx {
    public static void main(String[] args) {
        List<RectangleUpgrade> list = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        for(int i = 0 ; i>=0 ; i++){
        System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
        int w = sc.nextInt();
        int h = sc.nextInt();
            if(w == 0 && h == 0){
                break;
            }
        RectangleUpgrade R1 = new RectangleUpgrade(w, h);
        list.add(R1);
        list.get(i).setHeight(h);
        }
        for (int i = 0 ; i<list.size();i++){
            System.out.println("가로 길이는: "+ list.get(i).getWidth());
            System.out.println("세로 길이는: "+ list.get(i).getHeight());
            int area = list.get(i).getWidth() * list.get(i).getHeight();
            System.out.println("넓이는: "+area);
            System.out.println("------------------------");
        }



    }
}
