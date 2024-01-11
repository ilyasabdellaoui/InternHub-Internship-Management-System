package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Professeur {
    @Id
    @Column(name = "num_prof")
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Getter @Setter private String numProf;

    @Column(name = "genre_prof", nullable = false)
    @Getter @Setter private String genreProf;

    @Column(name = "nom_prof", nullable = false)
    @Getter @Setter private String nomProf;

    @Column(name = "prenom_prof", nullable = false)
    @Getter @Setter private String prenomProf;

    @Column(name = "addresse_prof")
    @Getter @Setter private String adresseProf;

    @Column(name = "code_postal_prof")
    @Getter @Setter private Integer codePostalProf;

    @Column(name = "tel_ecole_prof")
    @Getter @Setter private String telEcoleProf;

    @Column(name = "tel_domicile")
    @Getter @Setter private String telDomicile;

    @Column(name = "date_embauche")
    @Getter @Setter private Date dateEmbauche;

    @Column(name = "date_depart")
    @Getter @Setter private Date dateDepart;
}