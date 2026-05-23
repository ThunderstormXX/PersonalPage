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
      "Reproducible experiments for finite-step SGD dynamics, Langevin-type approximations, Fokker-Planck predictions, Hessian-basis diagnostics, and small neural-network validation.",
    details:
      "The repository backs the SGD dynamics paper workflow: configs, experiment runners, saved artifacts, figures, and clean reproduction commands for testing when Brownian-motion approximations fail.",
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
    summary:
      "A pruning and healing library for large language models with LoRA fine-tuning, layer pruning, decoder search, and attention head merging experiments.",
    details:
      "The code organizes layer removal, healing fine-tuning, least-important-layer search, and attention-head merging into reusable scripts and library modules for compression experiments.",
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
      "Adversarial training experiments on attacked MNIST with adaptive weighting of attacks and comparisons between ALSO and AdamW training pipelines.",
    details:
      "The experiment tracks how prioritizing harder attacks changes the average quality over epochs, using attacked MNIST, torchvision transforms, and FGSM-style pipelines.",
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
      "Implementations of FW, CFW, and NFW algorithms for binary classification in logistic regression models.",
    details:
      "The notebook-driven project compares Frank-Wolfe variants under different constraints and tracks convergence behavior for logistic regression experiments.",
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
      "Optimization methods coursework and experiments collected from applied mathematics studies.",
    details:
      "The repository contains optimization assignments and comparative plots across constraints and methods, useful as a compact record of algorithmic experiments.",
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
      "Reinforcement learning assignments, experiments, implementation notes, and saved training artifacts.",
    details:
      "The repository collects MDP, value iteration, deep Q-learning, actor-critic, and advanced ML homework materials, including videos and notebook outputs.",
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
    image: "figures/computational-mathematics.png",
    imageAlt: "Log-log numerical error plot for computing the real cube root",
    imageSource: "Computational-mathematics/All tasks/test.ipynb",
    imageSourceUrl: "https://github.com/ThunderstormXX/Computational-mathematics/blob/main/All%20tasks/test.ipynb",
    summary:
      "Practical computational mathematics assignments with numerical tasks across interpolation, gradients, differential equations, and 3D plots.",
    details:
      "The notebooks cover practical numerical methods, from finite differences and interpolation to gradient descent and geometry-heavy computational tasks.",
    highlights: [
      "Many notebook-based numerical experiments.",
      "Interpolation, differential equations, gradients, and numerical errors.",
      "Log-log root error plot extracted from assignment outputs."
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
      "Notebooks and notes on stochastic processes, EM, GANs, NeuralODE, recommender systems, statistics, and time-series forecasting.",
    details:
      "MLNotes is a broad notebook collection: deep learning experiments, stochastic-process simulations, NeuralODE attempts, WGAN outputs, forecasting labs, and statistics work.",
    highlights: [
      "fMRI tensor decomposition and MathForecast lab notebooks.",
      "WGAN, EM, NeuralODE, and stochastic-process notebooks.",
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
      "Neural-network surrogate modeling for Black-Scholes pricing and Greeks estimation.",
    details:
      "The project trains a neural surrogate for Black-Scholes prices, samples synthetic data, compares targets, and checks whether Greeks estimated through the surrogate stay accurate.",
    highlights: [
      "Black-Scholes price approximation with a neural model.",
      "Greeks estimation from the learned surrogate.",
      "Notebook figures for price and Greek surfaces."
    ]
  }
];
