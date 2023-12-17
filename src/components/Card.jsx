import { Image, Text, TouchableOpacity, View } from 'react-native';
import CartIcon from '../../assets/cart-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import LabelIcon from '../../assets/new-label-icon.svg';

export default function Card({
	style,
	description = '',
	title,
	oldPrice,
	newPrice,
	imagePath,
	showLabel,
}) {
	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength - 3) + '...';
		}
		return text;
	};
	return (
		<View
			style={[
				{
					padding: 10,
					borderRadius: 10,
					flexDirection: 'row',
					backgroundColor: '#999',
					shadowColor: '#000',
					shadowOffset: {
						height: 5,
					},
					shadowOpacity: 0.3,
					shadowRadius: 5,
				},
				style,
			]}
		>
			<View>
				<Image
					source={imagePath}
					style={{ width: 80, height: 80, borderRadius: 10 }}
				/>
				{showLabel && (
					<View style={{ position: 'absolute', right: -10, top: -10 }}>
						<LabelIcon width={30} height={30} />
					</View>
				)}
			</View>
			<View style={{ marginLeft: 20, width: '68%' }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingLeft: 10,
					}}
				>
					<Text>{title}</Text>
					<TouchableOpacity>
						<HeartIcon width={20} height={20} />
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row', padding: 10 }}>
					<Text style={{ fontWeight: '700' }}> {newPrice}</Text>
					<Text style={{ textDecorationLine: 'line-through', paddingLeft: 10 }}>
						{oldPrice}
					</Text>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text>{truncateText(description, 20)}</Text>
					<TouchableOpacity style={{ flexDirection: 'row' }}>
						<Text style={{ paddingRight: 3 }}>Buy</Text>
						<CartIcon width={20} height={20} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
