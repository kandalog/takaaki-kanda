type Props = {
  title: string;
  children: React.ReactNode;
  divider?: true;
};

function Section({ title, children, divider }: Props) {
  return (
    <section className={`section ${title}`}>
      <h2 className={`section-title ${title}`}>{title}</h2>
      <p className="section-content">{children}</p>
      {divider && <hr className="section-divider" />}
    </section>
  );
}

export default Section;
