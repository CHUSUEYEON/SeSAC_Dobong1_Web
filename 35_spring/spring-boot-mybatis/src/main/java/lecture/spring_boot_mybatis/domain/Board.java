package lecture.spring_boot_mybatis.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@Builder
public class Board {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
}
