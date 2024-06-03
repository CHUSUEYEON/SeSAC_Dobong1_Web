package springlecture.springbootsecurity.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @GetMapping("")
    public String getTodo(@AuthenticationPrincipal String userId){
//    public String getTodo(HttpSession session){
        // @AuthenticationPrincipal : SecurityContextHolder 에 담아둔 정보를 가져옴
        return "get todo success " + userId; //path 에 id 넣지 말 것!!! 꼭 이렇게 가져오기
//         return "get todo success " + session.getAttribute("userid");
    }
}
