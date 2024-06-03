package lecture.spring_boot_jpa.service;

import lecture.spring_boot_jpa.dto.BoardCreateDTO;
import lecture.spring_boot_jpa.dto.BoardDTO;
import lecture.spring_boot_jpa.entity.BoardEntity;
import lecture.spring_boot_jpa.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public List<BoardEntity> getBoards() {
        return boardRepository.findAll();
    }

    public BoardEntity insertBoard(final BoardCreateDTO board) { //변수명(board) 계속 같으면 final 사용해서 명시
        BoardEntity newBoard = BoardEntity.builder()
            .title(board.getTitle())
            .content(board.getContent())
            .writer(board.getWriter())
            .registered(board.getRegistered())
            .build();

        return boardRepository.save(newBoard);
    }

    public BoardEntity updateBoard(int id, BoardCreateDTO board) {
        BoardEntity boardEntity = boardRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("board doesn't exist"));

        BoardEntity updateBoard = BoardEntity.builder()
            .id(boardEntity.getId())
            .title(board.getTitle())
            .content(board.getContent())
            .writer(board.getWriter())
            .build();

        return boardRepository.save(updateBoard);
    }

    public BoardEntity deleteBoard(int id) {
        BoardEntity boardEntity = boardRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("board doesn't exist"));

        boardRepository.delete(boardEntity);

        return boardEntity;
    }
}
