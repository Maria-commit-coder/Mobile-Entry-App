import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,} from 'react-native';
import { Card } from 'react-native-paper';

export default class OrderHistoryComponent extends Component {
  render() {
    return (
      <View style={styles.container}>      

        <View style={styles.top}>
        <ScrollView>

          {/* card 1 */}
          <Card style={styles.card}>
            <Card.Content>

            <View style={{flexDirection:'row',}}>
              {/* order number */}
              <Text style={styles.textstyle}>Order Number: </Text>
              <Text>{this.props.Order_Number}</Text>
              {/* price */}
              <Text style={{marginLeft:'32%',fontWeight:'bold',fontSize:15,}}>Price: </Text>
              <Text>{this.props.Price}</Text>

              </View>
              {/* event name */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Event Name: </Text>
              <Text>{this.props.Event_Name}</Text>
              </View>

              {/* order date */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Order Date: </Text>
              <Text>{this.props.Order_Date}</Text>
              </View>

              {/* view details button */}
              <View style={{marginLeft:'63%',}}>
              <TouchableOpacity onPress={this.props.navigatetoOrderDetail}>
                <Text style={styles.VDButton}>
                  View Details
                </Text>
              </TouchableOpacity>
              </View>

            </Card.Content>
        </Card>
          

          {/* card 2 */}
          <Card style={styles.card}>
            <Card.Content>

              <View style={{flexDirection:'row',}}>
              {/* order number */}
              <Text style={styles.textstyle}>Order Number: </Text>
              <Text>{this.props.Order_Number}</Text>
              {/* price */}
              <Text style={{marginLeft:'32%',fontWeight:'bold',fontSize:15,}}>Price: </Text>
              <Text>{this.props.Price}</Text>

              </View>
              {/* event name */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Event Name: </Text>
              <Text>{this.props.Event_Name}</Text>
              </View>

              {/* order date */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Order Date: </Text>
              <Text>{this.props.Order_Date}</Text>
              </View>

              {/* view details button */}
              <View style={{marginLeft:'63%',}}>
              <TouchableOpacity onPress={this.props.navigatetoOrderDetail}>
                <Text style={styles.VDButton}>
                  View Details
                </Text>
              </TouchableOpacity>
              </View>

            </Card.Content>

          </Card>

          {/* card 3 */}
          <Card style={styles.card}>
            <Card.Content>

              <View style={{flexDirection:'row',}}>
              {/* order number */}
              <Text style={styles.textstyle}>Order Number: </Text>
              <Text>{this.props.Order_Number}</Text>
              {/* price */}
              <Text style={{marginLeft:'32%',fontWeight:'bold',fontSize:15,}}>Price: </Text>
              <Text>{this.props.Price}</Text>

              </View>
              {/* event name */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Event Name: </Text>
              <Text>{this.props.Event_Name}</Text>
              </View>

              {/* order date */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Order Date: </Text>
              <Text>{this.props.Order_Date}</Text>
              </View>

              {/* view details button */}
              <View style={{marginLeft:'63%',}}>
              <TouchableOpacity onPress={this.props.navigatetoOrderDetail}>
                <Text style={styles.VDButton}>
                  View Details
                </Text>
              </TouchableOpacity>
              </View>

            </Card.Content>

          </Card>

          {/* card 4 */}
          <Card style={styles.card}>
            <Card.Content>

              <View style={{flexDirection:'row',}}>
              {/* order number */}
              <Text style={styles.textstyle}>Order Number: </Text>
              <Text>{this.props.Order_Number}</Text>
              {/* price */}
              <Text style={{marginLeft:'32%',fontWeight:'bold',fontSize:15,}}>Price: </Text>
              <Text>{this.props.Price}</Text>

              </View>
              {/* event name */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Event Name: </Text>
              <Text>{this.props.Event_Name}</Text>
              </View>

              {/* order date */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Order Date: </Text>
              <Text>{this.props.Order_Date}</Text>
              </View>

              {/* view details button */}
              <View style={{marginLeft:'63%',}}>
              <TouchableOpacity onPress={this.props.navigatetoOrderDetail}>
                <Text style={styles.VDButton}>
                  View Details
                </Text>
              </TouchableOpacity>
              </View>

            </Card.Content>

          </Card>

          {/* card 5 */}
          <Card style={styles.card}>
            <Card.Content>

              <View style={{flexDirection:'row',}}>
              {/* order number */}
              <Text style={styles.textstyle}>Order Number: </Text>
              <Text>{this.props.Order_Number}</Text>
              {/* price */}
              <Text style={{marginLeft:'32%',fontWeight:'bold',fontSize:15,}}>Price: </Text>
              <Text>{this.props.Price}</Text>

              </View>
              {/* event name */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Event Name: </Text>
              <Text>{this.props.Event_Name}</Text>
              </View>

              {/* order date */}
              <View style={{flexDirection: 'row',}}>
              <Text style={styles.textstyle}>Order Date: </Text>
              <Text>{this.props.Order_Date}</Text>
              </View>

              {/* view details button */}
              <View style={{marginLeft:'63%',}}>
              <TouchableOpacity onPress={this.props.navigatetoOrderDetail}>
                <Text style={styles.VDButton}>
                  View Details
                </Text>
              </TouchableOpacity>
              </View>

            </Card.Content>

          </Card>
          </ScrollView>
        </View>

        {/* <View style={styles.top}> 

            <View style={{alignItems:'center',}}>

                <Image style={styles.logo} source={require('./src/Assets/Images/cart.png')}>

                </Image>

            </View>

        </View> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(189,174,198,0.2)',
  },
  logo:{
    height:'90%',
    width:'100%',
    resizeMode:'contain',
    color:'black'
  },
  orderhistory: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginTop: '5%',
    color:'#732C7B'
  },
  top: {
    height: '100%',
  },
  card:{
    borderRadius:19,
    marginTop:'1%',
    marginBottom:'1%',
    backgroundColor:'white',
    width:'95%',
    marginLeft:'2.5%',
  },
  textstyle:{
    fontWeight:'bold',
    fontSize:15,
    marginBottom:'3%',
  },
  VDButton:{
    fontStyle:'normal',
    fontSize:18,
    fontWeight:'bold',
    color:'#732C7B'
  }
  
});