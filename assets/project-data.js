window.PROJECTS = [
  {
    slug: "qwen-deepscaler-distillation",
    title: "Qwen / DeepScaleR Math Distillation",
    tag: "LLM post-training",
    image: "figures/team-llm-compression.svg",
    imageAlt: "Schematic preview of an LLM data, distillation, and evaluation pipeline",
    imageSource: "Local schematic used for the BRAIn Lab LLM compression and evaluation track",
    imageSourceUrl: "figures/team-llm-compression.svg",
    links: [
      {
        label: "Teacher40k dataset",
        url: "https://huggingface.co/datasets/ThunderstormXXL/deepscaler-teacher-sft-vllm-official-40k"
      },
      {
        label: "Clean v4 dataset",
        url: "https://huggingface.co/datasets/ThunderstormXXL/deepscaler-teacher-sft-vllm-official-40k-clean-v4-conceptual"
      }
    ],
    summary:
      "End-to-end math LLM distillation case: 40.3k teacher CoT traces, SFT/Forward-KL training, five math benchmarks, and macro Pass@1 46.97 -> 54.45 against a 55.90 local RL teacher.",
    details:
      "This is the strongest applied post-training case on the site. The goal was to transfer a large part of the DeepScaleR RL improvement back into the Qwen-based student through teacher-generated chain-of-thought data and distillation. The workflow covered teacher generation, reward/grader parsing, cleaning, SFT and Forward-KL training, and comparable evaluation against base and teacher checkpoints.",
    highlights: [
      "Student/base: DeepSeek-R1-Distill-Qwen-1.5B; teacher: DeepScaleR-1.5B-Preview.",
      "40,300 teacher traces: 39,494 train and 806 validation; clean v4 kept 35,632 examples.",
      "Macro Pass@1 improved from 46.97 to 54.45 on AIME 2024, MATH500, AMC 2023, Minerva Math, and OlympiadBench; local RL teacher was 55.90."
    ],
    featured: true
  },
  {
    slug: "heterocrossplay-nlhf",
    title: "HeteroCrossPlay / NLHF",
    tag: "Multi-agent RL",
    repo: "https://github.com/vskates/HeteroCrossPlay",
    image: "figures/team-nlhf.png",
    imageAlt: "Tournament dashboard with win matrix, AlphaRank, and Elo-style rankings",
    imageSource: "Local NLHF / tournament-style evaluation preview",
    imageSourceUrl: "figures/team-nlhf.png",
    summary:
      "Research prototype for preference learning where chosen/rejected pairs come from cross-play between models rather than only a static preference dataset.",
    details:
      "The idea is to study preference-based LLM training in a non-stationary environment: two heterogeneous policies answer the same prompt, a verifier or judge scores both responses, the winner/loser pair becomes preference data, and each policy is updated against its own frozen reference. I position this as a research prototype, not as a completed SOTA result.",
    highlights: [
      "Modified VERL recipe for heterogeneous multi-agent training with separate policies, tokenizers, and frozen anchors.",
      "Verifier-based reward framing for GSM8K-style exact/parseable/dense answer scoring.",
      "Compared conceptually against self-play, static DPO, PPO, and GRPO-style online preference optimization."
    ],
    featured: true
  },
  {
    slug: "sgdiffusion",
    title: "SGDiffusion",
    tag: "SGD dynamics",
    repo: "https://github.com/ThunderstormXX/SGDiffusion",
    image: "figures/sgdiffusion-pca-trajectory-cloud.png",
    imageAlt: "PCA trajectory cloud from SGDiffusion local minima experiments",
    imageSource: "SGDiffusion/src/scripts/exp8/figures/from_pretrained_point/pca_trajectory_cloud.png",
    imageSourceUrl: "https://github.com/ThunderstormXX/SGDiffusion/blob/codex/exp9-local-minima/src/scripts/exp8/figures/from_pretrained_point/pca_trajectory_cloud.png",
    summary:
      "Experiment code for finite-step SGD dynamics: controlled trajectories, Langevin-style comparisons, Hessian-basis diagnostics, and figure generation.",
    details:
      "This repository is the working codebase behind the SGD dynamics paper: configs, runners, saved artifacts, and scripts for checking where Brownian-style approximations stop matching finite-step SGD.",
    highlights: [
      "Finite-step SGD dynamics compared with Langevin-style surrogates.",
      "Hessian-basis and covariance diagnostics for real and toy models.",
      "Paper-ready experiment catalog with smoke and full configurations."
    ],
    featured: true
  },
  {
    slug: "ridiculous-llm-compression",
    title: "Ridiculous-LLM-Compression",
    tag: "LLM compression",
    repo: "https://github.com/ThunderstormXX/Ridiculous-LLM-Compression",
    image: "figures/llm-compression.png",
    imageAlt: "Perplexity impact of attention head merging by layer",
    imageSource: "Ridiculous-LLM-Compression/pollyleo_exps/exp1_changed/figures/perplexity_vs_layer.png",
    imageSourceUrl: "https://github.com/ThunderstormXX/Ridiculous-LLM-Compression/blob/main/pollyleo_exps/exp1_changed/figures/perplexity_vs_layer.png",
    links: [
      {
        label: "OpenReview",
        url: "https://openreview.net/forum?id=KfuiwhQcJH&referrer=%5Bthe%20profile%20of%20Igor%20Ignashin%5D(%2Fprofile%3Fid%3D~Igor_Ignashin1)"
      }
    ],
    summary:
      "Working code for LLM compression experiments: layer pruning, LoRA-based healing, decoder search, attention-head merging, and layer-wise evaluation.",
    details:
      "This repository is an experiment workbench for testing structural changes to decoder models and checking recovery behavior after compression. It packages layer removal, healing fine-tuning, least-important-layer search, and attention-head merging into scripts and modules for repeatable ablations.",
    highlights: [
      "Layer pruning and LoRA-based healing workflows with baseline comparisons.",
      "Attention-head merging analysis with layer-wise perplexity plots from repository artifacts.",
      "Reusable scripts for iterative and window-based pruning experiments."
    ],
    featured: true
  },
  {
    slug: "vllm-adadecode-research",
    title: "vLLM AdaDecode Research",
    tag: "LLM systems",
    image: "figures/team-early-exit.svg",
    imageAlt: "Schematic preview of early-exit and adaptive-decoding evaluation",
    imageSource: "Local schematic used for early-exit and adaptive-decoding evaluation work",
    imageSourceUrl: "figures/team-early-exit.svg",
    summary:
      "Secondary systems project: studied why a research AdaDecode speedup does not transfer naively into vLLM with continuous batching and KV-cache constraints.",
    details:
      "This project is no longer presented as my main profile, but it is useful evidence of careful systems evaluation. A controlled upstream run showed a 1.54x speedup, while naive vLLM integration broke parity or became slower. The main result was a negative systems finding: real insertion belongs in the Scheduler / KVCacheManager path, not inside model.forward.",
    highlights: [
      "Upstream Transformers AdaDecode run: 17.81 -> 27.45 tok/s with deterministic sanity 10/10.",
      "Naive vLLM integration was rejected because it broke parity or reduced throughput.",
      "Localized the correct integration point to Scheduler.schedule -> KVCacheManager.allocate_slots."
    ]
  },
  {
    slug: "adversarial-attacks",
    title: "Adversarial-Attacks",
    tag: "Robust ML",
    repo: "https://github.com/ThunderstormXX/Adversarial-Attacks",
    image: "figures/adversarial-attacks.png",
    imageAlt: "Accuracy comparison between ALSO and AdamW on adversarial attacks",
    imageSource: "Adversarial-Attacks/checkpoints/exp_1/figures/mean_std_accuracy.png",
    imageSourceUrl: "https://github.com/ThunderstormXX/Adversarial-Attacks/blob/main/checkpoints/exp_1/figures/mean_std_accuracy.png",
    summary:
      "Adversarial-training experiments on attacked MNIST, with adaptive attack weighting and comparisons between ALSO and AdamW.",
    details:
      "The experiments track how prioritizing harder attacks changes average quality over epochs, using attacked MNIST, torchvision transforms, and FGSM-style pipelines.",
    highlights: [
      "Adaptive weighting over attack difficulty.",
      "ALSO versus AdamW training comparison.",
      "Experiment artifacts and plots saved under checkpoints."
    ]
  },
  {
    slug: "relaxit",
    title: "Just Relax It",
    tag: "PyTorch library",
    repo: "https://github.com/intsystems/relaxit",
    image: "figures/relaxit.png",
    imageAlt: "Discrete to continuous relaxation overview",
    imageSource: "relaxit/assets/overview.png",
    imageSourceUrl: "https://github.com/intsystems/relaxit/blob/main/assets/overview.png",
    summary:
      "A Python library for optimizing discrete probability distributions in neural networks with relaxation techniques compatible with PyTorch.",
    details:
      "RelaxIt collects relaxations such as relaxed Bernoulli, Gumbel-Softmax variants, hard concrete, REBAR, RELAX, and logistic-normal approximations behind a PyTorch-friendly interface.",
    highlights: [
      "Discrete-variable relaxation methods with PyTorch-style APIs.",
      "VAE demos, RL benchmarks, documentation, and tests.",
      "Team project with technical report and public docs."
    ],
    featured: true
  },
  {
    slug: "cfw-in-ml",
    title: "CFW-in-ML",
    tag: "Frank-Wolfe",
    repo: "https://github.com/ThunderstormXX/CFW-in-ML",
    image: "figures/cfw-in-ml.png",
    imageAlt: "Experiment 6 LIBSVM criterion curves from the CFW notebook",
    imageSource: "CFW-in-ML/notebooks/CFW_logregression.ipynb, Experiment 6",
    imageSourceUrl: "https://github.com/ThunderstormXX/CFW-in-ML/blob/main/notebooks/CFW_logregression.ipynb",
    summary:
      "Implementations of FW, CFW, and NFW algorithms for binary classification with logistic-regression models.",
    details:
      "This notebook-driven project compares Frank-Wolfe variants under different constraints and tracks convergence behavior in logistic-regression experiments.",
    highlights: [
      "FW, CFW, and NFW implementations for logistic regression.",
      "MNIST and LIBSVM-style experimental setups.",
      "Experiment 6 criterion plots extracted from the research notebook."
    ]
  },
  {
    slug: "methods-optimization",
    title: "Methods-Optimization",
    tag: "Optimization",
    repo: "https://github.com/ThunderstormXX/Methods-Optimization",
    image: "figures/methods-optimization.png",
    imageAlt: "Nesterov convergence curves with gamma 1 over L and different momentums",
    imageSource: "Methods-Optimization/homeworks/8sem/hw_1/hw1.ipynb",
    imageSourceUrl: "https://github.com/ThunderstormXX/Methods-Optimization/blob/main/homeworks/8sem/hw_1/hw1.ipynb",
    summary:
      "Coursework and experiments in numerical optimization from applied mathematics studies.",
    details:
      "The repository contains optimization assignments and comparative plots across methods and constraints, forming a compact record of algorithmic experiments.",
    highlights: [
      "Nesterov acceleration with gamma = 1/L and different momentums.",
      "Heavy-ball, Newton, BFGS, and LBFGS comparisons.",
      "Coursework code from applied optimization practice."
    ]
  },
  {
    slug: "reinforcement-learning",
    title: "Reinforcement_learning",
    tag: "RL",
    repo: "https://github.com/ThunderstormXX/Reinforcement_learning",
    image: "figures/reinforcement-learning.png",
    imageAlt: "Reward curve from reinforcement learning homework",
    imageSource: "Reinforcement_learning/ml_advanced_hw/hw1/homework.ipynb",
    imageSourceUrl: "https://github.com/ThunderstormXX/Reinforcement_learning/blob/main/ml_advanced_hw/hw1/homework.ipynb",
    summary:
      "Reinforcement learning assignments, experiment notebooks, implementation notes, and saved training artifacts.",
    details:
      "The repository covers MDPs, value iteration, deep Q-learning, actor-critic methods, and advanced ML coursework, including videos and notebook outputs.",
    highlights: [
      "Value and policy iteration assignments.",
      "Deep Q-learning notebooks and environment utilities.",
      "Training curves and saved episode videos."
    ]
  },
  {
    slug: "computational-mathematics",
    title: "Computational-mathematics",
    tag: "Numerics",
    repo: "https://github.com/ThunderstormXX/Computational-mathematics",
    image: "figures/computational-mathematics-root-sqrt3.png",
    imageAlt: "Log-log numerical error plot near sqrt(3) for computing the real cube root",
    imageSource: "Computational-mathematics/All tasks/test.ipynb",
    imageSourceUrl: "https://github.com/ThunderstormXX/Computational-mathematics/blob/main/All%20tasks/test.ipynb",
    summary:
      "Assignments in computational mathematics covering interpolation, gradients, differential equations, numerical error analysis, and 3D plots.",
    details:
      "The notebooks cover practical numerical methods, from finite differences and interpolation to gradient descent and geometric computations.",
    highlights: [
      "Many notebook-based numerical experiments.",
      "Interpolation, differential equations, gradients, and numerical errors.",
      "Log-log root error plot extracted from assignment outputs."
    ]
  },
  {
    slug: "mmo-tm",
    title: "mmo_tm",
    tag: "Traffic assignment",
    repo: "https://github.com/ThunderstormXX/mmo_tm",
    image: "figures/mmo-tm-transport-results.png",
    imageAlt: "Relative-gap convergence curves for traffic-assignment solvers on Berlin and Barcelona road graphs",
    imageSource: "mmo_tm/experiments_results/for_paper/4-6_imgs.png",
    imageSourceUrl: "https://github.com/ThunderstormXX/mmo_tm/blob/master/experiments_results/for_paper/4-6_imgs.png",
    summary:
      "Transportation-modeling research code for equilibrium traffic assignment and combined travel-demand problems on road-network graphs.",
    details:
      "My contribution is in adding and testing optimization solvers for traffic assignment: Frank-Wolfe variants, conjugate directions, stochastic correspondence methods, and experiment pipelines that compare relative-gap convergence across real road networks.",
    highlights: [
      "Added optimizer and solver variants for equilibrium transportation-flow assignment.",
      "Experiment scripts compare solver behavior across road graphs such as Berlin and Barcelona.",
      "Paper-oriented result figures track relative-gap convergence over runtime."
    ]
  },
  {
    slug: "mlnotes",
    title: "MLNotes",
    tag: "ML notes",
    repo: "https://github.com/ThunderstormXX/MLNotes",
    image: "figures/mlnotes.png",
    imageAlt: "Red fMRI brain slices from the MathForecast lab notebook",
    imageSource: "MLNotes/MathForecast/Lab_work_2.ipynb",
    imageSourceUrl: "https://github.com/ThunderstormXX/MLNotes/blob/main/MathForecast/Lab_work_2.ipynb",
    summary:
      "Notebooks and notes on stochastic processes, EM, GANs, Neural ODEs, recommender systems, statistics, and time-series forecasting.",
    details:
      "MLNotes is a broad notebook collection covering deep learning experiments, stochastic-process simulations, Neural ODE experiments, WGAN outputs, forecasting labs, and statistics work.",
    highlights: [
      "fMRI tensor decomposition and MathForecast lab notebooks.",
      "WGAN, EM, Neural ODE, and stochastic-process notebooks.",
      "Visual outputs preserved directly in notebooks."
    ]
  },
  {
    slug: "mlfinance",
    title: "MLFinance",
    tag: "Quant finance",
    repo: "https://github.com/ThunderstormXX/MLFinance",
    image: "figures/mlfinance.png",
    imageAlt: "Black-Scholes Greeks approximation surfaces",
    imageSource: "MLFinance/surrogate_modeling.ipynb",
    imageSourceUrl: "https://github.com/ThunderstormXX/MLFinance/blob/main/surrogate_modeling.ipynb",
    summary:
      "Neural-network surrogate modeling for Black-Scholes pricing and Greek estimation.",
    details:
      "The project trains a neural surrogate for Black-Scholes prices, samples synthetic data, compares targets, and tests whether Greeks estimated through the surrogate remain accurate.",
    highlights: [
      "Black-Scholes price approximation with a neural model.",
      "Greeks estimation from the learned surrogate.",
      "Notebook figures for price and Greek surfaces."
    ]
  }
];

window.TEAM_PROJECTS = [
  {
    slug: "team-llm-compression",
    title: "LLM Compression and Distillation",
    tag: "BRAIn Lab team",
    repo: "https://github.com/brain-lab-research/llm-compression",
    image: "figures/team-llm-compression.svg",
    imageAlt: "Schematic preview of an LLM compression and distillation pipeline",
    summary:
      "A student-team research track on LLM compression methods where I worked as Team Lead: project framing, task decomposition, code and experiment review, reproducibility checks, and technical supervision.",
    status: "Public repository",
    action: "Open repository"
  },
  {
    slug: "team-early-exit",
    title: "SkipLayer / EarlyExit",
    tag: "BRAIn Lab team",
    image: "figures/team-early-exit.svg",
    imageAlt: "Schematic preview of early-exit language-model inference with aligners and an adapter",
    summary:
      "A team track I led/supervised on early-exit LLM training and evaluation, with emphasis on intermediate-layer alignment, adapter decisions, and comparable inference experiments.",
    status: "Repository link coming soon",
    action: "Details soon"
  },
  {
    slug: "team-nlhf",
    title: "NLHF",
    tag: "BRAIn Lab team",
    image: "figures/team-nlhf.png",
    imageAlt: "Tournament dashboard with win matrix, AlphaRank, and Elo-style rankings",
    summary:
      "A student-team project I led/supervised on preference-style and game-theoretic feedback pipelines for language-model comparison and alignment research.",
    status: "Repository link coming soon",
    action: "Details soon"
  },
  {
    slug: "team-theory-games",
    title: "Q-Learning and LLM Agents in Games",
    tag: "BRAIn Lab team",
    repo: "https://github.com/ThunderstormXX/TheoryGamesDL",
    image: "figures/team-theory-games.png",
    imageAlt: "Cooperation-rate trajectories in game-theoretic reinforcement learning experiments",
    summary:
      "A student-team project I led/supervised on Q-learning, neural RL agents, and LLM-agent experiments for game-theoretic social-dilemma settings.",
    status: "Public repository",
    action: "Open repository"
  },
  {
    slug: "team-sgdiffusion",
    title: "SGDiffusion Team Track",
    tag: "BRAIn Lab team",
    href: "project.html?project=sgdiffusion",
    image: "figures/team-sgdiffusion-variance-saturation.png",
    imageAlt: "NanoGPT 6.6M variance saturation curves across Hessian eigendirections",
    summary:
      "A team research track I led/supervised on SGD noise analysis, finite-step stochastic dynamics, and local-minima experiments built around the SGDiffusion codebase.",
    status: "Project page",
    action: "Open project page"
  },
  {
    slug: "team-optimization-flows",
    title: "Optimization of Flows",
    tag: "BRAIn Lab team",
    image: "figures/team-optimization-flows.png",
    imageAlt: "Urban logistics route map with multiple agent trajectories and load labels",
    summary:
      "A team project I led/supervised on optimization algorithms for transportation-flow problems and urban-logistics routing.",
    status: "Repository link coming soon",
    action: "Details soon"
  }
];

const priorityProjectOrder = [
  "qwen-deepscaler-distillation",
  "heterocrossplay-nlhf",
  "ridiculous-llm-compression",
  "sgdiffusion",
  "vllm-adadecode-research",
  "mmo-tm",
  "relaxit",
  "mlfinance",
  "computational-mathematics",
  "mlnotes"
];
const priorityBySlug = new Map(priorityProjectOrder.map((slug, index) => [slug, index]));

window.PROJECTS.sort((left, right) => {
  const leftPriority = priorityBySlug.get(left.slug) ?? Number.POSITIVE_INFINITY;
  const rightPriority = priorityBySlug.get(right.slug) ?? Number.POSITIVE_INFINITY;
  if (leftPriority === rightPriority) return 0;
  return leftPriority - rightPriority;
});
