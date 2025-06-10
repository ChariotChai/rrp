declare module 'react-bpmn' {
    import { ComponentType } from 'react';

    interface ReactBpmnProps {
        url?: string;
        diagramXML?: string;
        onShown?: () => void;
        onLoading?: () => void;
        onError?: (err: Error) => void;
    }

    const ReactBpmn: ComponentType<ReactBpmnProps>;
    export default ReactBpmn;
}
declare module 'bpmn-js-properties-panel';
declare module 'bpmn-js-properties-panel/lib/provider/camunda';
// declare module 'camunda-bpmn-moddle/resources/camunda.json' {
//     const value: any;
//     export default value;
//   }
  