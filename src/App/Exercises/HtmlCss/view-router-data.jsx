import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { BusinessCard } from './BusinessCard/BusinessCard';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { BusinessCardMetaData } from './BusinessCard/router-data';
import { ListMetaData } from './List/router-data';
// import { TextFundaments } from './TextFundaments/TextFundaments';
export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SelectorsAndCascadeMetaData,
  GoogleFontsMetaData,
  BusinessCardMetaData,
  ListMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
