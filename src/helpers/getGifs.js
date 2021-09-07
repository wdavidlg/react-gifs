

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=QnjApP3YIf3tB5xEIs9qPsxuvHm1ia4P`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map((item) => {
        return ({
            id: item.id,
            title: item.title,
            url: item.images.downsized_medium.url
        });
    });
    
    return gifs;
}