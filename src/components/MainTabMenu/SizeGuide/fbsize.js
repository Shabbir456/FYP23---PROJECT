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
const FbSize = ({ navigation }) => {
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
                alignSelf: 'center'


            }} source={require('../SizeGuide/fb.png')}

            />
            <ScrollView style={styles.container}>



                <Text style={styles.heading}>Facebook Size & Ratio Guide (+ Free Infographic!)  </Text>
                <Text style={styles.heading}>

                    ____________________________

                </Text>
                <Text style={styles.textcontent}>
                    We’re sharing every Facebook size and ratio you need to know — with a free infographic!
                    <Text style={styles.heading}>
                        ____________________________
                    </Text>
                    <Text style={styles.textcontent}>  Getting the right Facebook image size can make or break the success of your posts.

                        But with so many different sizes and ratios to remember, it can be a challenge.
                    </Text>




                </Text>
                <Image style={{
                    height: 1000,
                    width: 380,
                    alignSelf: 'center'


                }} source={require('../SizeGuide/fbimage.png')}

                />
                <Text style={styles.heading}>Understanding Facebook Image Size & Aspect Ratio</Text>
                <Text style={styles.textcontent}> When sharing photos and videos on Instagram, there are two main things to keep in mind: aspect ratio and size.</Text>
                <Image style={{
                    height: 200,
                    width: 400,
                    alignSelf: 'center',
                    alignContent: 'stretch'


                }} source={require('../SizeGuide/instaimage.png')}

                />
                <Text style={styles.textcontent}>Even though Instagram compresses your photos and videos, it’s always better to share at an optimal resolution. That way, when Instagram compresses your photo size, it won’t affect the image quality.</Text>
                <Text style={styles.heading}>Facebook Size Guide #1: Feed Photo Posts</Text>
                <Text style={styles.textcontent}>Facebook feed posts are flexible — you can upload media in almost any aspect ratio to your Feed. Facebook supports images from square to horizontal (and everything in between).
                </Text>
                <Text style={styles.heading}>Facebook Size Guide #2: Video Posts</Text>
                <Text style={styles.textcontent}>Like Facebook image posts, videos on Facebook are flexible and can be uploaded in square, vertical, or horizontal aspect ratios.</Text>
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

                <Text style={styles.textcontent}> As for size, we recommend going with 1080px by 1350px. That way, when Facebook compresses the photo, it should be displayed at around 480px by 600px.</Text>
                <Text style={styles.heading}>#3: Facebook Story Size Guide</Text>
                <Text style={styles.textcontent}>You can share pretty much anything on Instagram Stories, as long as it has a minimum dimensions of 1.91:1 and a maximum dimensions of 9:16.</Text>
                <Image style={{
                    height: 350,
                    width: 340,
                    alignSelf: 'center',
                    alignContent: 'stretch'


                }} source={require('../SizeGuide/instaimage4.png')}

                />

            </ScrollView>








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
export default FbSize;