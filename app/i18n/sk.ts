interface Dictionary<T> {
    [T: string]: Record<string, string>;
}
type Languages<T> = {
    [P in keyof T]: Dictionary<T[P]>;
};

export const sk = {
    DetectionScreen: {
        eyesOpening: {
            title: 'Otváranie očí',
            spontaneous: 'Spontáne',
            onCall: 'Na výzvu',
            onPain: 'Na bolesť',
            none: 'Žiadne',
        },
        verbalContact: {
            title: 'Verb. kontakt',
            oriented: 'Orientovaný',
            disorientated: 'Dezorientovaný',
            inadequate: 'Neadekvatný',
            unintelligible: 'Nedzrozumiteľný',
            none: 'Žiadny',
        },
        motorSkills: {
            title: 'Motorika',
            onCall: 'Na výzvu',
            onPain: 'Na bolesť',
            untargeted: 'Necielená',
            flexia: 'Flexia',
            extension: 'Extenzia',
            none: 'Žiadna',
        },
        eyeReflexes: {
            title: 'Očné reflexy',
            photoreaction: 'Fotoreakcia',
            deviation: 'Deviácia',
            pupils: 'Zrenice (mm)',
            cornealReflex: 'Korneálny reflex',
            swimBulbs: 'Pláv. bulby',
            oculocephalicReflex: 'Okulocef. reflex',
        },
        pain: {
            title: 'Bolesť',
            sine: 'Sine',
            bearable: 'Znesiteľna',
            carping: 'Prijemná',
            tingling: 'Tangujúca',
        },
        abdomen: {
            title: 'Brucho',
            sine: 'Sine',
            soreness: 'Bolestivosť',
            resistance: 'Rezistencia',
            defence: 'Défanse',
        },
        airways: {
            title: 'Dýchacie cesty',
            passable: 'Priechodné',
            aspiration: 'Aspirácia',
            obstruction: 'Obštrukcia',
        },
        breathing: {
            title: 'Dýchanie',
            normalBreathing: 'Eupnoe',
            stopBreathing: 'Apnoe',
            shortnessOfBreath: 'Dyspnoe',
        },
        auscultationFindingBlue: {
            title: 'Auskultačný nález',
            unexplored: 'Nevyšetrené',
            physiological: 'Fyziologické',
        },
        neurologicalFinding: {
            title: 'Neurologický nález',
            inTheStandart: 'V norme',
            cramps: 'Kŕče',
            paresis: 'Paréza',
            plegia: 'Plégia',
            meningealSign: 'Mening. príznaky',
            departureStool: 'Odch. stolice',
            departureUrine: 'Odch. moča',
        },
        circulation: {
            title: 'Cirkulácia',
            regular: 'Pravid.',
            irregular: 'Nepravid.',
            full: 'Plný',
            filamentous: 'Nitkovitý',
            sine: 'Sine',
        },
        auscultationFindingPink: {
            title: 'Auskultačný nález',
            regular: 'Pravid.',
            irregular: 'Nepravid.',
            heartSounds: 'Ozvy ohr.',
            shellac: 'Šel.',
            asystole: 'Asystólia',
        },
        skin: {
            title: 'Koža',
            pink: 'Ružová',
            pale: 'Bledá',
            cyanotic: 'Cyanotická',
            capillaryLessThan2s: 'Kapil. < 2 s',
            returnMoreThan2s: 'Návrat > 2 s',
        },
    },
    SectionScreen: {
        airways: {
            title: 'Dýchacie cesty',
            sine: 'Sine',
            maneuver: 'Manéver',
            suction: 'Odsatie',
            orotube: 'Orotobus',
            oti: 'OTI',
        },
        breathing: {
            title: 'Dýchanie',
            sine: 'Sine',
            inhaled: 'Inhal. O₂,  l/min',
            upv: 'UPV',
            peep: 'PEEP,  cmH₂O',
            drainage: 'Drenáž',
        },
        circulation: {
            title: 'Cirkulácia',
            sine: 'Sine.',
            peripheralCatheter: 'Perif. katéter.',
            cvk: 'CVK',
            overpressureInf: 'Pretlak. Inf',
            infPump: 'Inf. Pumpa',
        },
        otherServices: {
            title: 'Ostatné výkony',
            sine: 'Sine.',
            coverage: 'Krytie',
            bandage: 'Obväz',
            pressureBandage: 'Tlak. Obväz',
            tourniquet: 'Škrtidlo',
            repositioning: 'Repozícia',
            splint: 'Dlaha',
            bagMattress: 'Vák. matrac',
            fixationCollar: 'Fixačný golier',
            ked: 'K. E. D.',
            rinse: 'Výplach žal.',
            complaintProbe: 'Žal. sonda',
            catheterUrine: 'Katéter moč.',
            scienceChildbirth: 'Ved. pôrodu',
        },
    },
};

export type Language = Languages<typeof sk>;
