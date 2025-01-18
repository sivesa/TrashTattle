package com.enviro.assessment.grad001.sivesandla.model;

import javax.persistence.*;
import java.util.Objects;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
public class SnitchReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;
    private String location;
    private String photoUrl;
    private String offenderDetails; // E.g., vehicle license plate
    private LocalDateTime timestamp;

    @Column(columnDefinition = "boolean default false")
    private boolean anonymous;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public String getOffenderDetails() {
        return offenderDetails;
    }

    public void setOffenderDetails(String offenderDetails) {
        this.offenderDetails = offenderDetails;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    // Override equals() and hashCode() based on membershipNumber
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SnitchReport)) return false;
        SnitchReport snitchReport = (SnitchReport) o;
        return Objects.equals(description, snitchReport.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(description);
    }
}

