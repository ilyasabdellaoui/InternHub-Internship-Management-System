package com.internhub.interhub.controller;

import com.internhub.interhub.model.Acquerir;
import com.internhub.interhub.model.Competence;
import com.internhub.interhub.model.TypeStage;
import com.internhub.interhub.repository.AcquerirRepository;
import com.internhub.interhub.repository.CompetenceRepository;
import com.internhub.interhub.repository.TypeStageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/acquerir")
@CrossOrigin(origins = "http://localhost:3000")
public class AcquerirController {

    private final AcquerirRepository acquerirRepository;
    private final CompetenceRepository competenceRepository;
    private final TypeStageRepository typeStageRepository;

    @Autowired
    public AcquerirController(CompetenceRepository competenceRepository,
                              TypeStageRepository typeStageRepository,
                              AcquerirRepository acquerirRepository) {
        this.competenceRepository = competenceRepository;
        this.typeStageRepository = typeStageRepository;
        this.acquerirRepository = acquerirRepository;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Acquerir>> getAllAcquerir() {
        try {
            List<Acquerir> acquerir = acquerirRepository.findAll();
            return ResponseEntity.ok(acquerir);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addAcquerir(@RequestBody Acquerir acquerir) {
        try {
            Competence competence = acquerir.getCompetence();
            TypeStage typeStage = acquerir.getTypeStage();
            if (!competenceRepository.existsByCodeCompetence(competence.getCodeCompetence())){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error adding Acquerir record: Competence associated not found");
            }
            if (!typeStageRepository.existsByCodeType(typeStage.getCodeType())){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error adding Acquerir record: TypeStage associated not found");
            }
            competence = competenceRepository.findByCodeCompetence(competence.getCodeCompetence());
            typeStage = typeStageRepository.findByCodeType(typeStage.getCodeType());
            acquerir.setCompetence(competence);
            acquerir.setTypeStage(typeStage);

            acquerirRepository.save(acquerir);

            /*
            had code ki3ti stackOverFlow i know why but not how to fix it now

            competence.addAcquerir(acquerir);
            competenceRepository.save(competence);

            typeStage.addAcquerir(acquerir);
            typeStageRepository.save(typeStage);

            */
            return ResponseEntity.status(HttpStatus.CREATED).body("Acquerir record added successfully.");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error adding Acquerir record: Duplicate key violation.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding Acquerir record");
        }
    }
}