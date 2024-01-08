package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Professeur {
    @Id
    @Column(name = "num_prof")
    private String numProf;

    @Column(name = "genre_prof", nullable = false)
    private String genreProf;

    @Column(name = "nom_prof", nullable = false)
    private String nomProf;

    @Column(name = "prenom_prof", nullable = false)
    private String prenomProf;

    @Column(name = "addresse_prof", nullable = false)
    private String adresseProf;

    @Column(name = "code_postal_prof", nullable = false)
    private int codePostalProf;

    @Column(name = "tel_ecole_prof", nullable = false)
    private String telEcoleProf;

    @Column(name = "tel_domicile", nullable = false)
    private String telDomicile;

    @Column(name = "date_embauche", nullable = false)
    private Date dateEmbauche;

    @Column(name = "date_depart")
    private Date dateDepart;

    public Professeur() {
    }

    public Professeur(String numProf, String genreProf, String nomProf, String prenomProf, String adresseProf, int codePostalProf, String telEcoleProf, String telDomicile, Date dateEmbauche, Date dateDepart) {
        this.numProf = numProf;
        this.genreProf = genreProf;
        this.nomProf = nomProf;
        this.prenomProf = prenomProf;
        this.adresseProf = adresseProf;
        this.codePostalProf = codePostalProf;
        this.telEcoleProf = telEcoleProf;
        this.telDomicile = telDomicile;
        this.dateEmbauche = dateEmbauche;
        this.dateDepart = dateDepart;
    }

    // Getters and setters
    public String getNumProf() {
        return numProf;
    }

    public void setNumProf(String numProf) {
        this.numProf = numProf;
    }

    public String getGenreProf() {
        return genreProf;
    }

    public void setGenreProf(String genreProf) {
        this.genreProf = genreProf;
    }

    public String getNomProf() {
        return nomProf;
    }

    public void setNomProf(String nomProf) {
        this.nomProf = nomProf;
    }

    public String getPrenomProf() {
        return prenomProf;
    }

    public void setPrenomProf(String prenomProf) {
        this.prenomProf = prenomProf;
    }

    public String getAdresseProf() {
        return adresseProf;
    }

    public void setAdresseProf(String adresseProf) {
        this.adresseProf = adresseProf;
    }

    public int getCodePostalProf() {
        return codePostalProf;
    }

    public void setCodePostalProf(int codePostalProf) {
        this.codePostalProf = codePostalProf;
    }

    public String getTelEcoleProf() {
        return telEcoleProf;
    }

    public void setTelEcoleProf(String telEcoleProf) {
        this.telEcoleProf = telEcoleProf;
    }

    public String getTelDomicile() {
        return telDomicile;
    }

    public void setTelDomicile(String telDomicile) {
        this.telDomicile = telDomicile;
    }

    public Date getDateEmbauche() {
        return dateEmbauche;
    }

    public void setDateEmbauche(Date dateEmbauche) {
        this.dateEmbauche = dateEmbauche;
    }

    public Date getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(Date dateDepart) {
        this.dateDepart = dateDepart;
    }
}