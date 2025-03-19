import { Card } from "./Card";

type Props = {
  title: string;
  duration: string;
  positions: string[];
  achievements: string[];
};

export function CareerCard({
  title,
  duration,
  positions,
  achievements,
}: Props) {
  return (
    <Card>
      <div className="career-card">
        <h3 className="career-card-title">
          {title}
          <span className="career-card-duration"> - {duration}</span>
        </h3>
        <ul className="position-list">
          {positions.map((position) => (
            <li className="position-list-item">{position}</li>
          ))}
        </ul>
        <ul className="achievement-list">
          {achievements.map((achievement) => (
            <li className="achievement-list-item">・{achievement}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
