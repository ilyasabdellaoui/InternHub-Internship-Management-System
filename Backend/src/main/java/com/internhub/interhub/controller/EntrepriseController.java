package com.internhub.interhub.controller;

import com.internhub.interhub.model.Entreprise;
import com.internhub.interhub.repository.EntrepriseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enterprise")
public class EntrepriseController {

    private final EntrepriseRepository entrepriseRepository;

    @Autowired
    public EntrepriseController(EntrepriseRepository entrepriseRepository) {
        this.entrepriseRepository = entrepriseRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getEnterprise(@RequestParam long numSiret) {
        try {
            Entreprise entreprise = entrepriseRepository.findByNumSiret(numSiret);
            if (entreprise != null) {
                return ResponseEntity.ok(entreprise);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Enterprise with the given ID not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Enterprise");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Entreprise>> getAllEnterprises() {
        try {
            List<Entreprise> entreprises = entrepriseRepository.findAll();
            return ResponseEntity.ok(entreprises);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addEntreprise(@RequestBody Entreprise entreprise) {
        try {
            if (entrepriseRepository.existsByNumSiret(entreprise.getNumSiret())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Enterprise with the given ID already exists.");
            }
            entrepriseRepository.save(entreprise);
            return ResponseEntity.status(HttpStatus.CREATED).body(entreprise.getNumSiret());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding Enterprise");
        }
    }
}