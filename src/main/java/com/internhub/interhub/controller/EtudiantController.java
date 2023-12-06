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
@RequestMapping("/api")
public class EtudiantController {

	@Autowired
	EtudiantRepository tutorialRepository;

	@GetMapping("/tutorials")
  public String printer() {
    return "Hello world";
  } 
	// public ResponseEntity<List<Etudiant>> getAllTutorials(@RequestParam(required = false) String title) {
		
	// }

	// @GetMapping("/tutorials/{id}")
	// public ResponseEntity<Etudiant> getEtudiantById(@PathVariable("id") long id) {
		
	// }

}