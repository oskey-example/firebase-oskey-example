//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

export type OSKTAccessRight = {
    validity: 'oneTime' | 'permanent' | 'recurrent';
    recurrence?: {
        periodicity: 'daily' | 'weekly' | 'monthly';
        onWeekDays: {
            monday: boolean;
            tuesday: boolean;
            wednesday: boolean;
            thursday: boolean;
            friday: boolean;
            saturday: boolean;
            sunday: boolean;
        };
        onMonthDay: number;
    };
};
