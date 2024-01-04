package com.internhub.interhub.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/")
public class index {

	@Autowired

	@GetMapping("home")
  public String printer() {
    return "We are in the home page";
  } 
	// public ResponseEntity<List<Etudiant>> getAllTutorials(@RequestParam(required = false) String title) {
		
	// }

	// @GetMapping("/tutorials/{id}")
	// public ResponseEntity<Etudiant> getEtudiantById(@PathVariable("id") long id) {
		
	// }

}