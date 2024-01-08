package com.internhub.interhub.model;

import jakarta.persistence.*;

@Entity
public class Entreprise {

    @Id
    @Column(name = "num_siret", unique = true, length = 14)
    private long numSiret;

    @Column(name = "forme_jurid", nullable = false)
    private String formeJurid;

    @Column(name = "raison_social", nullable = false)
    private String raisonSocial;

    @Column(name = "addresse_entr", nullable = false)
    private String adresseEntr;

    @Column(name = "suite_entr")
    private String suiteEntr;

    @Column(name = "code_postal_entr", nullable = false)
    private int codePostalEntr;

    @Column(name = "ville_entr", nullable = false)
    private String villeEntr;

    @Column(name = "tel_entr", nullable = false)
    private String telEntr;

    @Column(name = "fax", nullable = false)
    private String fax;

    @Column(name = "contact", nullable = false)
    private String contact;

    @Column(name = "tel_contact", nullable = false)
    private String telContact;

    // Default constructor is necessary to add for JPA am3lam hh
    public Entreprise() {
    }

    public Entreprise(long numSiret, String formeJurid, String raisonSocial, String adresseEntr, String suiteEntr, int codePostalEntr, String villeEntr, String telEntr, String fax, String contact, String telContact) {
        this.numSiret = numSiret;
        this.formeJurid = formeJurid;
        this.raisonSocial = raisonSocial;
        this.adresseEntr = adresseEntr;
        this.suiteEntr = suiteEntr;
        this.codePostalEntr = codePostalEntr;
        this.villeEntr = villeEntr;
        this.telEntr = telEntr;
        this.fax = fax;
        this.contact = contact;
        this.telContact = telContact;
    }

    // Getter & Setter methods
    public long getNumSiret() {
        return numSiret;
    }

    public void setNumSiret(long numSiret) {
        this.numSiret = numSiret;
    }

    public String getFormeJurid() {
        return formeJurid;
    }

    public void setFormeJurid(String formeJurid) {
        this.formeJurid = formeJurid;
    }

    public String getRaisonSocial() {
        return raisonSocial;
    }

    public void setRaisonSocial(String raisonSocial) {
        this.raisonSocial = raisonSocial;
    }

    public String getAdresseEntr() {
        return adresseEntr;
    }

    public void setAdresseEntr(String adresseEntr) {
        this.adresseEntr = adresseEntr;
    }

    public String getSuiteEntr() {
        return suiteEntr;
    }

    public void setSuiteEntr(String suiteEntr) {
        this.suiteEntr = suiteEntr;
    }

    public int getCodePostalEntr() {
        return codePostalEntr;
    }

    public void setCodePostalEntr(int codePostalEntr) {
        this.codePostalEntr = codePostalEntr;
    }

    public String getVilleEntr() {
        return villeEntr;
    }

    public void setVilleEntr(String villeEntr) {
        this.villeEntr = villeEntr;
    }

    public String getTelEntr() {
        return telEntr;
    }

    public void setTelEntr(String telEntr) {
        this.telEntr = telEntr;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getTelContact() {
        return telContact;
    }

    public void setTelContact(String telContact) {
        this.telContact = telContact;
    }
}