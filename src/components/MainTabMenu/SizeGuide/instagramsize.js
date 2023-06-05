import React from "react";
import { View, Text, StyleSheet, Button, StatusBar, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { ScrollView } from "react-native";
import Logo from '../SizeGuide/sizeguide.png'
const InstagramSize = ({ navigation }) => {
    const onPressBusiness = () => {

        navigation.navigate("UserSignUp")
    }
    const onPressMarketer = () => {
        navigation.navigate("MarketerSignUp")

    }

    return (



        <ScrollView style={styles.container}>

            <Image style={{
                height: 100,
                width: 380,
                alignSelf: 'center',



            }} source={require('../SizeGuide/ig-logo.png')}

            />
            <Text style={styles.heading}>Your Guide to Instagram Photo Sizes in 2022    </Text>
            <Text style={styles.heading}>

                ____________________________

            </Text>
            <Text style={styles.textcontent}>
                Every Instagram image (and video) size you ever wanted, all in one handy go-to guide!
                <Text style={styles.heading}>
                    ____________________________
                </Text>
                <Text style={styles.textcontent}>  From feed posts to Instagram Videos and Reels, knowing the best Instagram image size and ratio is no mean feat.

                    In this handy guide, you’ll find all the Instagram dimensions you need to create perfect images and videos.
                </Text>



            </Text>
            <Text style={styles.heading}>Understanding Instagram Image Size & Aspect Ratio</Text>
            <Text style={styles.textcontent}> When sharing photos and videos on Instagram, there are two main things to keep in mind: aspect ratio and size.</Text>
            <Image style={{
                height: 200,
                width: 400,
                alignSelf: 'center',
                alignContent: 'stretch'


            }} source={require('../SizeGuide/instaimage.png')}

            />
            <Text style={styles.textcontent}>Even though Instagram compresses your photos and videos, it’s always better to share at an optimal resolution. That way, when Instagram compresses your photo size, it won’t affect the image quality.</Text>
            <Text style={styles.heading}>#1: Instagram Feed Post Size Guide</Text>
            <Text style={styles.textcontent}>Once upon a time, Instagram photo and video sizes were limited to the simple square, but now (almost) anything goes.

                Instagram post size dimensions now range from 16:9 all the way to 4:5!
            </Text>
            <Text style={styles.heading}>Horizontal Posts (16:9)</Text>
            <Text style={styles.textcontent}>While Instagram recommends a post ratio of 1.91:1, you can actually go as far as 16:9.</Text>
            <Image style={{
                height: 400,
                width: 350,
                alignSelf: 'center',
                alignContent: 'stretch'


            }} source={require('../SizeGuide/instaimage2.png')}

            />
            <Text style={styles.textcontent}>In any case, we recommend you make the height of your horizontal photo at least 1080px. That way, when Instagram compresses the file, the quality should remain pretty high.</Text>

            <Text style={styles.heading}>Square Posts (1:1)</Text>
            <Text style={styles.textcontent}>Although Instagram supports horizontal and vertical photos, square posts continue to be a popular choice on Instagram – especially as the Instagram profile grid crops content to a 1:1 ratio.</Text>
            <Text style={styles.textcontent}>We recommend making your square photos 1080px by 1080px in size. That way, when Instagram compresses the file, the version will still be high quality.</Text>
            <Image style={{
                height: 450,
                width: 320,
                alignSelf: 'center',
                alignContent: 'stretch'


            }} source={require('../SizeGuide/instaimage3.png')}

            />

            <Text style={styles.textcontent}> As for size, we recommend going with 1080px by 1350px. That way, when Instagram compresses the photo, it should be displayed at around 480px by 600px.</Text>
            <Text style={styles.heading}>#3: Instagram Story Size Guide</Text>
            <Text style={styles.textcontent}>You can share pretty much anything on Instagram Stories, as long as it has a minimum dimensions of 1.91:1 and a maximum dimensions of 9:16.</Text>
            <Image style={{
                height: 350,
                width: 340,
                alignSelf: 'center',
                alignContent: 'stretch'


            }} source={require('../SizeGuide/instaimage4.png')}

            />

        </ScrollView>

    )
}

const styles = StyleSheet.create({

    container: {
        
        

        backgroundColor: '#fff'

    },
    heading: {
        fontSize: 25,
        paddingLeft: 15,
        fontWeight: 'bold',
        paddingRight: 4,
        color: '#818380'
    },
    textcontent: {
        padding: 15,
        fontSize: 16,
        color: '#818380'

    }




})
export default InstagramSize;