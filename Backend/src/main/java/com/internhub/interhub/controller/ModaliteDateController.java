package com.internhub.interhub.controller;

import com.internhub.interhub.model.ModaliteDate;
import com.internhub.interhub.repository.ModaliteDateRepository;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/modalitedate")
@CrossOrigin(origins = "http://localhost:3000")
public class ModaliteDateController {
    private final ModaliteDateRepository modaliteDateRepository;

    public ModaliteDateController(ModaliteDateRepository modaliteDateRepository) {
        this.modaliteDateRepository = modaliteDateRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<?> getModaliteDate(@RequestParam int typeStage) {
        try {
            ModaliteDate modaliteDate = modaliteDateRepository.findByTypeStage(typeStage);
            if (modaliteDate != null) {
                String dateInfoJson = "{\"dateDebut\": \"" + modaliteDate.getDateDebut() + "\", \"dateFin\": \"" + modaliteDate.getDateFin() + "\"}";

                return ResponseEntity.ok(dateInfoJson);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ModaliteDate with the given TypeStage not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving ModaliteDate");
        }
    }

//    @PutMapping("/update/{typeStage}")
//    public ResponseEntity<?> updateModaliteDate(@RequestBody ModaliteDate newModaliteDate, @PathVariable int typeStage) {
//        Optional<ModaliteDate> existingModaliteDateOptional = Optional.ofNullable(modaliteDateRepository.findByTypeStage(typeStage));
//
//        if (existingModaliteDateOptional.isPresent()) {
//            ModaliteDate existingModaliteDate = existingModaliteDateOptional.get();
//            existingModaliteDate.setDateDebut(newModaliteDate.getDateDebut());
//            existingModaliteDate.setDateFin(newModaliteDate.getDateFin());
//            return ResponseEntity.ok(modaliteDateRepository.save(existingModaliteDate));
//        } else {
//            newModaliteDate.setTypeStage(typeStage);
//            return ResponseEntity.ok(modaliteDateRepository.save(newModaliteDate));
//        }
//    }
//}

    @PostMapping("/update")
    public ResponseEntity<?> updateModaliteDate(@RequestBody ModaliteDateRequest modaliteDateRequest) {
        int typeStage = modaliteDateRequest.getTypeStage();
        Optional<ModaliteDate> existingModaliteDateOptional = Optional.ofNullable(modaliteDateRepository.findByTypeStage(typeStage));

        if (existingModaliteDateOptional.isPresent()) {
            ModaliteDate existingModaliteDate = existingModaliteDateOptional.get();
            existingModaliteDate.setDateDebut(modaliteDateRequest.getDateDebut());
            existingModaliteDate.setDateFin(modaliteDateRequest.getDateFin());
            return ResponseEntity.ok(modaliteDateRepository.save(existingModaliteDate));
        } else {
            ModaliteDate newModaliteDate = new ModaliteDate();
            newModaliteDate.setTypeStage(typeStage);
            newModaliteDate.setDateDebut(modaliteDateRequest.getDateDebut());
            newModaliteDate.setDateFin(modaliteDateRequest.getDateFin());
            return ResponseEntity.ok(modaliteDateRepository.save(newModaliteDate));
        }
    }
}

@Data
class ModaliteDateRequest {
    private int typeStage;
    private Date dateDebut;
    private Date dateFin;
}