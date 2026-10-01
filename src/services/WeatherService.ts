import type { WeatherData, GeoCity } from "../interface";
class WeatherService {

    searchCities = async (query: string): Promise<GeoCity[]> => {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=fr`,);
        if (!response.ok) throw new Error("Erreur de recherche de ville");
        const data = await response.json();
        console.log(data.results);
        return data.results ?? [];
    };

    getWeather=async(lat:number, lng:number)=>{
        try{
            const response=await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
             if (!response.ok) throw new Error("Erreur récupération");
            const data= await response.json();
            console.log(data);
            const current = data.current_weather;
            const weather: WeatherData = {
                temperature: current.temperature,
                windSpeed: current.windspeed,
                weatherCode: current.weathercode,
                updatedAt: Date.now(),
            }
            localStorage.setItem(`weather_${lat}_${lng}`, JSON.stringify(weather))
            return weather;
        }catch(err){
            console.log("Erreur récupération lagitude, longitude :", err);
        }
    }

    getCachedWeather = (lat: number, lng: number): WeatherData=> {
        const raw = localStorage.getItem(`weather_${lat}_${lng}`)
        const weather: WeatherData = JSON.parse(raw);
        return weather;
    }
}

export default new WeatherService();