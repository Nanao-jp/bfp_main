type CardWrapperProps = {
  link?: string;
  children: React.ReactNode;
};

export default function CardWrapper({ link, children }: CardWrapperProps) {
  if (link) {
    return (
      <a href={link} className="block hover:opacity-90">
        {children}
      </a>
    );
  }
  return <>{children}</>;
} 