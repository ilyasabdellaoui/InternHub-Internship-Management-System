package com.internhub.interhub.controller;

import com.internhub.interhub.model.Etudiant;
import com.internhub.interhub.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/students")
public class EtudiantController {

    @Autowired
    private EtudiantRepository etudiantRepository;

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
            Etudiant savedStudent = etudiantRepository.save(etudiant);
            return ResponseEntity.status(HttpStatus.CREATED).body("Student added with ID: " + savedStudent.getId());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding student");
        }
    }
}