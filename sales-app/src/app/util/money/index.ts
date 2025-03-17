
export const convertToBigDecimal = (value ) : number => {

    if(!value){
        return 0
    }
    return value.replace(".","").replace(",",".")
}
export const formatReal = (value: string): string => {
    if (!value) return '0,00';

    const cleanValue = value.replace(/\D/g, '');

    const v = (parseInt(cleanValue) / 100).toFixed(2).split('.');

    const r = v[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${r},${v[1]}`;
};
