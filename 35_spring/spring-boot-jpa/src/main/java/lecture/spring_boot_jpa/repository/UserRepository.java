package lecture.spring_boot_jpa.repository;

import lecture.spring_boot_jpa.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// JpaRepository<entity class, 테이블의 PK 자료형>
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
//    List<UserEntity> findAll(); // 기본적으로 제공돼서 따로 안 적어도 됨.

    List<UserEntity> findByName(String name);

    Optional<UserEntity> findById(int id); // optional : 있거나 없거나(null 일 수도 있는 객체를 감싸는 클래스)

    // raw query 이용
    // jpa 자체적인 sql -> JPQL
    // JPQL : Java Persistence Query Language

    //ver.1
    @Query("SELECT u FROM UserEntity u WHERE u.name = :name")
    List<UserEntity> findByNameCustom(String name);


//    @Query(nativeQuery = true, value = "SELECT * FROM UserEntity WHERE name = :name")
//    List<UserEntity> findByNameCustom(String name);
// 이거는 DBMS 에 종속되지 않는다는 ORM 의 장점이 적용이 안됨. 따라서 ver 1 인 JPQL 문법을 사용하는 것이 좋음


    @Query("SELECT u FROM UserEntity u JOIN FETCH u.todos t WHERE u.id = :userId")
    UserEntity findTodosByUser(int userId);
}
