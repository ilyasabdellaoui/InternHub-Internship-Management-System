package com.internhub.interhub.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Tuteur {
    @Id
    @Column(name = "num_tut")
    @Getter @Setter private String numTut;

    @Column(name = "qualite_tut")
    @Getter @Setter private String qualiteTut;

    @Column(name = "nom_tut", nullable = false)
    @Getter @Setter private String nomTut;

    @Column(name = "prenom_tut", nullable = false)
    @Getter @Setter private String prenomTut;

    @Column(name = "tel_tut")
    @Getter @Setter private String telTut;

    @ManyToOne
    @JoinColumn(name = "num_siret", nullable = false)
    @Getter @Setter private Entreprise entreprise;
}