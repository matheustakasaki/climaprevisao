export interface IWeather {

	main: {
		temp_min: number;
		temp: number;
		temp_max: number;
	};
	name: string;
	weather: [{ description: string }];

}
