export const styles = {
  layout: {
    container: 'container mx-auto px-4',
    section: {
      default: 'py-16',
      spacing: 'space-y-6',
    },
  },
  transition: {
    default: 'transition-all duration-300',
    color: 'transition-colors duration-300',
    transform: 'transition-transform duration-300',
  },
  card: {
    wrapper: 'bg-surface-dark rounded-xl overflow-hidden hover:bg-surface-darker transition-all duration-300',
    title: 'text-2xl font-bold text-white group-hover:text-accent-lime transition-colors duration-300',
  },
} as const; 