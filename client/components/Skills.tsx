// client/components/Skills.tsx

interface Skill {
  id: number;
  name: string;
  level: string;
}

interface Props {
  skills: Skill[];
}

function Skills({ skills }: Props) {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <span>{skill.name}</span>
            <span> - {skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;