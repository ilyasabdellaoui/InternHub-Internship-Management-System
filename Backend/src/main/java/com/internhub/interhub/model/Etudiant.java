package com.internhub.interhub.model;

import com.internhub.interhub.repository.EtudiantRepository;
import jakarta.persistence.*;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Etudiant {
  // We should use this custom system -> ID = 2 last promo year + num_ds_promo
  @Id
  @Column(name = "num_etu", unique = true, insertable = false, updatable = false)
  @Getter private Integer numEtu;

  @ManyToOne
  @JoinColumn(name = "annee_promo", nullable = false)
  @Getter @Setter private Promo promo;

  private static int lastNumDsPromo = 0;

  @Column(name = "num_ds_promo", nullable = false)
  @Getter @Setter private Integer numDsPromo;

  // Said zdti 3lina lkhdma assa7bi xDD
  private int calculateUniqueNumDsPromo() {
    int calculatedNumDsPromo = lastNumDsPromo;
    while (numDsPromoService.isNumDsPromoExists(calculatedNumDsPromo)) {
      calculatedNumDsPromo++;
    }
    lastNumDsPromo = calculatedNumDsPromo;
    return calculatedNumDsPromo;
  }

  // Custom method to set the ID before persisting the entity
  @PrePersist
  public void generateCustomId() {
    // ID = 2 last numbers in promo year + num_ds_promo
    numDsPromo = calculateUniqueNumDsPromo();
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
  @Getter @Setter private Integer codePostalEtu;

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

// Said zdti 3lina lkhdma assa7bi xDD
@Service
class numDsPromoService {
  private static EtudiantRepository etudiantRepository = null;
  public numDsPromoService(EtudiantRepository etudiantRepository) {
    numDsPromoService.etudiantRepository = etudiantRepository;
  }

  public static boolean isNumDsPromoExists(int numDsPromoToCheck) {
    return etudiantRepository.isNumDsPromoExists(numDsPromoToCheck);
  }
}