package org.uneev.charityboard.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.uneev.charityboard.dto.CommentResponseDto;
import org.uneev.charityboard.dto.PostCreationDto;
import org.uneev.charityboard.dto.PostResponseDto;
import org.uneev.charityboard.entity.Category;
import org.uneev.charityboard.entity.Comment;
import org.uneev.charityboard.entity.Post;
import org.uneev.charityboard.entity.User;
import org.uneev.charityboard.repository.PostRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final UserService userService;
    private final CategoryService categoryService;
    private final ModelMapper modelMapper;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> findById(long id) {
        return postRepository.findById(id);
    }

    public void createPost(PostCreationDto postCreationDto, String username) {
        Post post = modelMapper.map(postCreationDto, Post.class);

        User user = userService.findByUsername(username).orElseThrow();
        Category category = categoryService.findByName(postCreationDto.getCategory()).orElseThrow();

        post.setCategory(category);
        post.setAuthor(user.getProfile());

        postRepository.save(post);
    }
}
