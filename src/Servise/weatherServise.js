
const getWeather = async (url) => {
    const res = await fetch(url),
        some = await res.json();
    console.log(some);
    return some;
}

export default getWeather;