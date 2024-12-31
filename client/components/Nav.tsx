import { NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '../components/Projects.tsx' },
  { label: 'Skills', path: '../components/Skills.tsx' },
  { label: 'Resume', path: '../components/Resume.tsx' },
  { label: 'About', path: '../components/About.tsx' },
];

function Nav() {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;