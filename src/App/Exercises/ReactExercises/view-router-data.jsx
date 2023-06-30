import { getParsedRouterDataList } from '../../router-data/parseRouterData';

// import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { FloatsAndPositioningMetaData as Floats } from '../HtmlCss/FloatsAndPositioning/router-data';
import { SubRouteExampleMetaData as MuiMetaData } from './MaterialUIBasicElements/router-data';
export const blockRouterMetaData = [
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  MuiMetaData,
  Floats,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
