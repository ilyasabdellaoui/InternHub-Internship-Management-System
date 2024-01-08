package com.internhub.interhub.repository;

import com.internhub.interhub.model.Promo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Year;

public interface PromoRepository extends JpaRepository<Promo, Long> {
  Promo findByAnneePromo(Year anneePromo);
  boolean existsByAnneePromo(Year anneePromo);
}
