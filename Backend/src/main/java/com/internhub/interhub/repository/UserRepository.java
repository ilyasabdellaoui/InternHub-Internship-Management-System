package com.internhub.interhub.repository;

import com.internhub.interhub.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
  User findByUserEmail(String userEmail);
  boolean existsByUserEmail(String userEmail);
}
