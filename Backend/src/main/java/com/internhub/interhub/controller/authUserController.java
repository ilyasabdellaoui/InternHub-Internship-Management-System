package com.internhub.interhub.controller;

import com.internhub.interhub.model.User;
import com.internhub.interhub.repository.UserRepository;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class authUserController {
    private final UserRepository userRepository;

    public authUserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authUser(@RequestBody UserCredentials userCredentials) {
        try {
            String email = userCredentials.getUserEmail();
            String pass = userCredentials.getUserPassword();

            User user = userRepository.findByUserEmail(email);
            if (user != null) {
                if (!pass.equals(user.getUserPassword())){
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with given Credentials not found");
                }
                String role = user.getRole().getRoleName();
                String idName = "";
                String id = "";
                switch (role){
                    case "professeur":
                        idName = "numProf";
                        id = user.getProfesseur().getNumProf();
                        break;
                    case "etudiant":
                        idName = "numEtu";
                        id = String.valueOf(user.getEtudiant().getNumEtu());
                        break;
                    case "admin":
                        idName = "admin";
                        id = "Admin@123";
                }

                StringBuilder userLogged = new StringBuilder();
                userLogged.append("{\n\t\"roleName: \"").append(role).append("\",\n\t\"").append(idName).append("\": \"").append(id).append("\"\n}");
                return ResponseEntity.ok().body(userLogged);
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with given Credentials not found");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Competence");
        }
    }
}

@Data
class UserCredentials {
        private String userEmail;
        private String userPassword;
}