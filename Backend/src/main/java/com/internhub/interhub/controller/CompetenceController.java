package com.internhub.interhub.controller;

import com.internhub.interhub.model.Competence;
import com.internhub.interhub.repository.CompetenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/competence")
public class CompetenceController {

    private final CompetenceRepository competenceRepository;

    @Autowired
    public CompetenceController(CompetenceRepository competenceRepository) {
        this.competenceRepository = competenceRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getCompetence(@RequestParam String codeCompetence) {
        try {
            Competence competence = competenceRepository.findByCodeCompetence(codeCompetence);
            if (competence != null) {
                return ResponseEntity.ok(competence);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Competence with the given code not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Competence");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Competence>> getAllCompetences() {
        try {
            List<Competence> competences = competenceRepository.findAll();
            return ResponseEntity.ok(competences);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCompetence(@RequestBody Competence competence) {
        try {
            if (competenceRepository.existsByCodeCompetence(competence.getCodeCompetence())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Competence with the given code already exists.");
            }
            competenceRepository.save(competence);
            return ResponseEntity.status(HttpStatus.CREATED).body(competence.getCodeCompetence());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding Competence");
        }
    }
}