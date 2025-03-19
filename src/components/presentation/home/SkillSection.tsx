import Section from "../../common/Section";

function SkillSection() {
  return (
    <Section className="skill" divider title="スキル" id="skill">
      <p>
        <strong>プログラミング言語:</strong> TypeScript, Ruby, Python
      </p>
      <p>
        <strong>フレームワーク & ライブラリ:</strong> React, Next.js, Rails,
        Vitest, RSpec
      </p>
      <p>
        <strong>ツール:</strong> Git, Linux, Docker, Sentry, Metabase
      </p>
    </Section>
  );
}

export default SkillSection;
