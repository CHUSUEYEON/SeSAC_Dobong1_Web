package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper // Spring 에게 해당 인터페이스가 매퍼 역할을 하는 인터페이스임을 알린다.
public interface UserMapper {
    List<User> retrieveAll();

//    ver1. xml 과 매핑
//    void insertUser(UserCreateDTO user);

    // ver2. 어노테이션을 이용하여 여기서 sql 작성
    @Insert("INSERT INTO user(name, nickname) VALUES(#{name}, #{nickname})")
    void insertUser(UserCreateDTO user);


    void updateUser(User user);

    void deleteUser(int id);
}
