import React from 'react'
import {View, Text, TextInput,StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {useForm, Controller} from 'react-hook-form'
import Fontisto from 'react-native-vector-icons/Fontisto'



const CustomInput = ({
    control, 
    name, 
    iconName,
    placeholder,
    rules = {},
    secureTextEntry}) => {
    return (
        
             <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) =>(
                <>
                <View 
                style={[
                    styles.container, 
                    {borderColor: error ? 'red' : '#db54ff' }]}> 
                    <Fontisto name={iconName} color='#ccc' size={20} style={styles.IconView} />
                <TextInput 
                name={name}
                value={value} 
                onChangeText={onChange} 
                onBlur={onBlur} 
                placeholder={placeholder}
                placeholderTextColor='#ccc'
                style={styles.input}
                secureTextEntry={secureTextEntry}
                 /> 
                 </View>
                 {error && (
                    <Text style={{color: 'red', alignSelf: 'stretch', fontSize: 13, marginTop: -10, marginBottom: -5}}>{error.message || '*Required'}</Text>
                 )}
                 </>
                 )}
             />   

        
    );
};
const styles = StyleSheet.create({
    IconView: {
        padding: 10,

    },
    container: {
       
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        width: '100%',

        borderColor: '#db54ff',
        borderWidth: 1,
        borderRadius: 15,

        paddingHorizontal: 10,
        marginVertical: 10,
        
        
        
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        
        
        
    },
})

export default CustomInput