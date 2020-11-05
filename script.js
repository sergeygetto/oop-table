const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        country: 'Germany',
        capital: 'Berlin'
    },
    {
        company: 'Centro comercial Moctezuma',
        country: 'Mexico',
        capital: 'Mexico'
    },
    {
        company: 'Sberbank',
        country: 'Russia',
        capital: 'Moskow'
    },
    {
        company: 'Island Trading',
        country: 'UK',
        capital: 'London'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        country: 'Canada',
        capital: 'Ottawa'
    },
    {
        company: 'Amazon Inc',
        country: 'Usa',
        capital: 'Washington'
    }
];

let gridView = new GridView();
const data = {
    header: 'Table',
    headerClass: ['header', 'site-header'],
    attribute: {
        'company': {
            'label': 'Компания',
            'src': 'html',
        },
        'country': {
            'label': 'Страна',
        },
        'capital': {
            'label': 'Столица',
            // 'value': (data) => {
            //     if (data['country'] === 'canada') {
            //         return data['capital'] + 'Hello '
            //     }
            //     return data['capital'];
            //}
        }
    },
    data: dataExample
}

gridView.render(data);
console.log(gridView);