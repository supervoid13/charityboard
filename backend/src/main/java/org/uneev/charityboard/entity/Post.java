package org.uneev.charityboard.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.net.URL;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content")
    private String content;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(name = "created_at")
    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserProfile author;

    @OneToMany
    @JoinColumn(name = "post_id")
    private List<Comment> comments;

    @OneToMany(mappedBy = "post")
    private List<Image> images;

    @Column(name = "avatar_url")
    private URL avatar;

    @Column(name = "goal")
    private Long goal;

    @Column(name = "raised", nullable = false)
    private Long raised;

    @Column(name = "account_details")
    private String accountDetails;

    public Post() {
        this.createdAt = new Date();
        this.raised = 0L;
    }
}
