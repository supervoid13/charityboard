package org.uneev.charityboard.dto;

import lombok.Data;

import java.util.Date;

@Data
public class CommentResponseDto {

    private String content;
    private String firstName;
    private String secondName;
    private Date createdAt;
}
