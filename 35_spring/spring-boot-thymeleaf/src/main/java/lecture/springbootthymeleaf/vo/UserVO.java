package lecture.springbootthymeleaf.vo;

import lombok.Getter;

@Getter // 모든 필드에 대해 getter를 자동으로 생성 //VO는 값을 바꾸지 않는 게 특징이라 setter는 만들지 않음.
public class UserVO {
    private String name;
    private int age;

}
