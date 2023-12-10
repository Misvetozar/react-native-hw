import { View } from 'react-native';
import Card from './components/Card';

const data = [
	{
		description: 'Какое-то описание чего-то 1',
		title: 'Коробка1',
		oldPrice: 2000,
		newPrice: 1000,
		imagePath: require('../assets/box.jpg'),
	},
	{
		description: 'Еще какое-то описание',
		title: 'Коробка2',
		oldPrice: 2500,
		newPrice: 1250,
		imagePath: require('../assets/box.jpg'),
		showLabel: true,
	},
];

export function Root() {
	return (
		<View style={{ marginHorizontal: 20, marginTop: 50 }}>
			<Card
				style={{ marginTop: 0 }}
				description={data[0].description}
				title={data[0].title}
				oldPrice={data[0].oldPrice}
				newPrice={data[0].newPrice}
				imagePath={data[0].imagePath}
				showLabel={data[0].showLabel}
			/>

			<Card
				style={{ marginTop: 30 }}
				description={data[1].description}
				title={data[1].title}
				oldPrice={data[1].oldPrice}
				newPrice={data[1].newPrice}
				imagePath={data[1].imagePath}
				showLabel={data[1].showLabel}
			/>
		</View>
	);
}
