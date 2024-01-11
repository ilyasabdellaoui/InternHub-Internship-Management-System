package com.internhub.interhub.controller;

import com.internhub.interhub.model.TypeStage;
import com.internhub.interhub.repository.TypeStageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/typestage")
@CrossOrigin(origins = "http://localhost:3000")
public class TypeStageController {

    private final TypeStageRepository typeStageRepository;

    @Autowired
    public TypeStageController(TypeStageRepository typeStageRepository) {
        this.typeStageRepository = typeStageRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getTypeStage(@RequestParam long codeType) {
        try {
            TypeStage typeStage = typeStageRepository.findByCodeType(codeType);
            if (typeStage != null) {
                return ResponseEntity.ok(typeStage);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("TypeStage with the given code not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving TypeStage");
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<TypeStage>> getAllTypesStage() {
        try {
            List<TypeStage> typeStages = typeStageRepository.findAll();
            return ResponseEntity.ok(typeStages);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTypeStage(@RequestBody TypeStage typeStage) {
        try {
            typeStageRepository.save(typeStage);
            return ResponseEntity.status(HttpStatus.CREATED).body(typeStage.getCodeType());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding TypeStage");
        }
    }
}