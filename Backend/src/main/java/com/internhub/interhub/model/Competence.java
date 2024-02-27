package com.internhub.interhub.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

import lombok.*;

@Entity
@Data
@NoArgsConstructor
public class Competence {
    @Id
    @Column(name = "code_competence")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int codeCompetence;

    @Column(name = "libelle", nullable = false)
    private String libelle;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "competence", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Acquerir> acquerir = new HashSet<>();

    public Competence(String libelle, String description){
        this.libelle = libelle;
        this.description = description;
    }

    public void addAcquerir(Acquerir acquerir) {
        this.acquerir.add(acquerir);
        acquerir.setCompetence(this);
    }

    public void removeAcquerir(Acquerir acquerir) {
        this.acquerir.remove(acquerir);
        acquerir.setCompetence(null);
    }
}
