import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import {
  IconHome,
  IconPositions,
  IconEye,
  IconProfile,
  IconHomeGradient,
} from '@/assets';

type NavItem = {
  path: string;
  label: string;
  icon: ReactNode;
  iconActive: ReactNode | null;
};

const navItems: NavItem[] = [
  {
    path: '/trade',
    label: 'Trade',
    icon: <IconHome className="size-5" />,
    iconActive: <IconHomeGradient className="size-5" />,
  },
  {
    path: '/positions',
    label: 'Positions',
    icon: <IconPositions className="size-5" />,
    iconActive: null,
  },
  {
    path: '/rewards',
    label: 'Rewards',
    icon: <IconEye className="size-5" />,
    iconActive: null,
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: <IconProfile className="size-5" />,
    iconActive: null,
  },
];

export function NavigationBar() {
  return (
    <div className="flex justify-evenly fixed bottom-0 left-0 right-0 bg-background p-2">
      <div className="w-full max-w-lg flex justify-around items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-0.5 transition-colors relative"
          >
            {({ isActive }) => (
              <>
                <div
                  className={cn(
                    'size-9 rounded-xl flex items-center justify-center',
                    isActive
                      ? 'bg-main-gradient-10 text-success'
                      : 'text-white/50',
                  )}
                >
                  {isActive && item.iconActive ? item.iconActive : item.icon}
                </div>

                <span
                  className={cn(
                    'text-xxs font-medium transition-colors',
                    isActive ? 'text-white' : 'text-white/50',
                  )}
                >
                  {item.label}
                  {item.path === '/rewards' && (
                    <span className="absolute -top-2.5 -right-[105%] bg-accent-gold/20 text-accent-gold text-xs font-medium px-1.5 rounded-full">
                      345,29k
                    </span>
                  )}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
