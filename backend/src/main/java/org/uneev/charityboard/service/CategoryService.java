package org.uneev.charityboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.uneev.charityboard.entity.Category;
import org.uneev.charityboard.repository.CategoryRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public Optional<Category> findByName(String name) {
        return categoryRepository.findByName(name);
    }
}
