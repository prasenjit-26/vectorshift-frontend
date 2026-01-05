// pipelineNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const PipelineNode = ({ id, data }) => {
  const [pipelineName, setPipelineName] = useState(data?.pipelineName || 'Process');

  return (
    <BaseNode
      id={id}
      label="Pipeline"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
    >
      <label>
        Step:
        <input 
          type="text" 
          value={pipelineName} 
          onChange={(e) => setPipelineName(e.target.value)} 
        />
      </label>
    </BaseNode>
  );
}
