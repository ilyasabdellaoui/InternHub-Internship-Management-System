package com.internhub.interhub.repository;

import com.internhub.interhub.model.Acquerir;
import com.internhub.interhub.model.Competence;
import com.internhub.interhub.model.TypeStage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AcquerirRepository extends JpaRepository<Acquerir, Long> {
  Acquerir findByCompetenceAndTypeStage(Competence competence, TypeStage typeStage);
  boolean existsByCompetenceAndTypeStage(Competence competence, TypeStage typeStage);
}