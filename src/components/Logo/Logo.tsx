import { Link } from 'react-router-dom';

import './Logo.css';

export default function Logo() {
  return (
    <div className="logo">
      <Link to={'/'} className="logo__link">
        Лого
      </Link>
    </div>
  );
}
