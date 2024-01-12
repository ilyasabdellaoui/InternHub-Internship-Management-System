package com.internhub.interhub.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Users")
public class User {
    @Id
    @Column(name = "user_email", unique = true, nullable = false)
    private String userEmail;

    @Column(name = "user_password", nullable = false)
    private String userPassword;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @ManyToOne
    @JoinColumn(name = "num_etu")
    private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "num_prof")
    private Professeur professeur;

    @ManyToOne
    @JoinColumn(name = "num_tut")
    private Tuteur tuteur;
}