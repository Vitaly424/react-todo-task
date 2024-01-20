export const formatToRussianDate = (date: Date): string => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
};
