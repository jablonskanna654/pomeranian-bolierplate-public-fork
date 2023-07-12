import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { routerMetaData as blockRouterMetaDataExercisesNumberIf } from './Exercise-numbers-if/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysBasics } from './JsArraysBasics/router-data';
import { ReactRouterMetaData as blockRouterMetaDataHitMoleGame } from './HitTheMoleGame/router-data';
import { ReactRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataExercisesNumberIf,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataJsArraysBasics,
  blockRouterMetaDataHitMoleGame,
  blockRouterMetaDataMemoGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
