package com.internhub.interhub.controller;

import com.internhub.interhub.model.Aquerir;
import com.internhub.interhub.model.Competence;
import com.internhub.interhub.model.Entreprise;
import com.internhub.interhub.model.TypeStage;
import com.internhub.interhub.repository.AquerirRepository;
import com.internhub.interhub.repository.CompetenceRepository;
import com.internhub.interhub.repository.TypeStageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aquerir")
public class AquerirController {

    private final AquerirRepository aquerirRepository;
    private final CompetenceRepository competenceRepository;
    private final TypeStageRepository typeStageRepository;

    @Autowired
    public AquerirController(CompetenceRepository competenceRepository,
                             TypeStageRepository typeStageRepository,
                             AquerirRepository aquerirRepository) {
        this.competenceRepository = competenceRepository;
        this.typeStageRepository = typeStageRepository;
        this.aquerirRepository = aquerirRepository;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Aquerir>> getAllAquerirs() {
        try {
            List<Aquerir> aquerirs = aquerirRepository.findAll();
            return ResponseEntity.ok(aquerirs);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addAquerir(@RequestBody Aquerir aquerir) {
        try {
            // Creating Competence and TypeStage if not existing
            Competence competence = aquerir.getCompetence();
            if (!competenceRepository.existsByCodeCompetence(competence.getCodeCompetence())) {
                competenceRepository.save(competence);
            }
            TypeStage typeStage = aquerir.getTypeStage();
            if (!typeStageRepository.existsByCodeType(typeStage.getCodeType())) {
                typeStageRepository.save(typeStage);
            }

            // If exists, retrieve the managed entities, otherwise use the new instances
            competence = competenceRepository.findByCodeCompetence(competence.getCodeCompetence());
            typeStage = typeStageRepository.findByCodeType(typeStage.getCodeType());

            // Set the managed entities back to Aquerir
            aquerir.setCompetence(competence);
            aquerir.setTypeStage(typeStage);

            if (aquerirRepository.existsByCompetenceAndTypeStage(competence, typeStage)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Aquerir with the given competence and typeStage already exists.");
            }

            aquerirRepository.save(aquerir);
            return ResponseEntity.status(HttpStatus.CREATED).body("Aquerir record added successfully.");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error adding Aquerir record: Duplicate key violation.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding Aquerir record");
        }
    }
}