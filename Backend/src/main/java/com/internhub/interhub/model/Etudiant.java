package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Etudiant {

  // We should use this custom system -> ID = 2 last promo year + num_ds_promo
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

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
}
