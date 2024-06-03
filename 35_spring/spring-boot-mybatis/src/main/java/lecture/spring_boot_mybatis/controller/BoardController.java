package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.dto.DefaultResDTO;
import lecture.spring_boot_mybatis.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
@Slf4j
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping
//    @ResponseBody
//    public List<BoardDTO> getBoards(Model model){
//        return boardService.getBoardList();
//    }
    public String getBoard(Model model){
        List<BoardDTO> boards = boardService.getBoardList();
        model.addAttribute("boards", boards);
        return "board";
    }

    @PostMapping("")
    @ResponseBody
    public DefaultResDTO postBoard(
            @RequestBody BoardCreateDTO board
    ){
//        Map<String, Boolean> result = new HashMap<>();
        boolean result = false;
        String errMsg = null;
        try{
//            result.put("result", true);
        boardService.insertBoard(board);
        result = true;
        }
        catch(Exception e){
            log.error("insert board err{}" + e.getMessage());
            errMsg = e.getMessage();
//            result.put("result", false);

        }
        return DefaultResDTO.builder()
                .result(result)
                .errMsg(errMsg)
                .build();
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public DefaultResDTO patchBoard(
            @PathVariable int id,
            @RequestBody BoardCreateDTO board
    ){
        DefaultResDTO res = new DefaultResDTO();
        try{
            boardService.updateBoard(id, board);
            res.setResult(true);
        }catch (Exception e){
            log.error("patch error {}", e.getMessage());
            res.setErrMsg(e.getMessage());
//            System.out.println("patch error{}" + e.getMessage());
            res.setResult(false);
        }

        return res;
    }


    @DeleteMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> deleteBoard(
            @PathVariable int id
    ){
        Map<String, Boolean> result = new HashMap<>();
        try{
            boardService.deleteBoard(id);
            result.put("result", true);
        }catch (Exception e){
            log.error("delete error {}", e.getMessage());
            result.put("result", false);
        }
        return result;
    }
}
