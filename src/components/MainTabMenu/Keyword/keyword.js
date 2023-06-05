import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getDatabase, ref, set, onValue } from "firebase/database";
import Swiper from "react-native-swiper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'




const data = [
  { label: 'Food Restaurant', value: '1' },
  { label: 'Shoes', value: '2' },
  { label: 'Garment Store', value: '3' },
  { label: 'Cafe', value: '4' },
  { label: 'Home Chef', value: '5' },
  { label: 'Real State', value: '6' },
  { label: 'Marketing Agency', value: '7' },
  { label: 'Accessories', value: '8' },
];



const Keyword = () => {
  const [Keyword, setKeyword] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [dispKeyword, setdispKeyword] = useState(false);


  const KeywordSets = () => {
    const db = getDatabase();
    set(ref(db, 'Keywords/' + 'BussinessKL1'),
      {
        Accessories: '1 fashion	[3005000], 2 mens accessories	[132800], 3	ladies belt	[19800], 4	fashion bags [17700], 5 costume necklaces	[2300], 6 fashion purses	[2300], 7 ganni scarf	[2200], 8 wholesale scarves	[1900], 9 trending accessories [1400], 10	stylish scarf	 [1300], 11 ganni scrunchie [1200], 12	fashion wallet [900], 13	Fashion accessories	[30900], 14	pinterest fashion	 [23800], 15	fashion sneakers [22700]',
        MarketingAgency: '1 marketing [823000], 2 seo [673000], 3 target ad [246000], 4 digital marketing [201000 ], 5 affiliate marketing [135000 ], 6 social media marketing [110000 ], 7 marketing strategy [110000 ], 8 email marketing [74000], 9 marketing plan [60500 ], 10 advertising agency [49500 ], 11 internet marketing [40500 ], 12 digital marketing course [40500 ], 13 e marketing [33100 ], 14 seo services [33100 ], 15 direct marketing [33100]',
        RealState: '1 home [4090000] , 2 realtor [3350000 ], 3 houses for sale [1500000] , 4 mls [1500000] , 5 houses for rent[1000000 ], 6 homes for sale [450000 ], 7 property [368000 ], 8 property for sale [301000 ], 9 homes for rent[246000], 10 land for sale [165000 ], 11 for sale by owner [165000 ], 12 condo [165000 ], 13 apartments for rent near me [165000 ], 14 mls listings [135000 ], 15 condos for sale [135000 ], 16 mls listing [135000 ], 17 commercial real estate [135000 ], 18 real estate agent [135000 ], 19 estate agents [135000 ], 20 homes for sale near me[110000 ], 21 for sale [110000 ], 22 newhome [110000 ], 23 home for sale [90500 ], 24 foreclosure [90500 ], 25 rent house [90500]',
        HomeChef: '#homechef #homecooking #foodie #foodporn #homemade #food #foodphotography #instafood #foodstagram #foodblogger #cooking #homecook #yummy #homecooked #foodlover #delicious #homemadefood #foodiesofinstagram #healthyfood #indianfood #foodgasm #dinner #tasty #chef #foodpics #cookingathome #foodies #instagood #cheflife #comfortfood',
        Cafe: '1 coffee shops [1220000] ,2coffee shops near me[550000], 3 espresso [450000],4 mocha[450000], 5 cappuccino[450000]6 coffee near me [368000], 7 green coffee [368000], 8 roast [246000], 9 coffee bean [201000], 10 coffee maker [201000], 11 coffee machines [201000], 12 espresso machine [201000], 13 costa coffee [201000], 14 latte [201000], 15 caribou coffee [135000]',
        Garments: '1 womens clothes [246000], 2 80s fashion [201000], 3 fashion designing [135000],4fashion designer [110000],5 fashion blog[110000],6 mens fashion [110000],7 fashion designer games [110000],8 fashion house [90500],9fashion show [74000],10 fashion week [74000],11 fashion tv [74000],12 new york fashion week [60500],13 fashion dresses [49500],14 fashion model [49500],15 fashion style [40500], 16 fashion magazine [40500]',
        Shoes: '1 boots [4090000],2 sneakers [673000], 3 sandals [673000], 4 jordan shoes [673000] , 5 clarks shoes [550000], 6 high heels [450000], 7 puma shoes [450000], 8 flip flops [368000], 9 shoe stores [301000], 10 slippers [301000], 11 heels [301000] , 12 basketball shoes [301000] , 13 vans shoes [301000],  14 mens shoes [246000], 15 loafers [246000], 16 sports shoes [246000] , 17 running shoes [246000], 18 air force one [246000], 19 mule [246000], 20 gucci shoes [201000], 21 reebok shoes [201000], 22 ecco shoes [201000 ], 23 womens shoes [165000] , 24 shoes for men [165000] , 25 womens boots [165000]',
        Food: '1 food [6120000], 2 food processor [246000], 3 food service [33100], 4 food and drink [22200], 5 f&b [14800], 6 food industry [12100], 7 food and beverage service [8100], 8 food & beverage [5400], 9 food processing industry [4400], 10 food and beverage manager [4400]',
      }).then(() => {
        alert("Your account has been registered.");
      })

   
  }
  const showKeyword = () => {
    const db = getDatabase();
    if (value == 1) {
      const starCountRef = ref(db, 'Keywords/' + 'BussinessKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.Food)

      })

    } if (value == 2) {

      const starCountRef = ref(db, 'Keywords/' + 'BussinessKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.Shoes)
      })

    }
    if (value == 3) {

      const starCountRef = ref(db, 'Keywords/' + 'BussinessKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.Garments)
      })

    }
    if (value == 4) {

      const starCountRef = ref(db, 'Keywords/' + 'BussinesKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.Cafe)
      })

    }
    if (value == 5) {

      const starCountRef = ref(db, 'Keywords/' + 'BussinessKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.HomeChef)
      })

    }
    if (value == 6) {

      const starCountRef = ref(db, 'Keywords/' + 'BussinessKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.RealState)
      })

    }
    if (value == 7) {

      const starCountRef = ref(db, 'Keywords/' + 'BussinessKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.MarketingAgency)
      })

    }
    if (value == 8) {

      const starCountRef = ref(db, 'Keywords/' + 'BussinessKL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispKeyword(data.Accessories)
      })

    }

                    
    
  }



  return (
    
    <View style={styles.container}>
        <View style={styles.slideContainer}>
                <Swiper autoplay height={200} horizontal={false} activeDotColor="#9D00C8">
                    <View style={styles.slide}>
                        <Image source={require('../../HomeScreen/banner3.png')}
                            resizeMode="stretch"
                            style={styles.sliderImage} />
                    </View>

                    

                </Swiper>
            </View>
            <View style={styles.categoryBtn2}>
            <View style={styles.catetogryIcon2}>
        <Text style={{ marginLeft: 70, fontSize: 30, fontStyle: 'italic', fontWeight: '900', color: '#fee500', }}>KEYWORD RESEARCH </Text>
        </View></View>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 15, }}>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#9d00c8' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          activeColor='#bbb'
          autoScroll
          containerStyle={styles.DropdownContainer}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Business' : 'Select your business'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            setKeyword(item.label);
          }}
          renderLeftIcon={() => (
            <MaterialCommunityIcons
              style={styles.icon}
              color={isFocus ? '#9d00c8' : 'black'}
              name="cellphone-key"
              size={20}
            />
          )}
        />

      </View>
      <View style={styles.inputView}>

        <TextInput
          style={styles.input}
          value={dispKeyword}
          onChangeText={text => this.setState({ value: text })}
          multiline={true}
          numberOfLines={40}
          
          editable={false} selectTextOnFocus={false}
        />
      </View>

      <View style={styles.styleLoginBtn}>
          <Button
            color="#9d00c8" //button color
            onPress={(showKeyword)}
            title="Find Now"
          />
        </View>
     
    </View>
    

  
    
  );
};

export default Keyword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#533483',
    paddingRight: 16,
    paddingLeft: 16,
    
  },
  DropdownContainer: {
    backgroundColor: '#bbb'
  },

  slideContainer: {
    height: 230,
    width: '115%',
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
},
wrapper: {},
slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
},
sliderImage: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
},
categoryBtn2: {
        
  width: '30%',
  marginHorizontal: 0,
  marginLeft: -45,
  marginTop: -40,
  marginBottom: 5,
  


},
catetogryIcon2: {
  borderWidth: 2,
  alignItems: 'flex-start',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  width: 500,
  height: 50,
  backgroundColor: '#3f0463',
  borderRadius: 10,
  borderColor: '#fee500'
  
},
  styleLoginBtn: {
    marginTop: -5,
    marginLeft: 200,
    marginRight: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },
  inputView: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
    width: '100%',
    height: '40%',

    borderColor: '#db54ff',
    borderWidth: 0,
    borderRadius: 0,
    borderBottomColor: '#9d00c8',
    borderBottomWidth: 1,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 10,
    marginVertical: -15,

  },
  input: {
    flex: 1,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#000'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    color: '#000',
    paddingTop: 90,
    position: 'absolute',
    backgroundColor: '#fff',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,

  },
  placeholderStyle: {
    fontSize: 16,
    color: '#ccc'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000'
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#ccc'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000'
  },
});