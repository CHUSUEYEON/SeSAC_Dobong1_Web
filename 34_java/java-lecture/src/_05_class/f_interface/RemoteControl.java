package _05_class.f_interface;

public interface RemoteControl {
    // interface 는 반드시 추상 메소드를 포함해야 합니다.

    // 추상 메소드 선언 시 abstract 키워드 생략해도 됩니다.
    // 추상 클래스에서는 생략 불가
        public void turnOn();
        public void turnOff();
        public void setVolume(int volume);

        // 상수 필드
    // java 인터페이스에 선언된 필드는 기본적으로 [static final] 특성을 가진다.
    // 상수 외의 필드 선언 불가
    int MAX_VOLUME = 10;  // static final 을 붙이지 않아도 컴파일러가 자동으로 추가함.

    static final int MIN_VALUE=0;

}
