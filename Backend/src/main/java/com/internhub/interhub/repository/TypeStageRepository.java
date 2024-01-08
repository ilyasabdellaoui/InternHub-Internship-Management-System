package com.internhub.interhub.repository;

import com.internhub.interhub.model.TypeStage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeStageRepository extends JpaRepository<TypeStage, Long> {
  TypeStage findByCodeType(long codeType);
  boolean existsByCodeType(long codeType);
}