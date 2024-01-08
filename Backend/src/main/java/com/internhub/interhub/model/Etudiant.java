package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Etudiant {

  // We should use this custom system -> ID = 2 last promo year + num_ds_promo
  @Id
  @Column(name = "num_etu", unique = true, insertable = false, updatable = false)
  private int numEtu;

  @ManyToOne
  @JoinColumn(name = "annee_promo", nullable = false)
  private Promo promo;

  @Column(name = "num_ds_promo", nullable = false)
  private int numDsPromo;

  // Custom method to set the ID before persisting the entity
  @PrePersist
  public void generateCustomId() {
    // ID = 2 last numbers in promo year + num_ds_promo
    String yearSuffix = promo.getAnneePromo().toString().substring(Math.max(0, promo.getAnneePromo().toString().length() - 2));
    numEtu = Integer.parseInt(yearSuffix + numDsPromo);
  }

  @Column(name = "qualite_etu", nullable = false)
  private String qualiteEtu;

  @Column(name = "code_postal_etu")
  private int codePostalEtu;

  @Column(name = "date_naiss", nullable = false)
  private Date dateNaiss;

  @Column(name = "mention", nullable = false)
  private String mention;

  @Column(name = "nom_etu", nullable = false)
  private String nomEtu;

  @Column(name = "prenom_etu", nullable = false)
  private String prenomEtu;

  @Column(name = "addresse_etu", nullable = false)
  private String adresseEtu;

  @Column(name = "sexe_etu", nullable = false)
  private String sexeEtu;

  @Column(name = "suite_etu", nullable = false)
  private String suiteEtu;

  @Column(name = "tel_etu", nullable = false)
  private String telEtu;

  @Column(name = "ville_etu", nullable = false)
  private String villeEtu;

  public Etudiant() {
  }

  public Etudiant(int numEtu, Promo promo, int numDsPromo, String qualiteEtu, int codePostalEtu, Date dateNaiss, String mention, String nomEtu, String prenomEtu, String adresseEtu, String sexeEtu, String suiteEtu, String telEtu, String villeEtu) {
    this.numEtu = numEtu;
    this.promo = promo;
    this.numDsPromo = numDsPromo;
    this.qualiteEtu = qualiteEtu;
    this.codePostalEtu = codePostalEtu;
    this.dateNaiss = dateNaiss;
    this.mention = mention;
    this.nomEtu = nomEtu;
    this.prenomEtu = prenomEtu;
    this.adresseEtu = adresseEtu;
    this.sexeEtu = sexeEtu;
    this.suiteEtu = suiteEtu;
    this.telEtu = telEtu;
    this.villeEtu = villeEtu;
  }

  // Getter Methods
  public int getNumEtu() {
    return numEtu;
  }

  public Promo getPromo() {
    return promo;
  }

  public void setPromo(Promo promo) {
    this.promo = promo;
  }

  public int getNumDsPromo() {
    return numDsPromo;
  }

  public void setNumDsPromo(int numDsPromo) {
    this.numDsPromo = numDsPromo;
  }

  public String getQualiteEtu() {
    return qualiteEtu;
  }

  public void setQualiteEtu(String qualiteEtu) {
    this.qualiteEtu = qualiteEtu;
  }

  public int getCodePostalEtu() {
    return codePostalEtu;
  }

  public void setCodePostalEtu(int codePostalEtu) {
    this.codePostalEtu = codePostalEtu;
  }

  public Date getDateNaiss() {
    return dateNaiss;
  }

  public void setDateNaiss(Date dateNaiss) {
    this.dateNaiss = dateNaiss;
  }

  public String getMention() {
    return mention;
  }

  public void setMention(String mention) {
    this.mention = mention;
  }

  public String getNomEtu() {
    return nomEtu;
  }

  public void setNomEtu(String nomEtu) {
    this.nomEtu = nomEtu;
  }

  public String getPrenomEtu() {
    return prenomEtu;
  }

  public void setPrenomEtu(String prenomEtu) {
    this.prenomEtu = prenomEtu;
  }

  public String getAdresseEtu() {
    return adresseEtu;
  }

  public void setAdresseEtu(String adresseEtu) {
    this.adresseEtu = adresseEtu;
  }

  public String getSexeEtu() {
    return sexeEtu;
  }

  public void setSexeEtu(String sexeEtu) {
    this.sexeEtu = sexeEtu;
  }

  public String getSuiteEtu() {
    return suiteEtu;
  }

  public void setSuiteEtu(String suiteEtu) {
    this.suiteEtu = suiteEtu;
  }

  public String getTelEtu() {
    return telEtu;
  }

  public void setTelEtu(String telEtu) {
    this.telEtu = telEtu;
  }

  public String getVilleEtu() {
    return villeEtu;
  }

  public void setVilleEtu(String villeEtu) {
    this.villeEtu = villeEtu;
  }
}
