package com.example.regreport.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "regulatory_report_execution")
public class RegulatoryReportExecution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "process_id", nullable = false)
    private RegulatoryReportProcess process;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String status;
    private String executionLog;
    private String statistics;

    @OneToMany(mappedBy = "execution", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NodeExecutionRecord> nodeRecords;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public RegulatoryReportProcess getProcess() { return process; }
    public void setProcess(RegulatoryReportProcess process) { this.process = process; }
    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }
    public LocalDateTime getEndTime() { return endTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getExecutionLog() { return executionLog; }
    public void setExecutionLog(String executionLog) { this.executionLog = executionLog; }
    public String getStatistics() { return statistics; }
    public void setStatistics(String statistics) { this.statistics = statistics; }
    public List<NodeExecutionRecord> getNodeRecords() { return nodeRecords; }
    public void setNodeRecords(List<NodeExecutionRecord> nodeRecords) { this.nodeRecords = nodeRecords; }
}