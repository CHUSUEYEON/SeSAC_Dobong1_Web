# 추상클래스
- 클래스의 공통 필드와 메소드를 추출해서 선언한 클래스
- 실체 클래스: 객체를 직접 생성할 수 있는 클래스
- 추상 클래스: 공통적인 특성을 추출해서 선언한 클래스

## 용도
- 공통된 필드와 메소드의 이름을 통일
- 실제 클래스의 작성 시간 절약

## 선언
- `abstract` 키워드를 접근제한자 앞 or 뒤로 작성
- `new` 를 통해 객체를 생성할 수 없음
- 상속을 통한 자식 클래스를 통해 객체 생성
- 일반 클래스처럼 필드, 생성자, 일반 메소드 선언 가능
- `new` 연산자를 통해 생성자 직접 호출할 수는 없지만, 자식클래스의 `super(..)`를 통해
호출할 수는 있음

---


# 추상 메소드
- 메소드의 선언부만 있는 메소드(접근제한자, 함수리턴 타입, 함수이름, 매개변수)
- 모든 자식 클래스에서 재정의되어야 함(재정의 되지 않으면 컴파일 에러 발생)
- 모든 실체들이 갖는 메소드 실행 내용이 같다면, 추상 클래스에서 일반 메소드를 통해 내용을 작성하는 게 좋음
- 메소드의 선언부만 동일하고, 실행 내용은 클래스마다 달라야 하는 경우