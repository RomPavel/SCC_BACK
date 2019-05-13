import { functionCatalog } from './function.catalog';
import { complexityCatalog } from './complexity.catalog';
import { complexityRiseCatalog } from './complexity.rise.catalog';
import { patternCatalog } from './pattern.catalog';
import { noveltyUseCatalog } from './novelty.use.catalog';
import { noveltyCatalog } from './novelty.catalog';
import { devEnvsCatalog } from './dev.environment.catalog'
import { devMeansCatalog } from './dev.means.catalog';
import { OSCatalog } from './os.catalog';
import { CODE_ANALISYS_GROUP,MEANS_ANALYSIS_GROUP,OS_ANALYSIS_GROUP, PATTERN_USAGE_GROUP,NOVELTY_OF_USE_GROUP ,INCREASED_COMPLEXITY_GROUP, ENV_ANALISYS_GROUP, COMPLEXITY_ANALYSIS_GROUP, NOVELTY_CATEGORY_GROUP } from '../groups';


export const configSettings = [
    {
        group: CODE_ANALISYS_GROUP,
        description: 'Choose your software functions',
        value: functionCatalog,
        required: true,
        multi: true,
    },
    {
        group: ENV_ANALISYS_GROUP,
        description: 'Choose your development environment',
        value: devEnvsCatalog,
        required: true,
        multi: false,
    },
    {
        group: COMPLEXITY_ANALYSIS_GROUP,
        description: 'Choose the particular qualities of software',
        value: complexityCatalog,
        required: false,
        multi: true,
    }, {
        group: INCREASED_COMPLEXITY_GROUP,
        description: 'Choose software particular qualities with increased complexity',
        value: complexityRiseCatalog,
        required: false,
        multi: true,
    }, {
        group: NOVELTY_CATEGORY_GROUP,
        description: 'Choose degree of novelty',
        value: noveltyCatalog,
        required: true,
        multi: false,
    }, {
        group: NOVELTY_OF_USE_GROUP,
        description: 'Choose novelty of use',
        value: noveltyUseCatalog,
        required: false,
        multi: true,
    }, {
        group: PATTERN_USAGE_GROUP,
        description: 'Specify the percentage of use of standard modules',
        value: patternCatalog,
        required: true,
        multi: false,
    },
    {
        group: MEANS_ANALYSIS_GROUP,
        description: 'Specify development means',
        value: devMeansCatalog,
        required: true,
        multi: false,
    },
    {
        group: OS_ANALYSIS_GROUP,
        description: 'Specify operation system',
        value: OSCatalog,
        required: true,
        multi: false,
    },
]