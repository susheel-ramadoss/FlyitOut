import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
export default function DrawerContent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#EAEAEA", paddingVertical: 20 }}>
                            <Image
                                source={require('./../assets/profile.png')}
                                style={{ height: 83, width: 83, borderRadius: 83 / 2 }}
                            />
                            <TouchableOpacity
                                onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
                            >
                                <Image source={require('./../assets/logo2.png')} style={{ height: 31, width: 28, marginRight: 20 }} />
                            </TouchableOpacity>
                        </View>


                    </View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image source={require('./../assets/alphabet.png')} style={{ height: 24, width: 21 }} />
                        )}
                        label="Manuals"
                        onPress={() => { props.navigation.navigate('Profile') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image source={require('./../assets/name.png')} style={{ height: 20, width: 24 }} />
                        )}
                        label="My Receivers"
                        onPress={() => { props.navigation.navigate('MyReceiverScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image source={require('./../assets/userpro_file.png')} style={{ height: 24, width: 24 }} />

                        )}
                        label="Invite"
                        onPress={() => { props.navigation.navigate('Invite') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image source={require('./../assets/label.png')} style={{ height: 24, width: 24 }} />
                        )}
                        label="Pricing"
                        onPress={() => alert("not available screen")}
                    />


                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image source={require('./../assets/hearts.png')} style={{ height: 22, width: 24 }} />
                        )}
                        label="Reviews"
                        onPress={() => props.navigation.navigate('Review')}
                    />



                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image source={require('./../assets/Group16976.png')} style={{ height: 22, width: 24 }} />
                        )}
                        label="Support"
                        onPress={() => props.navigation.navigate('Login')}
                    />

                    <View style={styles._drwer_bottom_view}>
                        <Text>
                            Pop ups
                        </Text>
                        <Text>Iocn credit</Text>
                        <Text>Payment </Text>
                        <Text>Happy Customer</Text>

                    </View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image source={require('./../assets/logout1.png')} style={{ height: 23, width: 23 }} />
                        )}
                        label="Support"
                        onPress={() => alert("not available screen")}
                    />

                </View>
            </DrawerContentScrollView>

        </View >
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        textAlign: "left",
        alignSelf: "flex-start",
        color: "#707070",
        paddingVertical: 5
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 45
    },
    section: {
        //   flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        //   marginRight: 3,
        fontSize: 20
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    _drwer_bottom_view: {
        padding: 15,
        marginTop: 30, borderBottomWidth: 1, borderColor: "#EAEAEA"
    },
    sideMenuContainer: {
        marginTop: -10,
        padding: 0,
        margin: 0,
        flex: 1,
    },
    _profile_container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e90ff',
        height: 230,
        marginBottom: 20,
        marginTop: -30,
    },

    _profile_view: {
        borderWidth: 1,
        height: 110,
        width: 110,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 50,
    },
    _copy_right: {
        fontFamily: 'SourceSansPro_Regular',
        fontSize: 8,
        marginTop: 1,
        padding: 10,
    },
    _user_name: {
        fontFamily: 'SourceSansPro_Regular',
        marginTop: 20,
        fontSize: 16,
    },
});

