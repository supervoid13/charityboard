package org.uneev.charityboard.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.uneev.charityboard.dto.PostCreationDto;
import org.uneev.charityboard.entity.Category;
import org.uneev.charityboard.entity.Post;
import org.uneev.charityboard.entity.User;
import org.uneev.charityboard.repository.PostRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final UserService userService;
    private final CategoryService categoryService;
    private final ModelMapper modelMapper;

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Optional<Post> getById(long id) {
        return postRepository.findById(id);
    }

    public void createPost(PostCreationDto postCreationDto, String username) {
        Post post = modelMapper.map(postCreationDto, Post.class);

        User user = userService.getByUsername(username).orElseThrow();
        Category category = categoryService.getByName(postCreationDto.getCategory()).orElseThrow();

        post.setCategory(category);
        post.setAuthor(user.getProfile());

        postRepository.save(post);
    }
}
    