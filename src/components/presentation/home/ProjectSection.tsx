import Section from "../../common/Section";

function ProjectSection() {
  return (
    <Section className="project" title="プロジェクト" id="project">
      <a
        target="_target"
        className="project-link"
        href="https://github.com/kandalog"
      >
        GitHubのPinned参照
      </a>
    </Section>
  );
}

export default ProjectSection;
