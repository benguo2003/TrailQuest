import { View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import { FontAwesome5 } from 'react-native-vector-icons';
import { useRoute } from '@react-navigation/native';

const Navbar = ({ navigation }) => {
  const route = useRoute();

  return (
    <View style={{ 
        bottom: 20, 
        width: '90%', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'space-around', // Distribute space evenly around the buttons
        backgroundColor: '#5d3a1a', 
        borderRadius: 70, 
        padding: 10,
        flexDirection: 'row', // Arrange the buttons in a row
      }}>          
        <AwesomeButton
            backgroundColor="#4CAF50"
            backgroundDarker="#52a934"
            backgroundActive="#7cbe2d"
            backgroundShadow="#3f8228"
            backgroundProgress="#89cf35"
            borderColor="#5bbd3a"
            springRelease={true}
            onPress={() => navigation.navigate('Home')}
            borderRadius={15}
            width={60} // Reduced button width
            height={50} // Reduced button height
        >
          <FontAwesome5 name="home" size={20} color="#fff" />
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="#4CAF50"
          backgroundDarker="#52a934"
          backgroundActive="#7cbe2d"
          backgroundShadow="#3f8228"
          backgroundProgress="#89cf35"
          borderColor="#5bbd3a"
          springRelease={true}
          onPress={() => navigation.navigate('Quests')}
          borderRadius={15}
          width={60} // Reduced button width
          height={50} // Reduced button height
        >
          <FontAwesome5 name="scroll" size={20} color="#fff" />
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="#4CAF50"
          backgroundDarker="#52a934"
          backgroundActive="#7cbe2d"
          backgroundShadow="#3f8228"
          backgroundProgress="#89cf35"
          borderColor="#5bbd3a"
          springRelease={true}
          onPress={() => navigation.navigate('Profile')}
          borderRadius={15}
          width={60} // Reduced button width
          height={50} // Reduced button height
        >
          <FontAwesome5 name="user-edit" size={20} color="#fff" />
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="#4CAF50"
          backgroundDarker="#52a934"
          backgroundActive="#7cbe2d"
          backgroundShadow="#3f8228"
          backgroundProgress="#89cf35"
          borderColor="#5bbd3a"
          springRelease={true}
          onPress={() => navigation.navigate('Friends')}
          borderRadius={15}
          width={60} // Reduced button width
          height={50} // Reduced button height
        >
          <FontAwesome5 name="user-friends" size={20} color="#fff" />
        </AwesomeButton>
      </View>
  );
};

export default Navbar;