import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';

const deviceHeight = Dimensions.get("window").height
export default class ModalPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }


    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, widht: "100%" }} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: "100%"}}>
                {view}
            </TouchableWithoutFeedback>
        )
        
    }

    render() {
        let { show } = this.state
        const {onTouchOutSide} = this.props
        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}>
                <View style={{ flex: 1, backgroundColor: "#0000000AA", justifyContent: "flex-end" }}>
                    {this.renderOutsideTouchable(onTouchOutSide)}
                    <View style={{ backgroundColor: "white", width: "100%", borderTopRightRadius: 8, borderTopLeftRadius: 8, paddingHorizontal: 10, maxHeight: deviceHeight * 0.4 }}>
                        <View style={styles.container}>
                            <View style={styles.menu}/>
                            <View style={styles.popword}>
                                <Text style={styles.txtword}>Absensi</Text>
                                <Feather name="bookmark" size={16} color="white" />
                            </View>
                            <View style={styles.boxword}>
                                <Text style={styles.text}> Ketidakhadiran (tanpa pemberitahuan)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 206,
        backgroundColor: "#FFFFFF",
        shadowColor: "#00000014",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1.5,
        alignContent: "center"
        
    },
    menu: {
        width: 64,
        height: 3,
        borderRadius: 12,
        backgroundColor: "#525252",
        alignSelf: "center",
        marginTop: "2%"
    },
    popword: {
        marginHorizontal: 24,
        marginTop: 35,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "#9D66C8",
        height: 49,
        shadowColor: "#506F74",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    boxword: {
        height: 89,
        marginHorizontal: 24,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: "#FFFFFF",
        shadowColor: "#506F74",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1.5,
        alignItems: "center",
        justifyContent: "center"
    },
    txtword: {
        fontWeight: "700",
        fontSize: 16,
        color: "white"
    },
    text: {
        color: "#626262A3",
        fontWeight: "400",
        fontSize: 12,
        padding: 20,
        alignSelf: "center"
    }
})