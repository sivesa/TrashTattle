package com.enviro.assessment.grad001.sivesandla.controller;

import com.enviro.assessment.grad001.sivesandla.model.SnitchReport;
import com.enviro.assessment.grad001.sivesandla.service.SnitchReportService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;


@RestController
@RequestMapping("/api/reports")
public class SnitchReportController {
    private final SnitchReportService service;

    public SnitchReportController(SnitchReportService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<SnitchReport> createReport(@RequestBody SnitchReport report) {
        SnitchReport savedReport = service.saveReport(report);
        return ResponseEntity.ok(savedReport);
    }

    @GetMapping
    public ResponseEntity<List<SnitchReport>> getAllReports() {
        List<SnitchReport> reports = service.getAllReports();
        return ResponseEntity.ok(reports);
    }
}

