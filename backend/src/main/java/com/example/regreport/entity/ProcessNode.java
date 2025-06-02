package com.example.regreport.entity;

import jakarta.persistence.*;
import java.time.Duration;

@Entity
@Table(name = "process_node")
public class ProcessNode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    @Enumerated(EnumType.STRING)
    private NodeType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "process_id")
    private RegulatoryReportProcess process;

    private Duration timeout;
    private String defaultAction;

    // 节点类型枚举
    public enum NodeType {
        AUTO_EXECUTE, USER_INPUT, WAIT_EXTERNAL
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public NodeType getType() { return type; }
    public void setType(NodeType type) { this.type = type; }
    public RegulatoryReportProcess getProcess() { return process; }
    public void setProcess(RegulatoryReportProcess process) { this.process = process; }
    public Duration getTimeout() { return timeout; }
    public void setTimeout(Duration timeout) { this.timeout = timeout; }
    public String getDefaultAction() { return defaultAction; }
    public void setDefaultAction(String defaultAction) { this.defaultAction = defaultAction; }
}