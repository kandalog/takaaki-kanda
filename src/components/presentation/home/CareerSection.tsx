import Section from "../../common/Section";
import { ItandiCareerCard } from "./career/ItandiCareerCard";
import { MetapsCareerCard } from "./career/MetapsCareerCard";
import { SimpleCareerCard } from "./career/SimpleCareerCard";

export function CareerSection() {
  return (
    <Section title="経歴" divider id="career">
      <MetapsCareerCard />
      <SimpleCareerCard />
      <ItandiCareerCard />
    </Section>
  );
}
