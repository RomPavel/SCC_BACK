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
        description: 'Выберете функционал вашего ПО',
        value: functionCatalog,
        required: true,
        multi: true,
    },
    {
        group: ENV_ANALISYS_GROUP,
        description: 'Выберете среду разработки',
        value: devEnvsCatalog,
        required: true,
        multi: false,
    },
    {
        group: COMPLEXITY_ANALYSIS_GROUP,
        description: 'Выберете характеристики ПО',
        value: complexityCatalog,
        required: false,
        multi: true,
    }, {
        group: INCREASED_COMPLEXITY_GROUP,
        description: 'Выберете усложняющие характеристики',
        value: complexityRiseCatalog,
        required: false,
        multi: true,
    }, {
        group: NOVELTY_CATEGORY_GROUP,
        description: 'Выберете степень новизны',
        value: noveltyCatalog,
        required: true,
        multi: false,
    }, {
        group: NOVELTY_OF_USE_GROUP,
        description: 'Выберете новизну использования',
        value: noveltyUseCatalog,
        required: false,
        multi: true,
    }, {
        group: PATTERN_USAGE_GROUP,
        description: 'Выберете процент использования стандартных модулей',
        value: patternCatalog,
        required: true,
        multi: false,
    },
    {
        group: MEANS_ANALYSIS_GROUP,
        description: 'Выберете средства разработки',
        value: devMeansCatalog,
        required: true,
        multi: false,
    },
    {
        group: OS_ANALYSIS_GROUP,
        description: 'Выберете ОС',
        value: OSCatalog,
        required: true,
        multi: false,
    },
]