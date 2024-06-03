package lecture.springbootthymeleaf.controller;


import lecture.springbootthymeleaf.dto.UserDTO;
import lecture.springbootthymeleaf.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/api") //localhost:8080/api/~~~~~
public class ApiController {


    // 컨트롤러에서 에러가 발생할 경우, ExceptionHandler 가 catch 하여 해당 로직 처리
    @ExceptionHandler
    public String errHandler(Exception e) {
        System.out.println("error: " + e.getMessage());
        return "error";
    }

    // GET localhost:8080/api
    @GetMapping("")
    public String get() {
        return "api";
    }

    // GET localhost:8080/api/res1?name={name}&age={age} // params 로 받는 거
    @GetMapping("/res1")
//    public String getRes1(
//            @RequestParam String name,
//            @RequestParam int age,
//            Model model) {
//        model.addAttribute("name", name);
//        model.addAttribute("age", age);
//        return "res";
//    }

//    가능한 파람쓰?
//    ?name=lily&age=88
//    ?name=lily
    public String getRes1(
            @RequestParam(value = "name") String ninkname,
            @RequestParam(required = false, value = "age") Integer age,
            Model model) {
        model.addAttribute("name", ninkname);
        model.addAttribute("age", age);
        return "res";
    }

    // GET localhost:8080/api/res2/{name}/{age} // path 로 받는 거
    @GetMapping({"/res2/{name}/{param2}", "/res2/{name}"}) // 두 개의 Url 을 쓰고 싶은 경우 { , } 이용
    public String getRes2(
            @PathVariable String name,
            @PathVariable(value = "param2", required = false) Integer age,
            Model model
    ) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    //POST localhost:8080/api/res3 (name, age)
    @PostMapping("/res3")
    public String postRes(
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @PostMapping("/res3/{parma1}")
    public String postRes2(
            @PathVariable String param1,
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        System.out.println("param1: " + param1);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @GetMapping("/res4")
    @ResponseBody // 템플릿 뷰를 응답하는 게 아닌 리턴값 자체를 응답.
    public String getRes4() {
        return "hello";
    }

    @PostMapping("/res5")
    public String postRes5(
            @ModelAttribute UserDTO user,

            Model model) {
        // @ModelAttribute
        // 객체로 데이터를 전송받게끔 도와줌. 해당 객체의 setter를 이용해서 데이터를 매핑시킴
        // url에 있는 데이터를 매핑
        // 어노테이션 생략 가능 // UserDTO user 이렇게만 써도 됨
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    @PostMapping("/res6")
    public String postRes6(
            @ModelAttribute UserVO user,
            Model model) {
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    @GetMapping("/res7")
    public String getRes7(
            @ModelAttribute UserDTO user,
            Model model) {
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    // ================== @RequestBody ===============
    @GetMapping("/res8")
    public String getRes8(
            @RequestBody UserDTO user,
            Model model) {
        // 오류가 남. Why? Body 자체가 없음. get 요청이기 때문
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    @PostMapping("/res9")
    public String postRes9(
            @RequestBody UserDTO user,
            Model model) {
        // 오류가 남. Why? 일반 폼 전송의 Content-Type 은 application/x-www-form-urlencoded 이기 때문
        // 일반폼 전송인데 RequestBody 이기 때문.
        // @RequestBody 는 application/json 형태의 Content-Type 을 매핑시킬 수 있음.
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    } // VO 로 테스트 해도 둘 다 오류

    @PostMapping("/res10")
    @ResponseBody
    public String postRes10(
            @RequestBody UserDTO user) {
        return user.getName() + "님 환영합니다.";

    }

    @PostMapping("/res11")
    @ResponseBody
    public String postRes11(
            @RequestBody UserVO user) {
        // @RequestBody 은 dto 객체의 setter 를 이용해서 매핑시키는 게 아닌,
        // RequestBody 어노테이션 자체적으로 가지고 있는 메소드로 매핑을 시킴.
        return user.getName() + "님 환영합니다.";
    }

    @GetMapping("/res12")
    @ResponseBody
    public String getRes12(@RequestParam(value = "name") String name, @RequestParam(value = "age") int age) {
        return name + "님 환영합니다.";

    }
}
