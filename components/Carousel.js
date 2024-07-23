import React from "react";
import { View } from "react-native";
import { CarouselSlider } from "react-native-carousel-image-slider";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  render() {
    return (
      <View style={{ width: "100%", flex: 1, padding: 24 }}>
        <CarouselSlider images={this.state.images} />
      </View>
    );
  }
}