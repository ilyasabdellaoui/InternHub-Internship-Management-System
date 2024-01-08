package com.internhub.interhub.model;

import jakarta.persistence.*;

@Entity
public class Competence {
    @Id
    @Column(name = "code_competence")
    private String codeCompetence;

    @Column(name = "libelle", nullable = false)
    private String libelle;

    @Column(name = "description", nullable = false)
    private String description;

    public Competence() {
    }

    public Competence(String codeCompetence, String libelle, String description) {
        this.codeCompetence = codeCompetence;
        this.libelle = libelle;
        this.description = description;
    }

    // Getters & Setters

    public String getCodeCompetence() {
        return codeCompetence;
    }

    public void setCodeCompetence(String codeCompetence) {
        this.codeCompetence = codeCompetence;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
