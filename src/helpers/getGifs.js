export const getGifts = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=IPbHhl3KredZhq13FZ9Feej9zhWfGC1j&q=${category}&limit=5`
    const resp = await fetch(url)
    const {data } = await resp.json();

    const gifs = data.map(img =>(
        {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }
    ))
    
    return gifs
}