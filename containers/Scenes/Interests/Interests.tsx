import { Languages } from './Languages';
import { Law } from './Law';
import { Other } from './Other';
import { Title } from './Title';

export const InterestScenes = ({ windowHeight }: SceneProps): JSX.Element[] => ([
  <Title key="title" windowHeight={windowHeight} />,
  <Languages key="languages" windowHeight={windowHeight} />,
  <Law key="law" windowHeight={windowHeight} />,
  <Other key="other" windowHeight={windowHeight} />,
]);
