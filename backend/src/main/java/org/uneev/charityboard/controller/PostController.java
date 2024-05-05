package org.uneev.charityboard.controller;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.uneev.charityboard.dto.*;
import org.uneev.charityboard.entity.Post;
import org.uneev.charityboard.exception.NoSuchPostException;
import org.uneev.charityboard.service.CommentService;
import org.uneev.charityboard.service.PostService;
import org.uneev.charityboard.utils.JwtTokenUtils;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;
    private final CommentService commentService;
    private final JwtTokenUtils jwtTokenUtils;
    private final ModelMapper modelMapper;


    @GetMapping("")
    public List<PostResponseDto> getAllPosts() {
        List<Post> posts = postService.getAllPosts();

        return modelMapper.map(posts, new TypeToken<List<PostResponseDto>>(){}.getType());
    }

    @GetMapping("/{id}")
    public PostResponseDto getPostById(@PathVariable long id) {
        Optional<Post> post = postService.findById(id);
        if (post.isEmpty()) {
            throw new NoSuchPostException(
                    String.format("No post with id '%d'", id)
            );
        }

        return modelMapper.map(post, PostResponseDto.class);
    }

    @PostMapping("")
    public ResponseEntity<ResponseInfoDto> createPost(
            @RequestBody PostCreationDto postCreationDto,
            @RequestHeader("Authorization") String jwt
    ) {
        if (!(StringUtils.hasText(jwt) && jwt.startsWith("Bearer "))) {
            return new ResponseEntity<>(
                    new ResponseInfoDto(HttpStatus.UNAUTHORIZED.value(), "Login to create posts"),
                    HttpStatus.UNAUTHORIZED
            );
        }

        String token = jwt.substring(7);
        String username = jwtTokenUtils.getUsernameFromToken(token);

        postService.createPost(postCreationDto, username);

        return new ResponseEntity<>(
                new ResponseInfoDto(HttpStatus.CREATED.value(), "Post successfully created!"),
                HttpStatus.CREATED
        );
    }

    @PostMapping("/{id}/comments")
    public ResponseEntity<ResponseInfoDto> leaveComment(
            @PathVariable long id,
            @RequestHeader("Authorization") String jwt,
            @RequestBody CommentCreationDto commentCreationDto
    ) {
        if (!(StringUtils.hasText(jwt) && jwt.startsWith("Bearer "))) {
            return new ResponseEntity<>(
                    new ResponseInfoDto(HttpStatus.UNAUTHORIZED.value(), "Login to leave comments"),
                    HttpStatus.UNAUTHORIZED
            );
        }

        String token = jwt.substring(7);
        String username = jwtTokenUtils.getUsernameFromToken(token);

        commentService.createComment(commentCreationDto, id, username);

        return new ResponseEntity<>(
                new ResponseInfoDto(HttpStatus.CREATED.value(), "Comment successfully created!"),
                HttpStatus.CREATED
        );
    }
}
