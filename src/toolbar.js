// toolbar.js

import { DraggableNode } from "./draggableNode";
import { totalNodes } from "./config";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {totalNodes.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
      </div>
    </div>
  );
};
