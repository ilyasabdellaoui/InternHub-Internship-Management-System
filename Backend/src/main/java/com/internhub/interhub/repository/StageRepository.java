package com.internhub.interhub.repository;

import com.internhub.interhub.model.Etudiant;
import com.internhub.interhub.model.Professeur;
import com.internhub.interhub.model.Stage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StageRepository extends JpaRepository<Stage, Long> {
  Stage findByNumStage(long numStage);
  List<Stage> findStagesByEtudiant(Etudiant etudiant);
  List<Stage>  findStagesByProfesseur(Professeur professeur);
  boolean existsByNumStage(int numStage);
}