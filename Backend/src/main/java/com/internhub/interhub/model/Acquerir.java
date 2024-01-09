package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

class AcquerirId implements Serializable {
    private Competence competence;
    private TypeStage typeStage;
}

@Entity
@IdClass(AcquerirId.class)
@NoArgsConstructor
@AllArgsConstructor
public class Acquerir implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name = "code_competence", nullable = false)
    @Getter @Setter private Competence competence;

    @Id
    @ManyToOne
    @JoinColumn(name = "code_type", nullable = false)
    @Getter @Setter private TypeStage typeStage;

    @Column(name = "nv_exige", nullable = false)
    @Getter @Setter private int nvExige;
}
