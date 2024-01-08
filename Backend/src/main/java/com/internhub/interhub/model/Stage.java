package com.internhub.interhub.model;

import  jakarta.persistence.*;

import javax.xml.crypto.Data;
import java.time.Year;
import java.util.Date;

@Entity
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_stage")
    private int numStage;

    @Column(name = "compte_rendu", nullable = false)
    private String compteRendu;

    @Column(name = "status", nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "num_prof", nullable = false)
    private Professeur professeur;

    @ManyToOne
    @JoinColumn(name = "num_etu", nullable = false)
    private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "num_tut", nullable = false)
    private Tuteur tuteur;

    @ManyToOne
    @JoinColumn(name = "code_type", nullable = false)
    private TypeStage typeStage;

    @Column(name = "annee", nullable = false)
    private Year annee;

    @Column(name = "date_debut", nullable = false)
    private Date dateDebut;

    @Column(name = "date_fin", nullable = true)
    private Date dateFin;

    public Stage() {
    }
    public Stage(String compteRendu, String status, Professeur professeur, Etudiant etudiant, Tuteur tuteur, TypeStage typeStage, Year annee, Date dateDebut, Date dateFin) {
        this.compteRendu = compteRendu;
        this.status = status;
        this.professeur = professeur;
        this.etudiant = etudiant;
        this.tuteur = tuteur;
        this.typeStage = typeStage;
        this.annee = annee;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

    // Getters & Setters
    public int getNumStage() {
        return numStage;
    }

    public void setNumStage(int numStage) {
        this.numStage = numStage;
    }

    public String getCompteRendu() {
        return compteRendu;
    }

    public void setCompteRendu(String compteRendu) {
        this.compteRendu = compteRendu;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Professeur getProfesseur() {
        return professeur;
    }

    public void setProfesseur(Professeur professeur) {
        this.professeur = professeur;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public Tuteur getTuteur() {
        return tuteur;
    }

    public void setTuteur(Tuteur tuteur) {
        this.tuteur = tuteur;
    }

    public TypeStage getTypeStage() {
        return typeStage;
    }

    public void setTypeStage(TypeStage typeStage) {
        this.typeStage = typeStage;
    }

    public Year getAnnee() {
        return annee;
    }

    public void setAnnee(Year annee) {
        this.annee = annee;
    }

    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }
}
