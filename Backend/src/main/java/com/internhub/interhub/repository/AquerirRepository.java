package com.internhub.interhub.repository;

import com.internhub.interhub.model.Aquerir;
import com.internhub.interhub.model.Competence;
import com.internhub.interhub.model.TypeStage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AquerirRepository extends JpaRepository<Aquerir, Long> {
  Aquerir findByCompetenceAndTypeStage(Competence competence, TypeStage typeStage);
  boolean existsByCompetenceAndTypeStage(Competence competence, TypeStage typeStage);
}