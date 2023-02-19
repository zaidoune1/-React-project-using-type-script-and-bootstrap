
    const FormateCurrency = (value : number) => {

        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
    }

    export default FormateCurrency