package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardMapper boardMapper;

    public List<BoardDTO> getBoardList(){
        List<Board> result = boardMapper.getBoards();
        List<BoardDTO> boards = new ArrayList<>();

        for(int i = 0 ; i < result.size() ; i++){

//        Setter 이용한 버전
//        BoardDTO boardDTO = new BoardDTO(); // bulider 어노테이션을 쓰면 기본 생성자를 만들지 않아도 돼서 오류가 생김.
//        boardDTO.setId(result.get(i).getId());
//        boardDTO.setTitle(result.get(i).getTitle());
//        boardDTO.setContent(result.get(i).getContent());
//        boardDTO.setWriter(result.get(i).getWriter());
//        boardDTO.setRegistered(result.get(i).getRegistered());
//        boardDTO.setNo(result.get(i).getWriter() + (i+1));

            // Builder 패턴 이용한 버전
            BoardDTO boardDTO = BoardDTO.builder()
                    .id(result.get(i).getId())
                    .title(result.get(i).getTitle())
                    .content(result.get(i).getContent())
                    .writer(result.get(i).getWriter())
                    .registered(result.get(i).getRegistered())
                    .no(result.get(i).getWriter() + (i+1))
                    .build();
        boards.add(boardDTO);
        }
        return boards;
    }

    public void insertBoard(BoardCreateDTO board){
        boardMapper.insertBoard(board);
    }

    public void updateBoard(
            int id,
            BoardCreateDTO board
    ){
//        BoardDTO updateBoard = new BoardDTO();
//        updateBoard.setId(id);
//        updateBoard.setTitle(board.getTitle());
//        updateBoard.setContent(board.getContent());
//        updateBoard.setWriter(board.getWriter());
//        updateBoard.setRegistered(board.getRegistered());
        Board updateBoard = Board.builder()
                .id(id)
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .build();

        boardMapper.updateBoard(updateBoard);
    }

    public void deleteBoard(
            int id
    ){
        boardMapper.deleteBoard(id);
    }
}
