package com.internhub.interhub.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Entreprise {

    @Id
    @Column(name = "num_siret", unique = true, length = 14)
    @Getter @Setter private long numSiret;

    @Column(name = "forme_jurid", nullable = false)
    @Getter @Setter private String formeJurid;

    @Column(name = "raison_social", nullable = false)
    @Getter @Setter private String raisonSocial;

    @Column(name = "addresse_entr")
    @Getter @Setter private String adresseEntr;

    @Column(name = "suite_entr")
    @Getter @Setter private String suiteEntr;

    @Column(name = "code_postal_entr")
    @Getter @Setter private int codePostalEntr;

    @Column(name = "ville_entr")
    @Getter @Setter private String villeEntr;

    @Column(name = "tel_entr")
    @Getter @Setter private String telEntr;

    @Column(name = "fax")
    @Getter @Setter private String fax;

    @Column(name = "contact")
    @Getter @Setter private String contact;

    @Column(name = "tel_contact")
    @Getter @Setter private String telContact;
}