package com.internhub.interhub.controller;

import com.internhub.interhub.model.*;
import com.internhub.interhub.repository.*;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Year;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Map;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class EtudiantController {

    private final EtudiantRepository etudiantRepository;
    private final PromoRepository promoRepository;
    private final StageRepository stageRepository;
    private final UserRepository userRepository;

    public EtudiantController(
            EtudiantRepository etudiantRepository,
            PromoRepository promoRepository,
            ProfesseurRepository professeurRepository,
            StageRepository stageRepository,
            UserRepository userRepository) {
        this.etudiantRepository = etudiantRepository;
        this.promoRepository = promoRepository;
        this.stageRepository = stageRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getStudent(@RequestBody Map<String, String> requestBody) {
        try {
            int numEtu = Integer.parseInt(requestBody.get("numEtu"));
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
            User user = new User();
            Role role = new Role();
            role.setRoleID(3);

            user.setEtudiant(etudiant);
            user.setRole(role);

            String email = generateUniqueEmail(etudiant.getPrenomEtu(), etudiant.getNomEtu(), String.valueOf(etudiant.getNumEtu()));
            user.setUserEmail(email);

            user.setUserPassword(generatePassword(String.valueOf(etudiant.getNumEtu())));
            userRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(etudiant.getNumEtu());
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Student with the given ID already exists.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding student");
        }
    }

    @PostMapping("mesStages")
    public ResponseEntity<?> mesStages(@RequestBody Map<String, String> requestBody) {
        try {
            String numEtu = String.valueOf(requestBody.get("numEtu"));
            Etudiant etudiant = etudiantRepository.findByNumEtu(Integer.valueOf(numEtu));

            if (etudiant != null) {
                List<Stage> stages = stageRepository.findStagesByEtudiant(etudiant);
                return ResponseEntity.ok(stages);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No stage for the student with the given ID.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving stages for Student");
        }
    }

    public static String generatePassword(String uniqueId) {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = messageDigest.digest(uniqueId.getBytes());

            String password = Base64.getEncoder().encodeToString(hashBytes);

            int maxLength = 10;
            return password.substring(0, Math.min(password.length(), maxLength));

        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String generateUniqueEmail(String firstName, String lastName, String uniqueId) {
        int hashCode = uniqueId.hashCode();
        int positiveHashCode = hashCode & Integer.MAX_VALUE;
        String formattedId = String.format("%03d", positiveHashCode);
        String email = firstName.toLowerCase() + "." + lastName.toLowerCase() + formattedId + "@ecm.ma";
        return email;
    }
}