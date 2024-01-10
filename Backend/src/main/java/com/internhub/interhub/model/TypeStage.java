package com.internhub.interhub.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class TypeStage {
    @Id
    @Column(name = "code_type")
    @Getter @Setter private int codeType;

    @Column(name = "nb_sem", nullable = false)
    @Getter @Setter private int nbSem;
}
