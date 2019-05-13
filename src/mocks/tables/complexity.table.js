import { COMPLEXITY_ANALYSIS_GROUP } from '../groups';

export const complexityTable = [
    {
        options: [
            {
                value: 'Наличие сложного интеллектуального языкового интерфейса с пользователем',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
            {
                value: 'Обеспечение телекоммуникационной обработки данных и управление удаленными объектами',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
            {
                value: 'Обеспечение существенного распараллеливания  вычислений',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
            {
                value: 'Криптография и другие методы защиты информации',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
        ],
        value: 1
    },
    {
        options: [
            {
                value: 'Моделирование объектов и процессов',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
            {
                value: 'Обеспечение настройки ПО на изменения структур входных и выходных данных',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
            {
                value: 'Обеспечение переносимости ПО',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
            {
                value: 'Реализация особо сложных инженерных и научных расчетов',
                group: COMPLEXITY_ANALYSIS_GROUP,
            },
        ],
        value: 2
    },
    {
        options: [
            {
                value: 'ПО, не обладающие перечисленными выше характеристиками',
                group: COMPLEXITY_ANALYSIS_GROUP,
            }
        ],
        value: 3
    }
]