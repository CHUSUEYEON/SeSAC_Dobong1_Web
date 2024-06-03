package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Getter
@Table(name = "todo")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false)
    @ColumnDefault("false")
//    @Builder.Default
//    private Boolean done = false;
    private Boolean done;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    @JsonBackReference // User 와 TOTO 사이의 순환참조가 발생하는 것을 방지
    private UserEntity user;
}
