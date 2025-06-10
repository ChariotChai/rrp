import React, { useEffect, useRef } from 'react';
import BpmnJS from 'bpmn-js/lib/Modeler';
import {
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    CamundaPlatformPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
// import zeebeModdle from 'zeebe-bpmn-moddle/resources/zeebe';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import '@bpmn-io/properties-panel/dist/assets/properties-panel.css';

const BpmnModelerWithPanel = ({ xml }: { xml: string }) => {
    const modelerRef = useRef<BpmnJS>(null);
    const canvasRef = useRef(null);
    const panelRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current || !panelRef.current) return;

        // 销毁旧的
        if (modelerRef.current) {
            modelerRef?.current?.destroy();
        }

        // 初始化
        const modeler = new BpmnJS({
            container: canvasRef.current,
            propertiesPanel: {
                parent: panelRef.current
            },
            additionalModules: [
                BpmnPropertiesPanelModule,
                BpmnPropertiesProviderModule,
                // CamundaPlatformPropertiesProviderModule,
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor
            }
        });

        modelerRef.current = modeler;

        // 导入 XML
        modeler.importXML(xml)
            .then(() => {
                const canvas: any = modeler.get('canvas');
                canvas.zoom('fit-viewport');
            })
            .catch(err => {
                console.error('导入失败：', err);
            });

        return () => {
            modeler.destroy();
            modelerRef.current = null;
        };
    }, [xml]);

    return (
        <div style={{ display: 'flex', height: '600px' }}>
            <div ref={canvasRef} style={{ flex: 1, border: '1px solid #ccc' }} />
            <div ref={panelRef} style={{ width: '300px', borderLeft: '1px solid #ccc' }} />
        </div>
    );
};

export default BpmnModelerWithPanel;
