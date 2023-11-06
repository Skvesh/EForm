export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomColor(type: 'rgb' | 'hsl'): string {
    switch (type) {
        case 'hsl':
            const h = getRandomNumber(0, 360);
            const s = getRandomNumber(0, 100);
            const l = getRandomNumber(0, 100);
            return `hsl(${h}deg, ${s}%, ${l}%)`;
        case 'rgb':
            return '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
        default:
            return 'Type not recognized!';
    }
}

interface ITimeFormatOptions {
    year?: 'numeric';
    month?: 'numeric';
    day?: 'numeric';
    hour?: 'numeric';
    minute?: 'numeric';
    second?: 'numeric';
}

export function getCurrentTime(selectedOptions?: (keyof ITimeFormatOptions)[]): string {
    const now = new Date();
    let options: Intl.DateTimeFormatOptions;
    if (selectedOptions && selectedOptions.length > 0) {
        options = selectedOptions.reduce((acc, curr) => {
            acc[curr] = 'numeric';
            return acc;
        }, {} as ITimeFormatOptions);
        options.hour12 = false;
        options.localeMatcher = 'best fit';
    } else {
        options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
            localeMatcher: 'best fit',
        };
    }

    return now.toLocaleTimeString([], options).replace(/,.*/, '');
}
