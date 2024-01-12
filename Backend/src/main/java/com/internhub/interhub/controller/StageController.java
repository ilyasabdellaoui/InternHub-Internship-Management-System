package com.internhub.interhub.controller;

import com.internhub.interhub.model.*;
import com.internhub.interhub.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/stage")
@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping("/getRevision")
    public ResponseEntity<List<Stage>> getAllStagesEnRevision() {
        try {
            List<Stage> stages = stageRepository.findAll();
            List<Stage> stagesInRevision = new ArrayList<>();

            for (Stage s : stages) {
                if ("En révision".equals(s.getStatus())) {
                    stagesInRevision.add(s);
                }
            }

            return ResponseEntity.ok(stagesInRevision);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/approve/{numStage}")
    public ResponseEntity<String> approveStage(@PathVariable int numStage) {
        try {
            Stage stage = stageRepository.findByNumStage(numStage);
            stage.setStatus("Validé");
            stageRepository.save(stage);
            return ResponseEntity.ok().body("Stage validated successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PostMapping("/add")
    public ResponseEntity<?> addStage(@RequestBody Stage stage) {
        try {
            Etudiant etudiant = stage.getEtudiant();
            int numEtu = etudiant.getNumEtu();
            if(!etudiantRepository.existsByNumEtu(numEtu)){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student with the given ID not found");
            }

            Professeur professeur = stage.getProfesseur();
            String numProf = professeur.getNumProf();
            if(!professeurRepository.existsByNumProf(numProf)){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Professor with the given ID not found");
            }

            Tuteur tuteur = stage.getTuteur();
            String numTut = tuteur.getNumTut();
            if(!tuteurRepository.existsByNumTut(numTut)){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tutor with the given ID not found");
            }

            TypeStage typeStage = stage.getTypeStage();
            long codeType = typeStage.getCodeType();
            if(!typeStageRepository.existsByCodeType(codeType)){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("TypeStage with the given ID not found");
            }

            // Save the Stage
            stage.setStatus("En révision");
            System.out.println(stage);
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