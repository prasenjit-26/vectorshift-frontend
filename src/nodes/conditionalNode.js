// conditionalNode.js

import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const ConditionalNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      label="Condition"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'true', style: { top: '35%' } },
        { type: 'source', position: Position.Right, id: 'false', style: { top: '65%' } }
      ]}
    >
      <span style={{ fontSize: '12px', marginBottom: '4px' }}>True path →</span>
      <span style={{ fontSize: '12px' }}>False path →</span>
    </BaseNode>
  );
}
