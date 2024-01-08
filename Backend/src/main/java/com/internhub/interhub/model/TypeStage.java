package com.internhub.interhub.model;

import jakarta.persistence.*;

@Entity
public class TypeStage {
    @Id
    @Column(name = "code_type")
    private int codeType;

    @Column(name = "nb_sem", nullable = false)
    private int nbSem;

    public TypeStage() {
    }

    public TypeStage(int codeType, int nbSem) {
        this.codeType = codeType;
        this.nbSem = nbSem;
    }

    // Getters & Setters

    public int getCodeType() {
        return codeType;
    }

    public void setCodeType(int codeType) {
        this.codeType = codeType;
    }

    public int getNbSem() {
        return nbSem;
    }

    public void setNbSem(int nbSem) {
        this.nbSem = nbSem;
    }
}
