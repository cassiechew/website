import { Button } from '@chakra-ui/react';
import {
  HamburgerIcon,
} from '@chakra-ui/icons';

declare type Props = {
    onToggle: () => void
}

export const MobileMenuToggleButton = ({ onToggle }: Props): JSX.Element => (
  <Button
    userSelect="none"
    _focus={{ outline: 'none' }}
    id="mobile-nav-button"
    onClick={onToggle}
    position="absolute"
    top="3vh"
  >
    <HamburgerIcon userSelect="none" h={8} w={8} />
  </Button>
);
