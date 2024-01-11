package com.internhub.interhub.repository;

import com.internhub.interhub.model.ModaliteDate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModaliteDateRepository extends JpaRepository<ModaliteDate, Long> {
    ModaliteDate findByTypeStage(int typeStage);

    boolean existsModaliteDateByTypeStage(int typeStage);
}