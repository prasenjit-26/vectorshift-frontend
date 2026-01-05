// databaseNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const DatabaseNode = ({ id, data }) => {
  const [dbName, setDbName] = useState(data?.dbName || 'users');
  const [operation, setOperation] = useState(data?.operation || 'SELECT');

  return (
    <BaseNode
      id={id}
      label="Database"
      handles={[
        { type: 'target', position: Position.Left, id: 'query' },
        { type: 'source', position: Position.Right, id: 'result' }
      ]}
    >
      <label>
        Operation:
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="SELECT">SELECT</option>
            <option value="INSERT">INSERT</option>
            <option value="UPDATE">UPDATE</option>
        </select>
      </label>
      <label>
        Table:
        <input 
          type="text" 
          value={dbName} 
          onChange={(e) => setDbName(e.target.value)} 
        />
      </label>
    </BaseNode>
  );
}
