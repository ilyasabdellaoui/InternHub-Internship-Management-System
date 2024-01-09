package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.time.Year;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Promo {

    @Id
    @Column(unique = true, name = "annee_promo")
    @Getter @Setter private Year anneePromo;

    @Column(name = "nb_inscrits")
    @Getter @Setter private int nbInscrits;

    @Column(name = "nb_recus")
    @Getter @Setter private int nbRecus;

    @OneToOne
    @JoinColumn(name = "num_prof", nullable = false, unique = true)
    @Getter @Setter private Professeur professeur;
}