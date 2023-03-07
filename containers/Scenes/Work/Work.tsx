import { Papercut } from './Papercut';
import { Anz } from './Anz';
import { Title } from './Title';
import { Atlassian } from './Atlassian';
import { Doorsteps } from './Doorsteps';

export const WorkScenes = ({ windowHeight }: SceneProps): JSX.Element[] => ([
  <Title key="title" windowHeight={windowHeight} />,
  <Atlassian key="atlassian" windowHeight={windowHeight} />,
  <Doorsteps key="doorsteps" windowHeight={windowHeight} />,
  <Papercut key="papercut" windowHeight={windowHeight} />,
  <Anz key="anz" windowHeight={windowHeight} />]);
