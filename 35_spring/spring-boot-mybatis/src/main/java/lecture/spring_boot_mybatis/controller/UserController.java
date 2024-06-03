package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
@Slf4j //로그를 효율적으로 찍을 수 있는 라이브러리 제공
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    @ResponseBody
    public List<UserDTO> getUsers(Model model){
        return userService.getUserList();
    }

    @PostMapping("")
    @ResponseBody
    public Map<String, Boolean> insertUser(
            @RequestBody UserCreateDTO user
            ){
        // User insert 로직

        userService.insertUser(user);


        Map<String, Boolean> result = new HashMap<String, Boolean>();
        result.put("result", true);

//    {result: true}
        return result;
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> patchUser(
            @PathVariable int id,
            @RequestBody UserCreateDTO user
    ) {
        Map<String, Boolean> result = new HashMap<String, Boolean>();

        try {
            userService.updateUser(id, user);
            result.put("result", true);
        } catch (Exception e) {
            System.out.println("patch error {}" + e.getMessage());
            log.error("patch error {}", e.getMessage()); // 중괄호에 넣을 값을 (,) 찍고 쓰면 됨.
            result.put("result", false);
        }

        return result;
    }


    @DeleteMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> deleteUser(
            @PathVariable int id
    ){
        Map<String, Boolean> result = new HashMap<String, Boolean>();
        try{
            userService.deleteUser(id);
            result.put("result", true);

        }catch (Exception e){

            result.put("result", false);
        }
            return result;
    }

}