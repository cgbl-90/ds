import { ProgressSummary } from "./ProgressSummary";

export default {
  title: "COMPONENTS/ProgressSummary",
  component: ProgressSummary,
};

export const LearningProgress = {
  args: {
    title: "React Fundamentals",
    progress: 40,
  },
};

export const SetupProgress = {
  args: {
    title: "Installation Setup",
    progress: 70,
  },
};

export const Completed = {
  args: {
    title: "Final Exam",
    progress: 100,
  },
};