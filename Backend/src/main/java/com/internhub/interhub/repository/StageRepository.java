package com.internhub.interhub.repository;

import com.internhub.interhub.model.Etudiant;
import com.internhub.interhub.model.Stage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StageRepository extends JpaRepository<Stage, Long> {
  Stage findByNumStage(long numStage);
  Stage findStageByEtudiant(Etudiant etudiant);
  boolean existsByNumStage(int numStage);
}