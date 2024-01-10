package com.internhub.interhub.model;

import  jakarta.persistence.*;

import javax.xml.crypto.Data;
import java.time.Year;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_stage", unique = true)
    @Getter @Setter private int numStage;

    @ManyToOne
    @JoinColumn(name = "num_etu", nullable = false)
    @Getter @Setter private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "num_prof", nullable = false)
    @Getter @Setter private Professeur professeur;

    @ManyToOne
    @JoinColumn(name = "num_tut", nullable = false)
    @Getter @Setter private Tuteur tuteur;

    @ManyToOne
    @JoinColumn(name = "code_type", nullable = false)
    @Getter @Setter private TypeStage typeStage;

    @Column(name = "date_debut", nullable = false)
    @Getter @Setter private Date dateDebut;

    @Column(name = "date_fin")
    @Getter @Setter private Date dateFin;

    @Column(name = "annee", nullable = false)
    @Getter @Setter private Year annee;

    @Column(name = "compte_rendu")
    @Getter @Setter private String compteRendu;

    @Column(name = "status")
    @Getter @Setter private String status;
}