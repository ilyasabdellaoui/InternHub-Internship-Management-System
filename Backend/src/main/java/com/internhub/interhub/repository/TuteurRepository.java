package com.internhub.interhub.repository;

import com.internhub.interhub.model.Tuteur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TuteurRepository extends JpaRepository<Tuteur, Long> {
  Tuteur findByNumTut(String numTut);
  boolean existsByNumTut(String numTut);
}
