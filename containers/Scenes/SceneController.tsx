import { Box } from '@chakra-ui/react';
import { Controller } from 'react-scrollmagic';

import { ContactScene } from './Contact/Contact';
import { BuildScene } from './Build/Build';
import { WorkScenes } from './Work/Work';
import { IntroScene } from './Intro/Intro';

const SceneController = ({ windowHeight }: SceneProps): JSX.Element => (
  <Controller>
    <Box alignItems="center">
      {WorkScenes({ windowHeight })}
      {BuildScene({ windowHeight })}
      {ContactScene({ windowHeight })}
    </Box>
  </Controller>
);

export default SceneController;
export { IntroScene };
