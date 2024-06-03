package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

@Controller
public class PracController {
    @GetMapping("/introduce/홍길동")
    @ResponseBody
    public String prac1() {
        return "내 이름은 홍길동";
    }

    @GetMapping("/introduce2")
    public String prac2(
            @RequestParam String name,
            @RequestParam(value = "age") Integer age,
            Model model
    ) {
        int[] years = IntStream.rangeClosed(1970, 2024).toArray();
        int[] months = IntStream.rangeClosed(1, 12).toArray();
        int[] dates = IntStream.rangeClosed(1, 31).toArray();


//        List<Integer> years = new ArrayList<>();
//        for (int y = 2024; y > 0; y--) {
//            years.add(y);
//        }
//        List<Integer> months = new ArrayList<>();
//        for (int m = 1; m < 13; m++) {
//            months.add(m);
//        }
//
//        List<Integer> dates = new ArrayList<>();
//        for (int d = 1; d < 32; d++) {
//            dates.add(d);
//        }
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        model.addAttribute("years", years);
        model.addAttribute("months", months);
        model.addAttribute("dates", dates);
        return "prac2";
    }

    @PostMapping("/introduce3")
    @ResponseBody
    public String prac3(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam int year,
            @RequestParam int month,
            @RequestParam int date,
            @RequestParam String[] hobby,
            Model model
    ) {

        String interest = String.join(",", hobby);

        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("date", date);
        model.addAttribute("hobby", interest);

        return "prac4";
    }
}
