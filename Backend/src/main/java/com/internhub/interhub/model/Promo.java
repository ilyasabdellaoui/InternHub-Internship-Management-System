package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.time.Year;

@Entity
public class Promo {

    @Id
    @Column(unique = true, name = "annee_promo")
    private Year anneePromo;

    @Column(name = "nb_inscrits", nullable = false)
    private int nbInscrits;

    @Column(name = "nb_recus", nullable = false)
    private int nbRecus;

    @OneToOne
    @JoinColumn(name = "num_prof", nullable = false, unique = true)
    private Professeur professeur;

    public Promo() {
    }

    public Promo(Year anneePromo, int nbInscrits, int nbRecus, Professeur professeur) {
        this.anneePromo = anneePromo;
        this.nbInscrits = nbInscrits;
        this.nbRecus = nbRecus;
        this.professeur = professeur;
    }

    // Getters and setters

    public Year getAnneePromo() {
        return anneePromo;
    }

    public void setAnneePromo(Year anneePromo) {
        this.anneePromo = anneePromo;
    }

    public int getNbInscrits() {
        return nbInscrits;
    }

    public void setNbInscrits(int nbInscrits) {
        this.nbInscrits = nbInscrits;
    }

    public int getNbRecus() {
        return nbRecus;
    }

    public void setNbRecus(int nbRecus) {
        this.nbRecus = nbRecus;
    }

    public Professeur getProfesseur() {
        return professeur;
    }

    public void setProfesseur(Professeur professeur) {
        this.professeur = professeur;
    }
}