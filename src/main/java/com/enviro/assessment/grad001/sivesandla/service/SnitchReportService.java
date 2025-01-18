package com.enviro.assessment.grad001.sivesandla.service;

import com.enviro.assessment.grad001.sivesandla.model.SnitchReport;
import com.enviro.assessment.grad001.sivesandla.repository.SnitchReportRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SnitchReportService {

    private final SnitchReportRepository repository;

    public SnitchReportService(SnitchReportRepository repository) {
        this.repository = repository;
    }

    public SnitchReport saveReport(SnitchReport report) {
        return repository.save(report);
    }

    public List<SnitchReport> getAllReports() {
        return repository.findAll();
    }
}
