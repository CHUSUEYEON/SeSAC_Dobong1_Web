package _05_class.c_final;

public class ConstEx {
    public static void main(String[] args) {
        System.out.println(Const.MAX_VALUE);
        System.out.println(Const.GREETING);
//        Const.MAX_VALUE = 200; //final 이기 때문에 재할당 불가능
        Const.MIN_VALUE = 10;
        System.out.println("MIN_VALUE: "+Const.MIN_VALUE);

        // final 변수 접근
//        System.out.println(Const.name);
// static 이 아니기 때문에 인스턴스 생성 후 접근
Const c1 = new Const();
        System.out.println(c1.name);
//        c1.name= " final 은 다른 값으로 변경은 안돼요.";

    }
}
