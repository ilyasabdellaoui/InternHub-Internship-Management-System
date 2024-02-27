package com.internhub.interhub.repository;

import com.internhub.interhub.model.Entreprise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntrepriseRepository extends JpaRepository<Entreprise, Long> {
  Entreprise findByNumSiret(long numSiret);
  boolean existsByNumSiret(long numSiret);
}