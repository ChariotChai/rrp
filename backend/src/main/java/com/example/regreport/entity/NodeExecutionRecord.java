package com.example.regreport.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "node_execution_record")
public class NodeExecutionRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "execution_id", nullable = false)
    private RegulatoryReportExecution execution;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "node_id", nullable = false)
    private ProcessNode node;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String status;
    private String executionLog;
    private String result;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public RegulatoryReportExecution getExecution() { return execution; }
    public void setExecution(RegulatoryReportExecution execution) { this.execution = execution; }
    public ProcessNode getNode() { return node; }
    public void setNode(ProcessNode node) { this.node = node; }
    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }
    public LocalDateTime getEndTime() { return endTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getExecutionLog() { return executionLog; }
    public void setExecutionLog(String executionLog) { this.executionLog = executionLog; }
    public String getResult() { return result; }
    public void setResult(String result) { this.result = result; }
}