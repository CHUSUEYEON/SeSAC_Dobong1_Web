package _04_Exception;

// - Error : 시스템이 비정상적인 상황에 발생한 경우
// - 코드에 의해 수습할 수 없는 심각한 오류
// - OutOfMemoryError, ThreadDeath, ..

import java.util.InputMismatchException;
import java.util.Scanner;

/*
* 일반 예외(Exception, checked Exception), 실행 예외(Runtime Exception/unchecked Exception)
* - 일반 예외
*   - 확인 시점: 컴파일 시점, 명시적으로 예외처리 반드시 해야함
*   - IOException, FileNotFoundException
* - 실행 예외
*   - 확인시점: 런타임 시점, 예외처리를 강제되지 않지만 정상적인 작동을 위해 예외처리를 해주는 게 좋다.
*   - NullPointerException, InputMismatchException
* */
public class ExceptionEx {

    public static String divide(int x, int y){
        return x+ "/" + y + "=" + (x/y);
    }

    public static int getLength(String str){
        return str.length();
    }

    public static int getValueByIdx(int[] arr, int idx){
        return arr[idx];
    }

    public static void main(String[] args) {
        System.out.println(divide(6,2));
//        System.out.println(divide(6,0));
//        System.out.println("여기까지 나올까요?");

        // ##### case1. 0으로 나누기(ArithmeticException)
        try {
            System.out.println("나누기 연산 시작!");
            System.out.println(divide(6,0));
        }catch (ArithmeticException error){
            // catch 의 error 부분에는 어떤 에러인지도 명시

            // e.getMessage(): 예외가 발생한 이유만 보여줌
            System.out.println("나누기 중 예외 발생" + error.getMessage()); // / by zero

            // e.toString(): 예외 종류를 리턴
            System.out.println("나누기 중 예외 발생" + error.toString()); // java.lang.ArithmeticException: / by zero
        }finally {
            System.out.println("나누기 연산 종료!");
        }

        // ##### case2. null 에 접근(NullPointerException)
        try {
            System.out.println(getLength("hello"));
            System.out.println(getLength(null));
        }catch (NullPointerException e){
            System.out.println("단어 길이 연산 중 예외 발생: "+ e.getMessage()); // Cannot invoke "String.length()" because "str" is null
            System.out.println("단어 길이 연산 중 예외 발생: "+ e.toString()); // java.lang.NullPointerException: Cannot invoke "String.length()" because "str" is null
        }



        // ##### case3. index 값으로 배열 접근 시 범위에 없는 값으로 접근(ArrayIndexOutOfBoundsException)
        int[] numbers= {10, 20, 30, 40, 50};
        try {
            System.out.println(getValueByIdx(numbers, 2)); // 30
            System.out.println(getValueByIdx(numbers, numbers.length));
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("배열 인덱싱 중 예외 발생" + e.getMessage());//Index 5 out of bounds for length 5
            System.out.println("배열 인덱싱 중 예외 발생" + e.toString()); // java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
        }

        // ##### case4. 입력 형식 예외(InputMismatchException - 반드시 임포트 되어야 함)
        Scanner scan = new Scanner(System.in);
        try{
            System.out.println("정수를 하나 입력해주세요..");
            int number = scan.nextInt(); // 정수만 입력 받을 수 있다.
            System.out.println("입력한 정수: " + number);
        }catch (InputMismatchException e){
            System.out.println("입력 형식 예외 발생: "+ e.getMessage()); //null
            System.out.println("입력 형식 예외 발생: "+ e.toString()); //java.util.InputMismatchException
        }
    }
}

/*
* try{}catch(예외이름 Error){}finally{}
* 1. catch 여러 개 이어서 쓰기 가능합니다.
*   - try{}catch(예외이름1 Error){}catch(예외이름2 Error){}finally{}
* 2. catch 문 하나에 에러 여러 개 받는 것 가능
*   - catch(예외1|예외2 error){}
*       - 예외처리 구문이 비슷할 때
*       - 두 예외가 상속관계에 있지 않을 때
*
* */
