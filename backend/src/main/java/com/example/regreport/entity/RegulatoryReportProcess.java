package com.example.regreport.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "regulatory_report_process")
public class RegulatoryReportProcess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String cronExpression;
    private String status;

    @OneToMany(mappedBy = "process", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProcessNode> nodes;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getCronExpression() { return cronExpression; }
    public void setCronExpression(String cronExpression) { this.cronExpression = cronExpression; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public List<ProcessNode> getNodes() { return nodes; }
    public void setNodes(List<ProcessNode> nodes) { this.nodes = nodes; }
}