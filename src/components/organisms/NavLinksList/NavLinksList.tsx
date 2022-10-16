import NavLink from '@atoms/NavLink';
import useNavigationStore from '@hooks/useNavigationStore';
import { Variants } from 'framer-motion';
import { FC } from 'react';
import * as S from './NavLinksList.styled';

export interface NavLinksListProps {
  onLinkClick?: () => void;
}

const NavLinksList: FC<NavLinksListProps> = ({ onLinkClick }) => {
  const navigableSections = useNavigationStore((state) => state.navigableSections);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <S.NavLinksList>
      {navigableSections.map((section) => (
        <S.Item key={section.id} variants={variants}>
          <NavLink href={`#${section.id}`} onClick={onLinkClick}>
            {section.title}
          </NavLink>
        </S.Item>
      ))}
    </S.NavLinksList>
  );
};

export default NavLinksList;
