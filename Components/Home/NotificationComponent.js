import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {Card,Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';



export default class NotificationComponent extends Component {
  render() {
    return (
      //parant view
      <View style={styles.container}>
        {/* CONDITION: ZERO NOTIFICATION */}
        {/* ------------------------------------------------------------------------------------------------- */}

        {/* 
            <View style={styles.top}> 

              <View style={{alignItems:'center',}}>

                <Image style={styles.logo} source={require('./src/assets/Images/bell4.png')}></Image>
                <View style={{marginTop:'-31%',alignItems:'center'}}>
                <Text style={styles.Notificationtext}>You have no notification right now.</Text>
                <Text style={styles.Notificationtext}>Come back later.</Text>
                </View>

              </View>

            </View> */}

        {/* -------------------------------------------------------------------------------------------------- */}

        {/* CONDITION:ONE OR MORE NOTIFICATION */}

        <View style={styles.top}>
          <ScrollView>
          {/* card 1 */}
          <Card style={styles.card}>
            <Card.Content>
              {/* TITLE */}
              <Text style={styles.title}>Order</Text>

              {/* ICON AND MESSGAE */}
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={27} color="black" name="ios-notifications-outline"/>
              <Text style={styles.textstyle}>order is Successful.Thank you Have a nice day</Text>
              </View>

              {/*TIME*/}
              <Text style={styles.time}>15 min</Text>
            </Card.Content>
          </Card>

          {/* card 2 */}
          <Card style={styles.card}>
            <Card.Content>
              {/* TITLE */}
              <Text style={styles.title}>Order</Text>

              {/* ICON AND MESSGAE */}
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={27} color="black" name="ios-notifications-outline"/>
              <Text style={styles.textstyle}>order is Successful.Buy more to win free event card</Text>
              </View>

              {/*TIME*/}
              <Text style={styles.time}>3 hr</Text>
            </Card.Content>
          </Card>

          {/* card 3 */}
          <Card style={styles.card}>
            <Card.Content>
              {/* TITLE */}
              <Text style={styles.title}>Order</Text>

              {/* ICON AND MESSGAE */}
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={27} color="black" name="ios-notifications-outline"/>
              <Text style={styles.textstyle}>order is Successful.Buy more to win free event card</Text>
              </View>

              {/*TIME*/}
              <Text style={styles.time}>1 Day ago</Text>
            </Card.Content>
          </Card>

          {/* card 4 */}
          <Card style={styles.card}>
            <Card.Content>
              {/* TITLE */}
              <Text style={styles.title}>Order</Text>

              {/* ICON AND MESSGAE */}
              <View style={{flexDirection:'row',alignContent: 'center',}}>
              <Icon size={27} color="black" name="ios-notifications-outline"/>
              <Text style={styles.textstyle}>order is successful</Text>
              </View>

              {/*TIME*/}
              <Text style={styles.time}>1 Day ago</Text>
            </Card.Content>
          </Card>

          {/* card 5 */}
          <Card style={styles.card}>
            <Card.Content>
              {/* TITLE */}
              <Text style={styles.title}>Order</Text>

              {/* ICON AND MESSGAE */}
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={27} color="black" name="ios-notifications-outline"/>
              <Text style={styles.textstyle}>order is successful</Text>
              </View>

              {/*TIME*/}
              <Text style={styles.time}>1 Day ago</Text>
            </Card.Content>
          </Card>

          {/* card 6 */}
          <Card style={styles.card}>
            <Card.Content>
              {/* TITLE */}
              <Text style={styles.title}>Order</Text>

              {/* ICON AND MESSGAE */}
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={27} color="black" name="ios-notifications-outline"/>
              <Text style={styles.textstyle}>order is successful</Text>
              </View>

              {/*TIME*/}
              <Text style={styles.time}>1 Day ago</Text>
            </Card.Content>
          </Card>

          </ScrollView>
        </View>

        

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(189,174,198,0.2)',
  },
  top: {
    height: '100%',
  },
  card: {
    marginTop: '1%',
    borderRadius: 19,
    backgroundColor: 'white',
    borderWidth: 2,
    borderLeftColor: '#421C52',
    borderRightColor: '#421C52',
    borderBottomColor: '#732C7B',
    borderTopColor: '#732C7B',
    marginBottom: '1%',
    width: '95%',
    marginLeft: '2.5%',
    
  },
  textstyle: {
    //fontWeight: 'bold',
    fontSize: 15,
    marginBottom: '2%',
    marginLeft:'3%'
  },
  title:{
    fontWeight:'bold',
    fontSize:17,
    marginBottom: '1%',
  },
  time:{
    opacity:0.6,
    fontSize:12,

  }
  

  
});