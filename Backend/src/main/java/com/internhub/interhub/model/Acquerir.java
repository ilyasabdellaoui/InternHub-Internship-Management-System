package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.io.Serializable;

import lombok.*;

class AcquerirId implements Serializable {
    private Competence competence;
    private TypeStage typeStage;
}

@Entity
@IdClass(AcquerirId.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Acquerir implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name = "code_competence")
    private Competence competence;

    @Id
    @ManyToOne
    @JoinColumn(name = "code_type")
    private TypeStage typeStage;

    @Column(name = "nv_exige", nullable = false)
    private Integer nvExige;
}
