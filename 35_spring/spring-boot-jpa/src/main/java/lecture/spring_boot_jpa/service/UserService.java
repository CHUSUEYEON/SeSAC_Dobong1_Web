package lecture.spring_boot_jpa.service;

import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getUsers() {
        return userRepository.findAll();
    }

    public List<UserEntity> getUserByName(String name) {
//        return userRepository.findByName(name);
        return userRepository.findByNameCustom(name);
    }

    public UserEntity getUserById(int id) {
        Optional<UserEntity> user = userRepository.findById(id);
        if (user.isPresent()) {
            // [optionalObj].isPresent() : null 인지 아닌지 확인. null 이 아니라면 true
            return user.get(); //userEntity
        } else {
            throw new RuntimeException("user doesn't exist");
        }
    }

    public UserEntity insertUser(UserCreateDTO user) {
        UserEntity newUser = UserEntity.builder()
            .name(user.getName())
            .nickname(user.getNickname())
            .build();

        // .save(엔티티 객체) : insert, update (2가지 기능)
        // pk 가 없다면, insert
        // pk 가 있다면, update
        return userRepository.save(newUser);
    }

    public UserEntity updateUser(int id, UserCreateDTO user) {
        UserEntity userEntity = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("user doesn't exist")); // null 값일 경우 예외로 에러 메시지를 던져줌
        // 조회된 값이 있다면, userEntity 에 담고, 그렇지 않다면 RuntimeException 를 발생

        UserEntity updateUser = UserEntity.builder()
            .id(userEntity.getId())
            .name(user.getName())
            .nickname(user.getNickname())
            .build();

        // entity 객체 만들어서 pk 값을 설정한 후 repostitory.save(); 하면 된다
        return userRepository.save(updateUser);
    }

    public UserEntity deleteUser(int id) {
        UserEntity userEntity = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("user doesn't exist"));

//        userRepository.deleteById(id); // pk id 로 삭제 // 이 방법은 에러 메시지를 안 넘겨줌(id 값만)
        userRepository.delete(userEntity); // pk id 로 삭제 그러나 entity 자체를 넘겨서 그 정보로 삭제

        return userEntity;
    }

    public UserEntity getTodosByUser(int userId) {
        UserEntity userEntity = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("user doesn't exist"));

        return userRepository.findTodosByUser(userId);
        // UserEntity{id, name, nickname, todos []}

    }
}
