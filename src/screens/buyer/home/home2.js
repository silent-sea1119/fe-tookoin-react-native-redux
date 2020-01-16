import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Search from '../../../components/search/search.js';
import styles from './home.style';

class HomeBuyer extends Component {
  render() {
    const {
      container,
      imageSlider,
      readMoreImageSlider,
      readMoreImageSliderText,
      dotslider,
      bottomImageSlider,
      scroll,
    } = styles;
    return (
      // <View style={container}>
      //   <View style={{height: '40%', backgroundColor: 'blue'}}></View>
      //   <Search />
      //   <ScrollView style={scroll}>
      //     <View style={imageSlider}>
      //       <View style={bottomImageSlider}>
      //         <TouchableOpacity style={readMoreImageSlider}>
      //           <Text style={readMoreImageSliderText}> Lihat Semuanya</Text>
      //         </TouchableOpacity>
      //       </View>
      //     </View>
      //     <View style={imageSlider}>
      //       <View style={bottomImageSlider}>
      //         <TouchableOpacity style={readMoreImageSlider}>
      //           <Text style={readMoreImageSliderText}> Lihat Semuanya</Text>
      //         </TouchableOpacity>
      //       </View>
      //     </View>
      //     <View style={imageSlider}>
      //       <View style={bottomImageSlider}>
      //         <TouchableOpacity style={readMoreImageSlider}>
      //           <Text style={readMoreImageSliderText}> Lihat Semuanya</Text>
      //         </TouchableOpacity>
      //       </View>
      //     </View>
      //     <View style={imageSlider}>
      //       <View style={bottomImageSlider}>
      //         <TouchableOpacity style={readMoreImageSlider}>
      //           <Text style={readMoreImageSliderText}> Lihat Semuanya</Text>
      //         </TouchableOpacity>
      //       </View>
      //     </View>
      //     <View style={imageSlider}>
      //       <View style={bottomImageSlider}>
      //         <TouchableOpacity style={readMoreImageSlider}>
      //           <Text style={readMoreImageSliderText}> Lihat Semuanya</Text>
      //         </TouchableOpacity>
      //       </View>
      //     </View>
      //   </ScrollView>
      //   <Search />
      // </View>
      <View
        style={{
          flex: 1,

          backgroundColor: 'red',
        }}>
        <View
          style={{
            height: '25%',
            backgroundColor: 'white',
          }}
        />
        <View
          style={{
            height: '25%',
            backgroundColor: 'purple',
          }}
        />
        <View
          style={{
            height: '50%',
            backgroundColor: 'blue',
          }}>
          <Text>TTTTT</Text>
        </View>
      </View>
    );
  }
}

export default HomeBuyer;
