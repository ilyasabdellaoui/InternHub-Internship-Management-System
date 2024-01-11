package com.internhub.interhub.controller;

import com.internhub.interhub.model.Professeur;
import com.internhub.interhub.repository.ProfesseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professor")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfesseurController {

    private final ProfesseurRepository professeurRepository;

    @Autowired
    public ProfesseurController(ProfesseurRepository professeurRepository) {
        this.professeurRepository = professeurRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getProfessor(@RequestParam String numProf) {
        try {
            Professeur professeur = professeurRepository.findByNumProf(numProf);
            if (professeur != null) {
                return ResponseEntity.ok(professeur);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Professor with the given ID not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Professor");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Professeur>> getAllStudents() {
        try {
            List<Professeur> professeurs = professeurRepository.findAll();
            return ResponseEntity.ok(professeurs);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProfessor(@RequestBody Professeur professeur) {
        try {
            if (professeurRepository.existsByNumProf(professeur.getNumProf())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Professor with the given ID already exists.");
            }
            professeurRepository.save(professeur);
            return ResponseEntity.status(HttpStatus.CREATED).body(professeur.getNumProf());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding professor");
        }
    }
}