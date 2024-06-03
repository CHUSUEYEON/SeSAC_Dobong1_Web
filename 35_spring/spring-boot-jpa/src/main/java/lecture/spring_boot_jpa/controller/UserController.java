package lecture.spring_boot_jpa.controller;

import lecture.spring_boot_jpa.dto.ResErrorDTO;
import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController //@responseBoby 어노테이션 속성도 자동으로 가져서 따로 안 써도 됨.
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    // localhost:8080/user
//    @GetMapping("")
//    public List<UserEntity> getUsers(){
//        return userService.getUsers();
//    }

    // ResponseEntity
    // 적절한 응답 코드 및 본문을 생성해주는 역할을 함.
    @GetMapping("")
    public ResponseEntity<List<UserEntity>> getUsers() {
        List<UserEntity> users = userService.getUsers();
        return ResponseEntity.ok(users);
        // return ResponseEntity.ok().body(users);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getUserByName(@PathVariable String name) {
        //<?> : 자바의 와일드 카드
        List<UserEntity> users = userService.getUserByName(name);
//        List<UserDTO> resUsers = new ArrayList<>();
//        for(int i = 0;i <users.size();i++){
//            UserDTO user = UserDTO.builder()
//                    .id(users.get(i).getId())
//                    .name(users.get(i).getName())
//                    .nickname(users.get(i).getNickname())
//                    .no(i+10)
//                    .build();
//
//            resUsers.add(user);
//        }

        // stream 형태로
//       Stream<UserDTO> resUsers =  users.stream().map(user-> UserDTO.builder()
//                .id(user.getId())
//                .name(user.getName())
//                .nickname(user.getNickname())
//                .no(user.getId() + 10)
//                .build());

        // List 형태로
        List<UserDTO> resUsers = users.stream().map(user -> UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .nickname(user.getNickname())
                .no(user.getId() + 10)
                .build())
            .collect(Collectors.toList()); // Stream 에서 한 줄 추가

        return ResponseEntity.ok(resUsers);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable int id) {
        try {
            return ResponseEntity.ok(userService.getUserById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // user doesn't exist
        }
    }

    // insert, update, delete
    @PostMapping("")
    public ResponseEntity<?> insertUser(@RequestBody UserCreateDTO user) {
        try {
            UserEntity newUser = userService.insertUser(user);
            UserDTO userDTO = UserDTO.builder()
                .id(newUser.getId())
                .name(newUser.getName())
                .nickname(newUser.getNickname())
                .build();

            return ResponseEntity.ok(userDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build());
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchUser(
        @PathVariable int id,
        @RequestBody UserCreateDTO user) {
        try {
            UserEntity updateUser = userService.updateUser(id, user);
            return ResponseEntity.ok(updateUser);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build()
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok().body(userService.deleteUser(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build()
            );
        }
    }

    @GetMapping("/todos/{userId}")
    public ResponseEntity<?> getTodosByUser(@PathVariable int userId) {
        try {
            return ResponseEntity.ok(userService.getTodosByUser(userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build()
            );
        }
    }
}
