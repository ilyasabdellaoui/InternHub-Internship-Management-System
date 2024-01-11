package com.internhub.interhub.controller;

import com.internhub.interhub.model.Professeur;
import com.internhub.interhub.model.Promo;
import com.internhub.interhub.repository.ProfesseurRepository;
import com.internhub.interhub.repository.PromoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Year;
import java.util.List;

@RestController
@RequestMapping("/promo")
@CrossOrigin(origins = "http://localhost:3000")
public class PromoController {

    private final PromoRepository promoRepository;
    private final ProfesseurRepository professeurRepository;

    @Autowired
    public PromoController(ProfesseurRepository professeurRepository, PromoRepository promoRepository) {
        this.professeurRepository = professeurRepository;
        this.promoRepository = promoRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getPromo(@RequestParam Year anneePromo) {
        try {
            Promo promo = promoRepository.findByAnneePromo(anneePromo);
            if (promo != null) {
                return ResponseEntity.ok(promo);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Promo with the given year not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Professor");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Promo>> getAllPromos() {
        try {
            List<Promo> promos = promoRepository.findAll();
            return ResponseEntity.ok(promos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addPromo(@RequestBody Promo promo) {
        try {
            Professeur professeur = promo.getProfesseur();
            professeurRepository.save(professeur);

            if (promoRepository.existsByAnneePromo(promo.getAnneePromo())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Promo with the given year already exists.");
            }
            promoRepository.save(promo);
            return ResponseEntity.status(HttpStatus.CREATED).body(promo.getAnneePromo());
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Professor with the given ID is already leading a Promo.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding promo");
        }
    }
}