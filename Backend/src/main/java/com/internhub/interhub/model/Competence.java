package com.internhub.interhub.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Competence {
    @Id
    @Column(name = "code_competence")
    @Getter @Setter private String codeCompetence;

    @Column(name = "libelle", nullable = false)
    @Getter @Setter private String libelle;

    @Column(name = "description")
    @Getter @Setter private String description;
}
