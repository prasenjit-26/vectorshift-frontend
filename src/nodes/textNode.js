// textNode.js

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data, ...props }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Extract variables and update handles
  useEffect(() => {
    // Regex to find {{ variableName }} patterns, allowing for whitespace
    const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(variableRegex)];
    const variables = Array.from(new Set(matches.map(m => m[1])));

    // Calculate handle positions
    const newHandles = [
      ...variables.map((variable, index) => ({
        type: 'target',
        position: Position.Left,
        id: variable,
        // Distribute handles evenly along the left side
        style: { top: `${((index + 1) * 100) / (variables.length + 1)}%` }
      })),
      { type: 'source', position: Position.Right, id: 'output' }
    ];

    setHandles(newHandles);
  }, [currText, id]);

  // Notify ReactFlow to update handle registry whenever handles change
  useLayoutEffect(() => {
    updateNodeInternals(id);
  }, [handles, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Text"
      handles={handles}
      style={{ minWidth: '200px', height: 'auto' }}
      {...props}
    >
      <label>
        Text:
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange} 
          style={{ 
            width: '100%', 
            minHeight: '30px',
            resize: 'none',
            overflow: 'hidden',
            boxSizing: 'border-box',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'inherit',
            outline: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            lineHeight: '1.5'
          }}
          placeholder="Type something... use {{variable}} for inputs"
        />
      </label>
    </BaseNode>
  );
}

