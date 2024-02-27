package com.internhub.interhub.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

import lombok.*;

@Entity
@Data
@NoArgsConstructor
public class TypeStage {
    @Id
    @Column(name = "code_type")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long codeType;

    @Column(name = "nb_sem")
    private Integer nbSem;

    @OneToMany(mappedBy = "typeStage", fetch = FetchType.EAGER)
    private Set<Acquerir> acquerir = new HashSet<>();

    public TypeStage(Integer nbSem) {
        this.nbSem = nbSem;
    }

    public void addAcquerir(Acquerir acquerir) {
        this.acquerir.add(acquerir);
        acquerir.setTypeStage(this);
    }

    public void removeAcquerir(Acquerir acquerir) {
        this.acquerir.remove(acquerir);
        acquerir.setTypeStage(null);
    }
}