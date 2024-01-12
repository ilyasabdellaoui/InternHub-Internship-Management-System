package com.internhub.interhub.repository;

import com.internhub.interhub.model.Professeur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfesseurRepository extends JpaRepository<Professeur, Long> {
  Professeur findByNumProf(String numProf);
  boolean existsByNumProf(String numProf);
}
