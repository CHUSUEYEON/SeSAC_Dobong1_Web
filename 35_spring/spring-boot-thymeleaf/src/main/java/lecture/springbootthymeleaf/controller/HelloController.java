package lecture.springbootthymeleaf.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HelloController {

    // localhost:8080/hi
    @GetMapping("/hi")
    public String hello(Model model) {

        Hello hello = new Hello();
        String[] fruits = {"apple", "banana", "grape"};
        model.addAttribute("msg", "hi~~~"); // msg 라는 변수에 "hi~~~"라는 문자열을 넣었다.
        model.addAttribute("msg2", "<strong>안녕?</strong>");
        model.addAttribute("age", 17);
        model.addAttribute("userType", "Admin"); //Admin, User, 그 외
        model.addAttribute("fruits", fruits);
        model.addAttribute("url", "https://www.google.co.kr");
        model.addAttribute("hello", hello);

        return "hi"; // 파일 이름 hi.html
    }

    @GetMapping("/prac")
    public String prac01(Model model) {
        model.addAttribute("age", 21);
        return "prac";
    }

    @GetMapping("/people")
    public String prac02(Model model) {
        List<Person> personList = new ArrayList<>();
        Person p1 = new Person("kim", 10);
        Person p2 = new Person("lee", 20);
        Person p3 = new Person("hong", 30);
        Person p4 = new Person("park", 40);
        Person p5 = new Person("shin", 50);
        personList.add(p1);
        personList.add(p2);
        personList.add(p3);
        personList.add(p4);
        personList.add(p5);

        model.addAttribute("person", personList);
        return "prac2";
    }

    class Hello {
        private String msg = "hi";

        public String getMsg() {
            return msg;
        }
//        public String msg ="hi";
    }


    @AllArgsConstructor // 모든 필드를 받는 생성자가 만들어짐.
    @Getter //자동으로 Getter가 만들어짐.
    class Person {
        //        public String name;
//        public int age;
        private String name;
        private int age;

//        public String getName() {
//            return name;
//        }
//
//        public int getAge() {
//            return age;
//        }

//        public Person(String name, int age) {
//            this.name = name;
//            this.age = age;
//        }
    }

}
