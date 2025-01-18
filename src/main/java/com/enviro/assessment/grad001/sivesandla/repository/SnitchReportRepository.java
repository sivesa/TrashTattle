package com.enviro.assessment.grad001.sivesandla.repository;

import com.enviro.assessment.grad001.sivesandla.model.SnitchReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnitchReportRepository extends JpaRepository<SnitchReport, Long> {
}
