// BaseNode.js
import { Handle } from "reactflow";

export const BaseNode = ({ id, label, children, handles = [], style = {}, isConnectable = true }) => {
  return (
    <div
      style={{
        width: 200,
        height: 'auto',
        minHeight: 100,
        border: "1px solid var(--border-color)",
        borderRadius: "8px",
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxSizing: "border-box",
        ...style
      }}
    >
      {/* Node Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "16px",
          flexGrow: 1
        }}
      >
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
          style={{
            ...handle.style
          }}
        />
      ))}
    </div>
  );
};
