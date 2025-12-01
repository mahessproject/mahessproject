export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface SlideProps {
  milestone: Milestone;
  direction: number;
}

export interface NavigationProps {
  milestones: Milestone[];
  currentIndex: number;
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}
