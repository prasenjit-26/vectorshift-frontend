// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='pipeline' label='Pipeline' />
                <DraggableNode type='conditional' label='Conditional' />
                <DraggableNode type='apiRequest' label='API' />
                <DraggableNode type='database' label='DB' />
                <DraggableNode type='transformation' label='Transform' />
            </div>
        </div>
    );
};
