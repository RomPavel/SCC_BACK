import { NOVELTY_CATEGORY_GROUP } from '../groups'

export const noveltyCategoryTable = [
    {
        options: [
            {
                value: 'Принципиально новые ПО, не имеющие подобных аналогов',
                group: NOVELTY_CATEGORY_GROUP,
            },
        ],
        value: 1
    },
    {
        options: [
            {
                value: 'ПО, являющиеся развитием определенного параметрического ряда ПО',
                group: NOVELTY_CATEGORY_GROUP,
            },
        ],
        value: 2
    },
    {
        options: [
            {
                value: 'ПО, являющиеся развитием определенного параметрического ряда ПО, разработанных для ранее освоенных типов конфигурации ПК и ОС',
                group: NOVELTY_CATEGORY_GROUP,
            },
        ],
        value: 3
    },
]