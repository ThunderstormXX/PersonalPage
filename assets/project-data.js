window.PROJECTS = [
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
      "Reproducible experiments for finite-step SGD dynamics: Langevin-style approximations, Fokker-Planck predictions, Hessian-basis diagnostics, and neural-network validation.",
    details:
      "This repository supports the SGD dynamics paper workflow with configs, experiment runners, saved artifacts, figures, and reproduction commands for testing where Brownian-motion approximations break down.",
    highlights: [
      "Finite-step SGD dynamics compared with Langevin-style surrogates.",
      "Hessian-basis and covariance diagnostics for real and toy models.",
      "Paper-ready experiment catalog with smoke and full configurations."
    ],
    featured: true
  },
  {
    slug: "huawei-wireless-scheduling",
    title: "AI for Wireless Resource Scheduling",
    tag: "Wireless AI",
    image: "figures/huawei-wireless-scheduling.png",
    imageAlt: "Wireless cell with five user devices served by a base station",
    imageSource: "Provided wireless scheduling schematic",
    imageSourceUrl: "figures/huawei-wireless-scheduling.png",
    summary:
      "Research on AI-based optimization for radio-resource allocation in wireless networks, with a focus on improving a classical scheduling baseline.",
    details:
      "The project studies how users are assigned to resource blocks and cells, then builds interpretable modifications of the scheduling baseline and tests RL-based policies for selecting higher-quality scheduling actions under controlled runtime.",
    highlights: [
      "Analysis of user allocation across resource blocks and cells.",
      "Modifications of a classical scheduling baseline while preserving interpretability.",
      "RL-based scheduling-action selection aimed at improving allocation quality under runtime constraints."
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
      "A library for pruning and healing large language models, with LoRA fine-tuning, layer pruning, decoder search, and attention-head merging experiments.",
    details:
      "The code packages layer removal, healing fine-tuning, least-important-layer search, and attention-head merging into reusable scripts and modules for compression experiments.",
    highlights: [
      "Layer pruning and LoRA-based healing workflows.",
      "Attention head merging analysis with layer-wise perplexity plots.",
      "Reusable scripts for iterative and window-based pruning."
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
      "A team framework for studying LLM compression methods: quantization, knowledge distillation, layer pruning, KV-cache optimization, and reproducible evaluation.",
    status: "Public repository",
    action: "Open repository"
  },
  {
    slug: "team-theory-games",
    title: "Q-Learning and LLM Agents in Games",
    tag: "BRAIn Lab team",
    repo: "https://github.com/ThunderstormXX/TheoryGamesDL",
    image: "figures/team-theory-games.png",
    imageAlt: "Cooperation-rate trajectories in game-theoretic reinforcement learning experiments",
    summary:
      "A team project combining Q-learning, neural reinforcement learning agents, and LLM-agent experiments for game-theoretic social dilemmas.",
    status: "Public repository",
    action: "Open repository"
  },
  {
    slug: "team-nlhf",
    title: "NLHF",
    tag: "BRAIn Lab team",
    image: "figures/team-nlhf.png",
    imageAlt: "Tournament dashboard with win matrix, AlphaRank, and Elo-style rankings",
    summary:
      "A team project on preference-based and game-theoretic feedback pipelines for language-model alignment and model comparison.",
    status: "Repository link coming soon",
    action: "Details soon"
  },
  {
    slug: "team-early-exit",
    title: "SkipLayer / EarlyExit",
    tag: "BRAIn Lab team",
    image: "figures/team-early-exit.svg",
    imageAlt: "Schematic preview of early-exit language-model inference with aligners and an adapter",
    summary:
      "An early-exit LLM training project where intermediate layers are aligned to the final layer, while an adapter learns when inference can stop.",
    status: "Repository link coming soon",
    action: "Details soon"
  },
  {
    slug: "team-sgdiffusion",
    title: "SGDiffusion Team Track",
    tag: "BRAIn Lab team",
    href: "project.html?project=sgdiffusion",
    image: "figures/team-sgdiffusion-variance-saturation.png",
    imageAlt: "NanoGPT 6.6M variance saturation curves across Hessian eigendirections",
    summary:
      "A team research track on SGD noise analysis, finite-step stochastic dynamics, and local-minima experiments built around the SGDiffusion workflow.",
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
      "A team project comparing algorithms for transportation-flow optimization and urban-logistics routing.",
    status: "Repository link coming soon",
    action: "Details soon"
  }
];

const priorityProjectOrder = [
  "sgdiffusion",
  "mlfinance",
  "huawei-wireless-scheduling",
  "computational-mathematics",
  "mmo-tm",
  "relaxit",
  "mlnotes"
];
const priorityBySlug = new Map(priorityProjectOrder.map((slug, index) => [slug, index]));

window.PROJECTS.sort((left, right) => {
  const leftPriority = priorityBySlug.get(left.slug) ?? Number.POSITIVE_INFINITY;
  const rightPriority = priorityBySlug.get(right.slug) ?? Number.POSITIVE_INFINITY;
  if (leftPriority === rightPriority) return 0;
  return leftPriority - rightPriority;
});
