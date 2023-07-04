import { NavLink } from 'react-router-dom';
import './styles/aside.css';
import { SettingIcon } from '../../App/Components/Icons/SettingIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            {/* <NavLink to="dashboard">Dashboard</NavLink> */}
            <NavLink className="dashboars" to="settings">
              <SettingIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="mojeCV">Moje CV</NavLink>
            <NavLink className="mojeCV" to="settings">
              <SettingIcon className="menu-icon" />
              Moje CV
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="blocks">Bloki</NavLink> */}
            <NavLink className="aside-row" to="blocks">
              <SettingIcon className="menu-icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="exercises">Ćwiczenia</NavLink> */}
            <NavLink className="aside-row" to="exercise">
              <SettingIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="calendar">Kalendarz</NavLink> */}
            <NavLink className="aside-row" to="calendar">
              <SettingIcon className="menu-icon" />
              Kalendarz
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="blog">Blog</NavLink> */}
            <NavLink className="aside-row" to="blog">
              <SettingIcon className="menu-icon" />
              Blog
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="faq">FAQ</NavLink> */}
            <NavLink className="aside-row" to="faq">
              <SettingIcon className="menu-icon" />
              FAQ
            </NavLink>
          </li>
          <br />
          <li>
            <NavLink className="aside-row" to="settings">
              <SettingIcon className="menu-icon" />
              Ustawienia
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
