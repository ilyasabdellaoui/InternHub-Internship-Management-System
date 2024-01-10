package com.internhub.interhub.controller;

import com.internhub.interhub.model.Acquerir;
import com.internhub.interhub.model.Competence;
import com.internhub.interhub.model.TypeStage;
import com.internhub.interhub.repository.AcquerirRepository;
import com.internhub.interhub.repository.CompetenceRepository;
import com.internhub.interhub.repository.TypeStageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/acquerir")
public class AcquerirController {

    private final AcquerirRepository acquerirRepository;
    private final CompetenceRepository competenceRepository;
    private final TypeStageRepository typeStageRepository;

    @Autowired
    public AcquerirController(CompetenceRepository competenceRepository,
                              TypeStageRepository typeStageRepository,
                              AcquerirRepository acquerirRepository) {
        this.competenceRepository = competenceRepository;
        this.typeStageRepository = typeStageRepository;
        this.acquerirRepository = acquerirRepository;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Acquerir>> getAllAcquerir() {
        try {
            List<Acquerir> acquerir = acquerirRepository.findAll();
            return ResponseEntity.ok(acquerir);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addAcquerir(@RequestBody Acquerir acquerir) {
        try {
            // Creating Competence and TypeStage if not existing
            Competence competence = acquerir.getCompetence();
            if (!competenceRepository.existsByCodeCompetence(competence.getCodeCompetence())) {
                competenceRepository.save(competence);
            }
            TypeStage typeStage = acquerir.getTypeStage();
            if (!typeStageRepository.existsByCodeType(typeStage.getCodeType())) {
                typeStageRepository.save(typeStage);
            }

            // If exists, retrieve the managed entities, otherwise use the new instances
            competence = competenceRepository.findByCodeCompetence(competence.getCodeCompetence());
            typeStage = typeStageRepository.findByCodeType(typeStage.getCodeType());

            // Set the managed entities back to Acquerir
            acquerir.setCompetence(competence);
            acquerir.setTypeStage(typeStage);

            if (acquerirRepository.existsByCompetenceAndTypeStage(competence, typeStage)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Acquerir with the given competence and typeStage already exists.");
            }

            acquerirRepository.save(acquerir);
            return ResponseEntity.status(HttpStatus.CREATED).body("Acquerir record added successfully.");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error adding Acquerir record: Duplicate key violation.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding Acquerir record");
        }
    }
}