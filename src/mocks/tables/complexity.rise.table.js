import { INCREASED_COMPLEXITY_GROUP, COMPLEXITY_OPTIONS_AMOUNT_GROUP } from '../groups';

export const complexityRiseTable = [
    {
        options: [
            {
                value: 'Функционирование ПО в расширенной операционной среде (связь с другими ПО)',
                group: INCREASED_COMPLEXITY_GROUP,
            },
        ],
        value: 0.8
    },
    {
        options: [
            {
                value: 'Интерактивный доступ',
                group: INCREASED_COMPLEXITY_GROUP,
            },
        ],
        value: 0.6
    },
    {
        options: [
            {
                value: 'Обеспечение хранения, ведения и поиска данных в сложных структурах',
                group: INCREASED_COMPLEXITY_GROUP,
            },
        ],
        value: 0.7
    },
    {
        options: [
            {
                value: 2,
                group: COMPLEXITY_OPTIONS_AMOUNT_GROUP
            }
        ],
        value: 0.12
    },
    {
        options: [
            {
                value: 3,
                group: COMPLEXITY_OPTIONS_AMOUNT_GROUP
            }
        ],
        value: 0.18
    },
    {
        options: [
            {
                value: 4,
                group: COMPLEXITY_OPTIONS_AMOUNT_GROUP
            }
        ],
        value: 0.26
    }
]