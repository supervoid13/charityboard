package org.uneev.charityboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.uneev.charityboard.entity.City;
import org.uneev.charityboard.repository.CityRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CityService {
    private final CityRepository cityRepository;

    public Optional<City> findByName(String name) {
        return cityRepository.findByName(name);
    }
}
