package lecture.spring_boot_mybatis.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDTO {
    private int id;
    private String name;
    private String nickname;
    private int no;
}
