package org.uneev.charityboard.config;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.uneev.charityboard.dto.CommentResponseDto;
import org.uneev.charityboard.dto.PostResponseDto;
import org.uneev.charityboard.dto.UserResponseDto;
import org.uneev.charityboard.entity.Comment;
import org.uneev.charityboard.entity.Post;
import org.uneev.charityboard.entity.User;

@Configuration
public class UtilsConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);

        TypeMap<User, UserResponseDto> userMapper = modelMapper.createTypeMap(
                User.class,
                UserResponseDto.class
        );
        userMapper.addMappings(mapper -> {
            mapper.map(src -> src.getProfile().getFirstName(), UserResponseDto::setFirstName);
            mapper.map(src -> src.getProfile().getSecondName(), UserResponseDto::setSecondName);
            mapper.map(src -> src.getProfile().getCity().getName(), UserResponseDto::setCity);
        });

        TypeMap<Post, PostResponseDto> postMapper = modelMapper.createTypeMap(
                Post.class,
                PostResponseDto.class
        );
        postMapper.addMappings(mapper -> {
            mapper.map(src -> src.getCategory().getName(), PostResponseDto::setCategory);
//            mapper.skip(PostResponseDto::setComments);
        });


        TypeMap<Comment, CommentResponseDto> commentMapper = modelMapper.createTypeMap(
                Comment.class,
                CommentResponseDto.class
        );
        commentMapper.addMappings(mapper -> {
//            mapper.map(src -> src.getAuthor().getFullName(), CommentResponseDto::setFullName);
        });

        return modelMapper;
    }
}
