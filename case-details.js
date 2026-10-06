// Canonical display names, topics, and conceptual visual guides.
const caseDetails = {
  "case-backpressure": {
    "title": "One Ceiling, a Whole Fleet: Global Backpressure for Kafka Consumers",
    "tags": [
      "Kafka",
      "Redis / Valkey",
      "Global concurrency",
      "Backpressure",
      "Resilience"
    ],
    "diagram": "assets/diagrams/backpressure.svg",
    "diagramTitle": "A shared concurrency budget",
    "diagramDescription": "Consumers request permits from a shared pool. Saturated requests wait or retry; admitted work reaches the API. Completion releases capacity."
  },
  "case-topology": {
    "title": "Lifting the Fog: Automated Kafka Topology Discovery",
    "tags": [
      "Kafka",
      "Graph modeling",
      "Dependency discovery",
      "Platform tooling",
      "Observability"
    ],
    "diagram": "assets/diagrams/topology.svg",
    "diagramTitle": "From evidence to dependency graph",
    "diagramDescription": "Observed broker metadata and inferred repository configuration are combined into a typed graph with evidence labels, then used to explore ownership and dependencies."
  },
  "case-sagas": {
    "title": "Sagas Without a Conductor: Choreographing Marketplace Workflows",
    "tags": [
      "Distributed systems",
      "Saga choreography",
      "Durable intent",
      "Idempotency",
      "Compensation"
    ],
    "diagram": "assets/diagrams/sagas.svg",
    "diagramTitle": "Local commits, explicit recovery",
    "diagramDescription": "An illustrative choreographed workflow records durable intent and uses events between local transactions. Failures are retried when safe or compensated where the action is reversible."
  },
  "case-tokenizer": {
    "title": "Multilingual BPE Tokenizer: Script Boundaries and Vocabulary Trade-offs",
    "tags": [
      "Tokenization",
      "Multilingual AI",
      "Vocabulary trade-offs",
      "Unicode",
      "Round-trip validation"
    ],
    "diagram": "assets/diagrams/tokenizer.svg",
    "diagramTitle": "A tokenizer has a round-trip contract",
    "diagramDescription": "Unicode-normalized text is segmented and encoded using a learned vocabulary. Decoding is checked against normalized text, with whitespace and metaspace limitations documented."
  },
  "case-attention": {
    "title": "The Evolution of Attention: Constraints, Architectures, and Trade-offs",
    "tags": [
      "Attention",
      "Memory & compute",
      "Architecture trade-offs",
      "KV cache",
      "Context length"
    ],
    "diagram": "assets/diagrams/attention.svg",
    "diagramTitle": "Choose by the bottleneck",
    "diagramDescription": "Attention techniques address different constraints: pairwise work, memory traffic, inference state, or position representation. They are not interchangeable optimizations."
  },
  "case-zero": {
    "title": "ZeRO Simulation: Replication, Sharding, and Communication",
    "tags": [
      "ZeRO",
      "State sharding",
      "Distributed systems",
      "Memory accounting",
      "Communication costs"
    ],
    "diagram": "assets/diagrams/zero.svg",
    "diagramTitle": "Shard more state, coordinate more work",
    "diagramDescription": "Data parallelism replicates model state. ZeRO-1 shards optimizer state; ZeRO-2 also shards gradients; ZeRO-3 also shards parameters. Temporary buffers still contribute to peak memory."
  },
  "case-training-recovery": {
    "title": "Training Data Execution: Checkpoints, Crash Recovery, and Verified Replay",
    "tags": [
      "Checkpointing",
      "Deterministic replay",
      "Data provenance",
      "Commit boundaries",
      "Auditability"
    ],
    "diagram": "assets/diagrams/training-recovery.svg",
    "diagramTitle": "Recover state and verify history",
    "diagramDescription": "Checkpoint model, optimizer, RNG, and loader state. After a crash restore the checkpoint, regenerate subsequent batches, compare ledger hashes, then continue."
  },
  "case-training-metrics": {
    "title": "Training-Loop Internals: Gradients, Aggregation, and Trustworthy Metrics",
    "tags": [
      "Observability",
      "Gradient accumulation",
      "Correctness",
      "Numerical validation",
      "Utilization"
    ],
    "diagram": "assets/diagrams/training-metrics.svg",
    "diagramTitle": "One token, one vote",
    "diagramDescription": "Unequal micro-batches require token-weighted aggregation. Compare correct and incorrect accumulation with the same seed and per-token metric to expose the error."
  },
  "case-foundations": {
    "title": "Deep Learning Foundations: Nonlinearity, Embeddings, and Generalization",
    "tags": [
      "Neural networks",
      "Embeddings",
      "Generalization",
      "Nonlinearity",
      "Controlled experiments"
    ],
    "diagram": "assets/diagrams/foundations.svg",
    "diagramTitle": "Four experiments, four questions",
    "diagramDescription": "Controlled experiments isolate nonlinearity, depth, embeddings, and generalization. Each compares model behavior against an explicit alternative or held-out evidence."
  }
};
