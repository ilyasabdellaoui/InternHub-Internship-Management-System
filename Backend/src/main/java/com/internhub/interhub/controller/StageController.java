package com.internhub.interhub.controller;

import com.internhub.interhub.model.*;
import com.internhub.interhub.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stage")
public class StageController {

    private final ProfesseurRepository professeurRepository;
    private final EtudiantRepository etudiantRepository;
    private final TuteurRepository tuteurRepository;
    private final TypeStageRepository typeStageRepository;
    private final StageRepository stageRepository;

    @Autowired
    public StageController(ProfesseurRepository professeurRepository,
                           EtudiantRepository etudiantRepository,
                           TuteurRepository tuteurRepository,
                           TypeStageRepository typeStageRepository,
                           StageRepository stageRepository) {
        this.professeurRepository = professeurRepository;
        this.etudiantRepository = etudiantRepository;
        this.tuteurRepository = tuteurRepository;
        this.typeStageRepository = typeStageRepository;
        this.stageRepository = stageRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getStage(@RequestParam int numStage) {
        try {
            Stage stage = stageRepository.findByNumStage(numStage);
            if (stage != null) {
                return ResponseEntity.ok(stage);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Stage with the given number not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Stage");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Stage>> getAllStages() {
        try {
            List<Stage> stages = stageRepository.findAll();
            return ResponseEntity.ok(stages);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addStage(@RequestBody Stage stage) {
        try {
            // Check if associated entities exist before saving
            Professeur professeur = stage.getProfesseur();
            if (!professeurRepository.existsByNumProf(stage.getProfesseur().getNumProf())) {
                professeurRepository.save(professeur);
            }
            Etudiant etudiant = stage.getEtudiant();
            if (!etudiantRepository.existsByNumEtu(etudiant.getNumEtu())) {
                etudiantRepository.save(etudiant);
            }
            Tuteur tuteur = stage.getTuteur();
            if (!tuteurRepository.existsByNumTut(tuteur.getNumTut())) {
                tuteurRepository.save(tuteur);
            }
            TypeStage typeStage = stage.getTypeStage();
            if (!typeStageRepository.existsByCodeType(typeStage.getCodeType())) {
                typeStageRepository.save(typeStage);
            }

            // If exists, retrieve the managed entities, otherwise use the new instances
            professeur = professeurRepository.findByNumProf(stage.getProfesseur().getNumProf());
            etudiant = etudiantRepository.findByNumEtu(stage.getEtudiant().getNumEtu());
            tuteur = tuteurRepository.findByNumTut(stage.getTuteur().getNumTut());
            typeStage = typeStageRepository.findByCodeType(stage.getTypeStage().getCodeType());

            // Set the managed entities back to Stage
            stage.setProfesseur(professeur);
            stage.setEtudiant(etudiant);
            stage.setTuteur(tuteur);
            stage.setTypeStage(typeStage);

            // Check if Stage with the given number already exists
            if (stageRepository.existsByNumStage(stage.getNumStage())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Stage with the given number already exists.");
            }

            // Save the Stage
            stageRepository.save(stage);
            return ResponseEntity.status(HttpStatus.CREATED).body(stage.getNumStage());
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error adding Stage record: Duplicate key violation.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding Stage record");
        }
    }
}