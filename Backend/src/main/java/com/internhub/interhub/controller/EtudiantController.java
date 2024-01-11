package com.internhub.interhub.controller;

import com.internhub.interhub.model.Etudiant;
import com.internhub.interhub.model.Promo;
import com.internhub.interhub.model.Professeur;
import com.internhub.interhub.repository.EtudiantRepository;
import com.internhub.interhub.repository.PromoRepository;
import com.internhub.interhub.repository.ProfesseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Year;
import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class EtudiantController {

    private final EtudiantRepository etudiantRepository;
    private final PromoRepository promoRepository;
    private final ProfesseurRepository professeurRepository;

    @Autowired
    public EtudiantController(
            EtudiantRepository etudiantRepository,
            PromoRepository promoRepository,
            ProfesseurRepository professeurRepository) {
        this.etudiantRepository = etudiantRepository;
        this.promoRepository = promoRepository;
        this.professeurRepository = professeurRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getStudent(@RequestParam int numEtu) {
        try {
            Etudiant student = etudiantRepository.findByNumEtu(numEtu);
            if (student != null) {
                return ResponseEntity.ok(student);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student with the given ID not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving student");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Etudiant>> getAllStudents() {
        try {
            List<Etudiant> students = etudiantRepository.findAll();
            return ResponseEntity.ok(students);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addStudent(@RequestBody Etudiant etudiant) {
        try {
            Promo promo = etudiant.getPromo();
            Year anneePromo = promo.getAnneePromo();
            if (!promoRepository.existsByAnneePromo(anneePromo)){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Promo with the given year not found");
            }
            etudiantRepository.save(etudiant);
            return ResponseEntity.status(HttpStatus.CREATED).body(etudiant.getNumEtu());
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Student with the given ID already exists.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding student");
        }
    }
}