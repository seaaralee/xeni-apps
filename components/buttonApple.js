import { View, TouchableOpacity, Text, Image } from "react-native";


export default function ButtonAppleAuth({navigation, props}){
    return(
        <View style={{marginTop: 12}}>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', width:327, height: 48, borderRadius: 8, borderColor: '#9D66C899', borderWidth: 1, }} >
            <View style={{flexDirection: "row", flex: 1, alignItems: 'center',  justifyContent: 'center', }}>
                    <Image source={require('../assets/apple.png')}/>
                    <Text style={{color: '#755F86', textAlign: 'center', fontSize: 14, fontWeight: '400', marginLeft: 6}}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}