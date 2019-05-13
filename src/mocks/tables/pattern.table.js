import { PATTERN_USAGE_GROUP } from '../groups'

export const patternTable = [
    {
        options: [
            {
                value: 'От 60% и выше',
                group: PATTERN_USAGE_GROUP,
            },
        ],
        value: 0.55
    },
    {
        options: [
            {
                value: 'От 40% до 60%',
                group: PATTERN_USAGE_GROUP,
            },
        ],
        value: 0.65
    },
    {
        options: [
            {
                value: 'От 20% до 40%',
                group: PATTERN_USAGE_GROUP,
            },
        ],
        value: 0.77
    },
    {
        options: [
            {
                value: 'До 20%',
                group: PATTERN_USAGE_GROUP,
            },
        ],
        value: 0.9
    },
    {
        options: [
            {
                value: 'Не используются стандартные модули для реализации функций разрабатываемого ПО',
                group: PATTERN_USAGE_GROUP,
            },
        ],
        value: 1
    }
]