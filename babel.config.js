module.exports = function (api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src/'],
					extensions: [
						'.ts',
						'.tsx',
						'.js',
						'.json',
						'.svg',
						'.png',
						'.jpg',
						'.tff',
						'.otf',
					],
					alias: {
						icons: './assets/icons',
						images: './assets/images',
						fonts: './assets/fonts',
					},
				},
			],
		],
	};
};
