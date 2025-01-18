package com.enviro.assessment.grad001.sivesandla.repository;

import com.enviro.assessment.grad001.sivesandla.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
