package com.internhub.interhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.internhub.interhub.model.Etudiant;
import java.util.*;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
  Etudiant findByNumEtu(Integer numEtu);
  boolean existsByNumEtu(Integer numEtu);
}
