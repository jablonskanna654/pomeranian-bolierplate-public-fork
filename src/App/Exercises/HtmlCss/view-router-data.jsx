import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { BusinessCardMetaData } from './BusinessCard/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { ListMetaData } from './List/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoxModel } from './Exercise-Box-model/router-data';
import { TablesMetaData } from './Tables/router-data';
import { FloatsAndPositioningMetaData } from './FloatsAndPositioning/router-data';

export const blockRouterMetaData = [
  SelectorsAndCascadeMetaData,
  GoogleFontsMetaData,
  BusinessCardMetaData,
  ListMetaData,
  blockRouterMetaDataBoxModel,
  TablesMetaData,
  FloatsAndPositioningMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
