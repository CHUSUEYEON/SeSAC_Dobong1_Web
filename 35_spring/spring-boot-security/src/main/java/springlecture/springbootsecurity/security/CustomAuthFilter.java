package springlecture.springbootsecurity.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component // 클래스에 해당 어노테이션을 달면, 스프링 컨테이너에서 관리할 수 있도록 해줌.
@Slf4j
public class CustomAuthFilter extends OncePerRequestFilter {
    // OncePerRequestFilter : 리퀘스트 당 한 번 거치는 필터 - 꼭 구현해야하는 메소드가 있음. 해당 메소드가 없으면 오류 발생!(호버해서 만들 것)
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
        HttpSession session = request.getSession();
        Object userId = session.getAttribute("userId");
        log.warn("filter session check {} {}", session.getId(), userId);

            if(userId != null){
                // user id 있을 경우, 로그인을 한 user
                // UsernamePasswordAuth~~~Token 토근을 만들어서
                // SecurityContextHolder 에 담아 컨트롤러까지 도달할 수 있도록 함.

                // 1. UsernamePasswordAuth~~~Token 토근을 만들어서
                Authentication authentication =
                    new UsernamePasswordAuthenticationToken(String.valueOf(userId), null, AuthorityUtils.NO_AUTHORITIES);
                // 2. SecurityContextHolder 에 담아 컨트롤러까지 도달할 수 있도록 함.
                SecurityContextHolder.getContext().setAuthentication(authentication);
                // SecurityContextHolder : 현재 요청에 유효한 공간
            }
        }catch (Exception e){
            // 그렇지 않은 경우
            // 예외 발생
            log.error("no Authentication");
        }

        // 다음 필터 실행(오류가 발생하든 안하든 실행시켜야 해서 catch문 밖)
        filterChain.doFilter(request, response);
    }
}
