package lecture.spring_boot_jpa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "board")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title", nullable = false, length = 20)
    private String title;

    @Column(name = "content", nullable = false, length = 100)
    private String content;

    @Column(nullable = false, length = 10) //name = "writer" 필드명이랑 같으면 생략 가능
    private String writer;

    @Column(name = "registered")
    @CreationTimestamp
    private String registered;
}
