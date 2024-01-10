package com.internhub.interhub.repository;

import com.internhub.interhub.model.Competence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetenceRepository extends JpaRepository<Competence, Long> {
  Competence findByCodeCompetence(String codeCompetence);
  boolean existsByCodeCompetence(String codeCompetence);
}