package org.uneev.charityboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.uneev.charityboard.dto.UserRegistrationDto;
import org.uneev.charityboard.entity.User;
import org.uneev.charityboard.entity.UserProfile;
import org.uneev.charityboard.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final RoleService roleService;
    private final CityService cityService;
    private final PasswordEncoder passwordEncoder;


    public Optional<User> getByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getByUsername(username).orElseThrow(() -> new UsernameNotFoundException(
                String.format("User '%s' not found", username)
        ));

        return new org.springframework.security.core.userdetails.User(
                username,
                user.getPassword(),
                user.getRoles().stream()
                        .map(role -> new SimpleGrantedAuthority(role.getName()))
                        .toList()
        );
    }

    public void createUser(UserRegistrationDto userRegistrationDto) {
        User user = new User();
        user.setUsername(userRegistrationDto.getUsername());
        user.setPassword(passwordEncoder.encode(userRegistrationDto.getPassword()));
        user.setEmail(userRegistrationDto.getEmail());

        UserProfile profile = new UserProfile();
        profile.setFirstName(userRegistrationDto.getFirstName());
        profile.setSecondName(userRegistrationDto.getSecondName());
        profile.setCity(cityService.getByName(userRegistrationDto.getCity()).orElseThrow());

        user.setRoles(List.of(roleService.getUserRole().orElseThrow()));

        user.setProfile(profile);
        profile.setUser(user);


        userRepository.save(user);
    }
}
