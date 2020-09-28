import React from 'react';
import {Text, View} from 'react-native';

import {footerStyles} from './footerStyle';
import {COLORS} from '../../utils/constants/Colors';
import {Link} from 'react-router-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faList, faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {}

interface NavButton {
  active: boolean;
  icon: IconDefinition;
  iconColor?: string;
  link: string;
}

const NavButtons: NavButton[] = [
  {
    active: false,
    icon: faHome,
    iconColor: COLORS.primary,
    link: '/',
  },
  {
    active: false,
    icon: faList,
    iconColor: COLORS.primary,
    link: '/todo',
  },
  {
    active: false,
    icon: faCheck,
    iconColor: COLORS.primary,
    link: '/completed',
  },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <View style={footerStyles.root}>
      {NavButtons.map((item: NavButton) => (
        <View style={footerStyles.navButton} key={item.link}>
          <Link to={item.link}>
            <FontAwesomeIcon icon={item.icon} size={30} color={item.iconColor} />
          </Link>
        </View>
      ))}
    </View>
  );
};

export default Footer;
