package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Etudiant {

  // We should use this custom system -> ID = 2 last promo year + num_ds_promo
  @Id
  @Column(name = "num_etu", unique = true, insertable = false, updatable = false)
  @Getter private int numEtu;

  @ManyToOne
  @JoinColumn(name = "annee_promo", nullable = false)
  @Getter @Setter private Promo promo;

  @Column(name = "num_ds_promo", nullable = false)
  @Getter @Setter private int numDsPromo;

  // Custom method to set the ID before persisting the entity
  @PrePersist
  public void generateCustomId() {
    // ID = 2 last numbers in promo year + num_ds_promo
    String yearSuffix = promo.getAnneePromo().toString().substring(Math.max(0, promo.getAnneePromo().toString().length() - 2));
    numEtu = Integer.parseInt(yearSuffix + numDsPromo);
  }

  @Column(name = "qualite_etu", nullable = false)
  @Getter @Setter private String qualiteEtu;

  @Column(name = "nom_etu", nullable = false)
  @Getter @Setter private String nomEtu;

  @Column(name = "prenom_etu", nullable = false)
  @Getter @Setter private String prenomEtu;

  @Column(name = "addresse_etu")
  @Getter @Setter private String adresseEtu;

  @Column(name = "suite_etu")
  @Getter @Setter private String suiteEtu;

  @Column(name = "code_postal_etu")
  @Getter @Setter private int codePostalEtu;

  @Column(name = "ville_etu")
  @Getter @Setter private String villeEtu;

  @Column(name = "sexe_etu")
  @Getter @Setter private String sexeEtu;

  @Column(name = "date_naiss")
  @Getter @Setter private Date dateNaiss;

  @Column(name = "tel_etu")
  @Getter @Setter private String telEtu;

  @Column(name = "mention")
  @Getter @Setter private String mention;
}