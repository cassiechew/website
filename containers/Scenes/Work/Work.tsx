import { Papercut } from './Papercut';
import { Anz } from './Anz';
import { Title } from './Title';

export const WorkScenes = ({ windowHeight }: SceneProps): JSX.Element[] => ([
  <Title key="title" windowHeight={windowHeight} />,
  <Papercut key="papercut" windowHeight={windowHeight} />,
  <Anz key="anz" windowHeight={windowHeight} />]);
