import {
	 View, 
	 Text, 
	 StyleSheet,
	 Image,
	 TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeImage from '../assets/Home.png';

function HomeScreen({ navigation }) {

	return (
		<View style={styles.background}>
			<Image style={styles.image} source={HomeImage} />
			<Ionicons name='newspaper' style={styles.graphic} size={300} />
			<View style={styles.whiteBackground}>
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<View style={styles.row}>
						<Ionicons name='chevron-forward-outline' style={styles.arrow} size={40}/>
						<Text style={styles.text}>
							swipe or tap to{'\n'}access menu
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Scan')}
				>
					<Ionicons name='camera-outline' style={styles.camera} size={50}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
	background: {
		backgroundColor: '#b251db',
		height: '100%',
		width: '100%',
	},
	image: {
		width: 175,
		height: 250,
		left: 10,
		top: '13%',
		position: 'absolute',
	},
	graphic: {
		color: '#D39AEC',
		position: 'absolute',
		right: -200,
		top: '13%'
	},
	whiteBackground: {
		position: 'absolute',
		bottom: 0,
		height: '45%',
		width: '100%',
		backgroundColor: 'white',
		zIndex: 2,
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		// shadowColor: 'black',
		// shadowOpacity: 0.2,
		// shadowRadius: 25,
		padding: 15,
		paddingTop: 20,
	},
	text: {
		color: '#b251db',
		fontWeight: 'bold',
		fontSize: 21,
		alignSelf: 'center',
		left: 25,
	},
	arrow: {
		color: '#b251db',
		left: 10,
		alignSelf: 'center',
	},
	button: {
		backgroundColor: '#b251db',
		alignSelf: 'center',
		paddingVertical: 10,
		width: '90%',
		borderRadius: 15,
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowRadius: 15,
		position: 'absolute',
		zIndex: 4,
		bottom: 35
	},
	camera: {
		color: 'white',
		alignSelf: 'center',
	}
});

export default HomeScreen;