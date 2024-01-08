package com.internhub.interhub.model;

import jakarta.persistence.*;

@Entity
public class Tuteur {
    @Id
    @Column(name = "num_tut")
    private String numTut;

    @Column(name = "qualite_tut", nullable = false)
    private String qualiteTut;

    @Column(name = "nom_tut", nullable = false)
    private String nomTut;

    @Column(name = "prenom_tut", nullable = false)
    private String prenomTut;

    @Column(name = "tel_tut", nullable = false)
    private String telTut;

    @ManyToOne
    @JoinColumn(name = "num_siret", nullable = false)
    private Entreprise entreprise;

    public Tuteur() {
    }

    public Tuteur(String numTut, String qualiteTut, String nomTut, String prenomTut, String telTut, Entreprise entreprise) {
        this.numTut = numTut;
        this.qualiteTut = qualiteTut;
        this.nomTut = nomTut;
        this.prenomTut = prenomTut;
        this.telTut = telTut;
        this.entreprise = entreprise;
    }

    public String getNumTut() {
        return numTut;
    }

    public void setNumTut(String numTut) {
        this.numTut = numTut;
    }

    public String getQualiteTut() {
        return qualiteTut;
    }

    public void setQualiteTut(String qualiteTut) {
        this.qualiteTut = qualiteTut;
    }

    public String getNomTut() {
        return nomTut;
    }

    public void setNomTut(String nomTut) {
        this.nomTut = nomTut;
    }

    public String getPrenomTut() {
        return prenomTut;
    }

    public void setPrenomTut(String prenomTut) {
        this.prenomTut = prenomTut;
    }

    public String getTelTut() {
        return telTut;
    }

    public void setTelTut(String telTut) {
        this.telTut = telTut;
    }

    public Entreprise getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(Entreprise entreprise) {
        this.entreprise = entreprise;
    }
}