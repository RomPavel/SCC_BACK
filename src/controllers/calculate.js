import {
    locTable,
    complexityTable,
    laboriousnessTable,
    complexityRiseTable,
    noveltyCategoryTable,
    noveltyTable,
    patternTable,
    meansTable,
    devStagesLaboriousnessTable
} from '../mocks/tables';
import {
    CODE_ANALISYS_GROUP,
    ENV_ANALISYS_GROUP,
    COMPLEXITY_ANALYSIS_GROUP,
    COMPLEXITY_LEVEL_GROUP,
    LOC_AMOUNT_GROUP,
    INCREASED_COMPLEXITY_GROUP,
    COMPLEXITY_OPTIONS_AMOUNT_GROUP,
    NOVELTY_CATEGORY_GROUP,
    NOVELTY_OF_USE_GROUP,
    PATTERN_USAGE_GROUP,
    MEANS_ANALYSIS_GROUP,
    OS_ANALYSIS_GROUP
} from '../mocks/groups';


export function calculate(config) {
    try {
        const configMap = mapConfig(config);

        const loc = determineLOC(configMap[CODE_ANALISYS_GROUP], configMap[ENV_ANALISYS_GROUP]);
        const complexity = determineComplexity(configMap[COMPLEXITY_ANALYSIS_GROUP])

        const commonLaboriousnessCoeff = determineCommonLabCoeff([{ value: loc, group: LOC_AMOUNT_GROUP }, { value: complexity, group: COMPLEXITY_LEVEL_GROUP }]);

        const complexRiseConfig = [...configMap[INCREASED_COMPLEXITY_GROUP], { value: configMap[COMPLEXITY_ANALYSIS_GROUP].length, group: COMPLEXITY_OPTIONS_AMOUNT_GROUP }]
        const complexityRiseCoeff = determineComplexityRiseCoeff(complexRiseConfig);


        const noveltyCategory = determineCoeffInTable(noveltyCategoryTable, configMap[NOVELTY_CATEGORY_GROUP]);
        if (noveltyCategory === 3) {
            configMap[NOVELTY_OF_USE_GROUP] = []; //не учитывать на основе чего будет новизна, если категория новизны 3
        }
        const noveltyConfig = [...configMap[NOVELTY_OF_USE_GROUP], { group: NOVELTY_CATEGORY_GROUP, value: noveltyCategory }];

        const noveltyCoeff = determineCoeffInTable(noveltyTable, noveltyConfig);
        const patternCoeff = determineCoeffInTable(patternTable, configMap[PATTERN_USAGE_GROUP]);
        const meansCoeff = determineCoeffInTable(meansTable, [...configMap[MEANS_ANALYSIS_GROUP], ...configMap[OS_ANALYSIS_GROUP]]);

        const devStagesCoeffs = determineCoeffInTable(devStagesLaboriousnessTable, [{ group: NOVELTY_CATEGORY_GROUP, value: noveltyCategory }])

        const laboriousness = determineLaboriusness({ commonLaboriousnessCoeff, commonLaboriousnessCoeff, complexityRiseCoeff, noveltyCoeff, patternCoeff, meansCoeff, devStagesCoeffs });

        return laboriousness;
    } catch (e) {
        console.log(e, 'error');
    }
};


function determineLOC(locConfig, devEnvsConfig) {
    const devEnvsOption = devEnvsConfig[0];
    const LOC = locConfig.reduce((accum, locOption) => {
        const concurrence = locTable.find(({ options: tableOptions }) => isOptionsArraysEquals([locOption, devEnvsOption], tableOptions))
        return accum + (concurrence ? concurrence.value : 0);
    }, 0);
    return LOC;
}

function determineComplexity(complexityConfig) {
    let complexity = 0;
    complexityConfig.forEach(complexityOption => {
        complexityTable.some(({ options: tableOptions, value: complexityLevel }) => {
            const isTableRowInclude = tableOptions.some(({ value, group }) => complexityOption.group === group && complexityOption.value === value);
            complexity = isTableRowInclude ? complexityLevel : complexity;
            return isTableRowInclude;
        })
    });
    return complexity;
}

function determineCommonLabCoeff([{ value: loc }, { value: complexity }]) {
    let minimalDiff = Number.MAX_VALUE;
    let coeff = 1;
    laboriousnessTable.forEach(({ options, value }) => {
        const tableComplexity = options.find(el => el.group === COMPLEXITY_LEVEL_GROUP).value;
        if (tableComplexity !== complexity) {
            return;
        }
        const tableOptionLOC = options.find(el => el.group === LOC_AMOUNT_GROUP).value;
        const newDiff = Math.abs(tableOptionLOC - loc);
        if (newDiff < minimalDiff) {
            minimalDiff = newDiff;
            coeff = value;
        }
    })
    return coeff;
}

function determineComplexityRiseCoeff(complexRiseConfig) {
    let coeff = 1;
    complexRiseConfig.forEach((option) => {
        if (option.group === COMPLEXITY_OPTIONS_AMOUNT_GROUP) {
            let Kspecial = 0;
            let minimalDiff = Number.MAX_VALUE;
            complexityRiseTable.forEach(({ options, value }) => {
                const tableComplexityOptions = options.find(el => el.group === COMPLEXITY_OPTIONS_AMOUNT_GROUP);
                if (!tableComplexityOptions) {
                    return;
                }
                const tableComplexityOptionsAmount = tableComplexityOptions.value;
                const newDiff = Math.abs(tableComplexityOptionsAmount - option.value);
                if (newDiff < minimalDiff) {
                    minimalDiff = newDiff;
                    Kspecial = value;
                }
            });
            coeff += Kspecial;
            return;
        }
        const Ki = determineCoeffInTable(complexityRiseTable, [option]);

        coeff += Ki;
    })
    return +coeff.toFixed(2);
}

function determineCoeffInTable(table, config) {
    return table.find(({ options }) => isOptionsArraysEquals(config, options)).value;
}

function determineLaboriusness({ commonLaboriousnessCoeff, complexityRiseCoeff, noveltyCoeff, patternCoeff, meansCoeff, devStagesCoeffs }) {
    let devStagesLaboriousness = new Array(5).fill(commonLaboriousnessCoeff);
    devStagesLaboriousness = devStagesLaboriousness.map((el, ind) => {
        const commonCoeffMultiply = complexityRiseCoeff * noveltyCoeff * meansCoeff;
        return +(el * devStagesCoeffs[ind] * commonCoeffMultiply).toFixed(2)
    })

    devStagesLaboriousness[3] *= patternCoeff;

    return devStagesLaboriousness.reduce((accum, el) => +(accum + el).toFixed(2), 0);
}

function mapConfig(config) {
    return config.reduce((accum, el) => { return { ...accum, [el.group]: addGroupToAllOptions(el) } }, {})
}
function addGroupToAllOptions(options) {
    return options.value.map(el => ({ value: el.label, group: options.group }));
}

function isOptionsArraysEquals(configOptions, tableOptions) {
    if (configOptions.length !== tableOptions.length) {
        return;
    }
    return configOptions.every(({ group: confGroup, value: confValue }) => {
        return tableOptions.some(({ group: tableGroup, value: tableValue }) => confGroup === tableGroup && confValue === tableValue);
    })
}

function isArrayIsSubArray(configOptions, tableOptions) {
    return configOptions.some(({ group: confGroup, value: confValue }) => {
        return tableOptions.some(({ group: tableGroup, value: tableValue }) => confGroup === tableGroup && confValue === tableValue);
    })
}