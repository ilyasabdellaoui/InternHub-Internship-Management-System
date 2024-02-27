package com.internhub.interhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.internhub.interhub.model.Etudiant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.*;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
  Etudiant findByNumEtu(Integer numEtu);
  boolean existsByNumEtu(Integer numEtu);

  // Custom query to check if numDsPromo already exists in the database
  // Said zdti 3lina lkhdma assa7bi xDD
  @Query("SELECT COUNT(e) > 0 FROM Etudiant e WHERE e.numDsPromo = :numDsPromo")
  boolean isNumDsPromoExists(@Param("numDsPromo") int numDsPromo);
}
