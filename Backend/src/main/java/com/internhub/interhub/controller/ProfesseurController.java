package com.internhub.interhub.controller;

import com.internhub.interhub.model.*;
import com.internhub.interhub.repository.ProfesseurRepository;
import com.internhub.interhub.repository.StageRepository;
import com.internhub.interhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/professor")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfesseurController {

    private final ProfesseurRepository professeurRepository;
    private final StageRepository stageRepository;
    private final UserRepository userRepository;

    public ProfesseurController(ProfesseurRepository professeurRepository,
                                StageRepository stageRepository,
                                UserRepository userRepository) {
        this.professeurRepository = professeurRepository;
        this.stageRepository = stageRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getProfessor(@RequestBody Map<String, String> requestBody) {
        try {
            String numProf = requestBody.get("numProf");
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

    @PostMapping("stagesSupervises")
    public ResponseEntity<?> mesStages(@RequestBody Map<String, String> requestBody) {
        try {
            String numProf = String.valueOf(requestBody.get("numProf"));
            Professeur professeur = professeurRepository.findByNumProf(numProf);

            if (professeur != null) {
                List<Stage> stages = stageRepository.findStagesByProfesseur(professeur);
                return ResponseEntity.ok(stages);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No stage for the professeur with the given ID.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving stages for Professor");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProfessor(@RequestBody Professeur professeur) {
        try {
            if (professeurRepository.existsByNumProf(professeur.getNumProf())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Professor with the given ID already exists.");
            }
            professeurRepository.save(professeur);

            User user = new User();
            Role role = new Role();
            role.setRoleID(2);

            user.setProfesseur(professeur);
            user.setRole(role);

            String email = generateUniqueEmail(professeur.getPrenomProf(), professeur.getNomProf(), professeur.getNumProf());
            user.setUserEmail(email);

            String generatedPassword = generatePassword(String.valueOf(professeur.getNumProf()));
            user.setUserPassword(generatedPassword);
            userRepository.save(user);

            return ResponseEntity.status(HttpStatus.CREATED).body(professeur.getNumProf());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding professor");
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