package com.internhub.interhub.controller;

import com.internhub.interhub.model.Entreprise;
import com.internhub.interhub.model.Tuteur;
import com.internhub.interhub.repository.EntrepriseRepository;
import com.internhub.interhub.repository.TuteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Year;
import java.util.List;

@RestController
@RequestMapping("/tutor")
public class TuteurController {

    private final TuteurRepository tuteurRepository;
    private final EntrepriseRepository entrepriseRepository;

    @Autowired
    public TuteurController(EntrepriseRepository entrepriseRepository, TuteurRepository tuteurRepository) {
        this.entrepriseRepository = entrepriseRepository;
        this.tuteurRepository = tuteurRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getTutor(@RequestParam String numTut) {
        try {
            Tuteur tuteur = tuteurRepository.findByNumTut(numTut);
            if (tuteur != null) {
                return ResponseEntity.ok(tuteur);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tutor with the given ID not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Tutor");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Tuteur>> getAllTutors() {
        try {
            List<Tuteur> tuteurs = tuteurRepository.findAll();
            return ResponseEntity.ok(tuteurs);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTutor(@RequestBody Tuteur tuteur) {
        try {
            Entreprise entreprise = tuteur.getEntreprise();
            if (!entrepriseRepository.existsByNumSiret(entreprise.getNumSiret())) {
                entrepriseRepository.save(entreprise);
            }

            if (tuteurRepository.existsByNumTut(tuteur.getNumTut())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Tutor with the given ID already exists.");
            }
            tuteurRepository.save(tuteur);
            return ResponseEntity.status(HttpStatus.CREATED).body(tuteur.getNumTut());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding tutor");
        }
    }
}