import { View, TouchableOpacity, Text } from "react-native";


export default function ButtonAuth(props){
    return(
        <View style={{marginTop: 24, alignItems: 'center', width: 327}}>
            <TouchableOpacity style={{backgroundColor: '#9D66C8', width: 327, height: 48, borderRadius: 8, justifyContent: 'center'}} onPress={props.nav}>
                <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 14, fontWeight: '400'}}>{props.txt}</Text>
            </TouchableOpacity>
        </View>
    )
}