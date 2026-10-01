export interface GeoCity { 
    id :number, 
    name : string, 
    latitude :number, 
    longitude:number, 
    country :string, 
    country_code:string,
}

export interface WeatherData { 
    temperature :number, 
    windSpeed :number, 
    weatherCode :number,
    updatedAt:number
}

export interface Trip { 
    id? :string , 
    cityName :string,
    latitude :number, 
    longitude :number, 
    country : string, 
    startDate :string, 
    notes :string, 
    createdAt :number
}