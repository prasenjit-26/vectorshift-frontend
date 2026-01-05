// BaseNode.js
import { Handle } from "reactflow";
import { useStore } from "../store";

export const BaseNode = ({
  id,
  label,
  children,
  handles = [],
  style = {},
  isConnectable = true,
  className = "",
}) => {
  const removeNode = useStore((state) => state.removeNode);

  return (
    <div
      className={`base-node ${className}`}
      style={style}
    >
      {/* Node Header */}
      <div className="base-node-header">
        <span>{label}</span>
        <button 
          className="node-delete-button" 
          onClick={() => removeNode(id)}
          aria-label="Delete node"
        >
          ×
        </button>
      </div>

      {/* Node Content */}
      <div className="base-node-content">
        {children}
      </div>

      {/* Render Handles - Rendered last to ensure z-index stacking on top */}
      {handles.map((handle, index) => (
        <Handle
          key={`${handle.type}-${handle.id}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          isConnectable={isConnectable}
          className={handle.className}
          style={handle.style}
        />
      ))}
    </div>
  );
};
