type Props = {
  title: string;
  children: React.ReactNode;
  divider?: true;
  className?: string;
  id?: string;
};

function Section({ title, children, divider, className, id }: Props) {
  return (
    <section className={`section ${className}`} id={id ?? ""}>
      <h2 className={`section-title ${className}`}>{title}</h2>
      <p className="section-text">{children}</p>
      {divider && <hr className="section-divider" />}
    </section>
  );
}

export default Section;
