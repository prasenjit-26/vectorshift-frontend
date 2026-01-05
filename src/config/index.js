import { InputNode } from "../nodes/inputNode";
import { LLMNode } from "../nodes/llmNode";
import { OutputNode } from "../nodes/outputNode";
import { TextNode } from "../nodes/textNode";
import { PipelineNode } from "../nodes/pipelineNode";
import { ConditionalNode } from "../nodes/conditionalNode";
import { APIRequestNode } from "../nodes/apiRequestNode";
import { DatabaseNode } from "../nodes/databaseNode";
import { TransformationNode } from "../nodes/transformationNode";

export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  pipeline: PipelineNode,
  conditional: ConditionalNode,
  apiRequest: APIRequestNode,
  database: DatabaseNode,
  transformation: TransformationNode,
};

export const totalNodes = [
  {
    type: "customInput",
    label: "Input",
  },
  {
    type: "llm",
    label: "LLM",
  },
  {
    type: "customOutput",
    label: "Output",
  },
  {
    type: "text",
    label: "Text",
  },
  {
    type: "pipeline",
    label: "Pipeline",
  },
  {
    type: "conditional",
    label: "Conditional",
  },
  {
    type: "apiRequest",
    label: "API",
  },
  {
    type: "database",
    label: "DB",
  },
  {
    type: "transformation",
    label: "Transform",
  },
];
