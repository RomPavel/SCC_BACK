import { OS_ANALYSIS_GROUP, MEANS_ANALYSIS_GROUP } from '../groups'

export const meansTable = [
    {
        options: [
            {
                value: 'Процедурные языки высокого уровня(С++, Паскаль)',
                group: MEANS_ANALYSIS_GROUP,
            },
            {
                value: 'IBM-PC, Windows',
                group: OS_ANALYSIS_GROUP,
            },
        ],
        value: 1
    },
    {
        options: [
            {
                value: 'Языки 4GL(Visual Basic, Delphi)',
                group: MEANS_ANALYSIS_GROUP,
            },
            {
                value: 'IBM-PC, Windows',
                group: OS_ANALYSIS_GROUP,
            },
        ],
        value: 0.8
    },
    {
        options: [
            {
                value: 'Системы программирования на основе СУБД типа Foxpro',
                group: MEANS_ANALYSIS_GROUP,
            },
            {
                value: 'IBM-PC, Windows',
                group: OS_ANALYSIS_GROUP,
            },
        ],
        value: 0.45
    },
]