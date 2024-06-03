package springlecture.springbootsecurity.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false) // 안 써도 됨. 써도 됨.
    private long id; // 사용자 고유 id // security 에선 bigint 를 써서 Long 으로!

    @Column(name = "username", nullable = false, length = 20)
    private String username;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;
}

// sql 파일을 entity 로 만든 것.