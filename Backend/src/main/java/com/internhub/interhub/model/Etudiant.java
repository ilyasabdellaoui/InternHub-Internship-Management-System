package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Etudiant {

  // We should use this custom system -> ID = 2 last promo year + num_ds_promo
  @Id
  @Column(unique = true, insertable = false, updatable = false)
  private Integer id;

  @Column(nullable = false)
  private Integer annee_promo;

  @Column(nullable = false)
  private Integer num_ds_promo;

  // Custom method to set the ID before persisting the entity
  @PrePersist
  public void generateCustomId() {
    // ID = 2 last numbers in promo year + num_ds_promo
    String yearSuffix = annee_promo.toString().substring(Math.max(0, annee_promo.toString().length() - 2));
    id = Integer.parseInt(yearSuffix + num_ds_promo);
  }

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private Qualite qualite_etu;

  @Column(nullable = false)
  private String nom_etu;

  @Column(nullable = false)
  private String prenom_etu;

  @Column(nullable = false)
  private String adresse_etu;

  @Column(nullable = true)
  private String suite_etu;

  @Column(nullable = false, columnDefinition = "INT")
  private Integer code_postal_etu;  

  @Column(nullable = false)
  private String ville_etu;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private Sexe sexe;

  @Column(nullable = false)
  private Date date_naiss;

  @Column(nullable = false)
  private String tel_etu;

  @Enumerated(EnumType.STRING)
  @Column(nullable = true)
  private Mention mention;

  public enum Qualite {
    M,
    Mlle,
    Mme
  }

  public enum Sexe {
    M,
    F
  }

  public enum Mention {
    Insuffisant,
    Passable,
    AssezBien,
    Bien,
    TresBien,
    Excellent
  }

  // Getter Methods
  public Integer getId() {
    return id;
  }
  public Integer getAnnee_promo() {
    return annee_promo;
  }

  public Integer getNum_ds_promo() {
    return num_ds_promo;
  }

  public Qualite getQualite_etu() {
    return qualite_etu;
  }

  public String getNom_etu() {
    return nom_etu;
  }

  public String getPrenom_etu() {
    return prenom_etu;
  }

  public String getAdresse_etu() {
    return adresse_etu;
  }

  public String getSuite_etu() {
    return suite_etu;
  }

  public Integer getCode_postal_etu() {
    return code_postal_etu;
  }

  public String getVille_etu() {
    return ville_etu;
  }

  public Sexe getSexe() {
    return sexe;
  }

  public Date getDate_naiss() {
    return date_naiss;
  }

  public String getTel_etu() {
    return tel_etu;
  }

  public Mention getMention() {
    return mention;
  }

  // Setter Methods

  public void setId(Integer id) {
    this.id = id;
  }

  public void setAnnee_promo(Integer annee_promo) {
    this.annee_promo = annee_promo;
  }

  public void setNum_ds_promo(Integer num_ds_promo) {
    this.num_ds_promo = num_ds_promo;
  }

  public void setQualite_etu(Qualite qualite_etu) {
    this.qualite_etu = qualite_etu;
  }

  public void setNom_etu(String nom_etu) {
    this.nom_etu = nom_etu;
  }

  public void setPrenom_etu(String prenom_etu) {
    this.prenom_etu = prenom_etu;
  }

  public void setAdresse_etu(String adresse_etu) {
    this.adresse_etu = adresse_etu;
  }

  public void setSuite_etu(String suite_etu) {
    this.suite_etu = suite_etu;
  }

  public void setCode_postal_etu(Integer code_postal_etu) {
    this.code_postal_etu = code_postal_etu;
  }

  public void setVille_etu(String ville_etu) {
    this.ville_etu = ville_etu;
  }

  public void setSexe(Sexe sexe) {
    this.sexe = sexe;
  }

  public void setDate_naiss(Date date_naiss) {
    this.date_naiss = date_naiss;
  }

  public void setTel_etu(String tel_etu) {
    this.tel_etu = tel_etu;
  }

  public void setMention(Mention mention) {
    this.mention = mention;
  }
}
