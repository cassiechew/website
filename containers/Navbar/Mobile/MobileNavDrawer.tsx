import {
  Flex,
  Box,
  Slide,
} from '@chakra-ui/react';
import { constants } from 'buffer';

import DarkModeToggle from '../../../components/DarkModeToggle';
import MobileMenuToggleButton from '../../../components/MobileMenuToggleButton';
import To from '../../../components/To';
import { DesktopWidth } from '../../../constants/constants';

declare type DrawerProps = {
  drawerProps: {
    isOpen: boolean,
    onToggle: () => void
  }
}

declare type Props = {
    width: number,
    isOpen: boolean,
    onToggle: () => void
  }

const MobileNavDrawer = ({ drawerProps } : DrawerProps) : JSX.Element => (
  <>
    <Slide in={drawerProps.isOpen}>
      <Flex
        height="150vh"
        width="100%"
        justifyContent="right"
        flexDirection="row"
      >
        <Box
          width="30%"
          height="100%"
          onClick={() => {
            drawerProps.onToggle();
          }}
        />
        <Box
          color="white"
          bg="#FF0066"
          height="150vh"
          width="70%"
          justifyContent="right"
        >
          <Box
            zIndex="1002 !important"
            pt="20%"
            pl="20px"
          >
            <To name="Me" to="" activeColor="white" inactiveColor="white" />
            <br />
            <To name="Projects" to="projects" activeColor="white" inactiveColor="white" />
            <br />
            <To name="Blog" to="blog" activeColor="white" inactiveColor="white" />
            <br />
            <To name="Git" to="github" activeColor="white" inactiveColor="white" />
            <br />
            <DarkModeToggle inactiveColor="white" upper />
          </Box>
        </Box>
      </Flex>
    </Slide>
  </>
);

export const MobileNav = ({ width, isOpen, onToggle }: Props): JSX.Element => (
  (width <= DesktopWidth) ? (
    <>
      <Flex
        anchor="right"
        pt="3vh"
        pl="90vw"
      >
        <MobileMenuToggleButton onToggle={onToggle} />
      </Flex>
      <MobileNavDrawer drawerProps={{ isOpen, onToggle }} />
    </>
  ) : <></>);
