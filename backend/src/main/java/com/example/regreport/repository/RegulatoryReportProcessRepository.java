package com.example.regreport.repository;

import com.example.regreport.entity.RegulatoryReportProcess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegulatoryReportProcessRepository extends JpaRepository<RegulatoryReportProcess, Long> {
}