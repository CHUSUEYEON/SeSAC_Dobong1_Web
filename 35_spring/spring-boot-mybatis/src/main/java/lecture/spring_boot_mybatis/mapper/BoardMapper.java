package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> getBoards();

    void insertBoard(BoardCreateDTO board);

    void updateBoard(Board board);

    void deleteBoard(int id);
}
