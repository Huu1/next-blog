const ArticleCard = (props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const { className, style, children } = props;

  return (
    <div className={`transition-all ${className}`} style={{ ...style }}>
      {children}
    </div>
  );
};

export default ArticleCard;
