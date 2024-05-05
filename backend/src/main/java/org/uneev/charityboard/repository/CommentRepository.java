package org.uneev.charityboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.uneev.charityboard.entity.Comment;

public interface CommentRepository extends CrudRepository<Comment, Long> {
}
