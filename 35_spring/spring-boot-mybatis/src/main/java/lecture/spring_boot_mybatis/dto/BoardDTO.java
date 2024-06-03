package lecture.spring_boot_mybatis.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Setter
@Getter
@Builder // builder 패턴을 이용하여 객체를 생성하는 것을 도와주는 도구
// >>> 전체 필드를 인자로 받는 생성자를 자동으로 생성 (@AllArgsConstructor 를 자동으로 만듦.)
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
    private String no;

    @Override
    public String toString() {
        return "BoardDTO{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", writer='" + writer + '\'' +
                ", registered=" + registered +
                ", no=" + no +
                '}';
    }
}
