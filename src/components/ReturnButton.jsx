import { Link } from 'react-router-dom';
// assets
import { BackIcon } from '@/assets/icons/BackIcon';

export const ReturnButton = (props) => (
  <Link to={-1} className="w-max hidden md:flex items-center gap-1 no-underline text-blueBerry" {...props}>
    <BackIcon />
    <h4 className='hidden md:block'>Volver</h4>
  </Link>
);
