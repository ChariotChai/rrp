package com.example.regreport.service;

import com.example.regreport.entity.RegulatoryReportProcess;
import com.example.regreport.repository.RegulatoryReportProcessRepository;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Future;

@Service
@Transactional
public class RegulatoryReportProcessService {
    private final RegulatoryReportProcessRepository processRepository;
    private final TaskScheduler taskScheduler;
    private final Map<Long, Future<?>> scheduledTasks = new ConcurrentHashMap<>();

    public RegulatoryReportProcessService(RegulatoryReportProcessRepository processRepository,
                                          TaskScheduler taskScheduler) {
        this.processRepository = processRepository;
        this.taskScheduler = taskScheduler;
    }

    public RegulatoryReportProcess createProcess(RegulatoryReportProcess process) {
        RegulatoryReportProcess savedProcess = processRepository.save(process);
        if (process.getCronExpression() != null) {
            scheduleProcessExecution(savedProcess);
        }
        return savedProcess;
    }

    public void triggerProcessManually(Long processId) {
        RegulatoryReportProcess process = processRepository.findById(processId)
                .orElseThrow(() -> new IllegalArgumentException("流程不存在"));
        executeProcess(process);
    }

    private void scheduleProcessExecution(RegulatoryReportProcess process) {
        Runnable task = () -> executeProcess(process);
        CronTrigger trigger = new CronTrigger(process.getCronExpression());
        Future<?> scheduledTask = taskScheduler.schedule(task, trigger);
        scheduledTasks.put(process.getId(), scheduledTask);
    }

    private void executeProcess(RegulatoryReportProcess process) {
        // 这里实现具体的流程执行逻辑：
        // 1. 创建执行记录
        // 2. 按顺序执行节点（自动节点直接执行，用户输入节点等待，外部输入节点监听）
        // 3. 处理节点超时逻辑
        // 4. 记录执行结果和日志
        System.out.println("触发流程执行：" + process.getName());
    }
}