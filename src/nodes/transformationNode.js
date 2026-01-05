// transformationNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const TransformationNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'filter');
  const [script, setScript] = useState(data?.script || '// return item;');

  return (
    <BaseNode
      id={id}
      label="Transformation"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
      style={{ border: '1px solid #6366f1', boxShadow: '0 0 10px rgba(99, 102, 241, 0.1)' }}
    >
      <label style={{ fontSize: '11px', color: '#a5b4fc', marginBottom: '2px' }}>Function</label>
      <select 
        value={transformType} 
        onChange={(e) => setTransformType(e.target.value)}
        style={{ marginBottom: '8px' }}
      >
        <option value="filter">Filter</option>
        <option value="map">Map</option>
        <option value="sort">Sort</option>
        <option value="reduce">Reduce</option>
      </select>

      <label style={{ fontSize: '11px', color: '#a5b4fc', marginBottom: '2px' }}>Script</label>
      <textarea
        value={script}
        onChange={(e) => setScript(e.target.value)}
        style={{
          fontSize: '10px',
          fontFamily: 'monospace',
          minHeight: '60px',
          backgroundColor: '#1e1e2e',
          color: '#a5b4fc',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #4338ca'
        }}
      />
    </BaseNode>
  );
}
