export interface CollaborationItem {
  title: string;
  image: string;
  description?: string;
  link?: string;
}

export interface CollaborationCardProps {
  item: CollaborationItem;
  onClick?: () => void;
  className?: string;
}

export interface CollaborationCardContentProps extends CollaborationCardProps {
  onClick: () => void;
}

export interface CollaborationModalProps extends CollaborationCardProps {
  onClose: () => void;
} 