import { FC } from 'react';
import * as S from './NavLink.styled';

export interface NavLinkProps {
  href: string;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ children, href, onClick }) => {
  return (
    <S.NavLink href={href} onClick={onClick}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
