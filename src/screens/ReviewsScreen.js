import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "../../api/yelp";
import { useNavigation } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import LeaveAppModal from "../../components/leaveAppModal";
// import { Tooltip } from "react-native-elements";

export default function ReviewsScreen(props) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.route.params.id;
  const url = reviews[0];
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(`${id}/reviews`).then(res => {
      setReviews(res.data.reviews);
    });
    setLoading(false);
  }, []);

  return (
    <View style={styles.view}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/reviewsBackground.png")}
      >
        {loading ? (
          <Text>loading</Text>
        ) : (
          <FlatList
            data={reviews}
            keyExtractor={x => x.id}
            renderItem={({ item }) => {
              return (
                <ListItem
                  leftAvatar={{
                    size: "large",
                    source: { uri: item.user.image_url }
                  }}
                  containerStyle={{
                    backgroundColor: "transparent"
                  }}
                  title={item.user.name}
                  titleStyle={{ fontSize: 15, paddingBottom: 5 }}
                  subtitle={item.text}
                  subtitleStyle={{ fontWeight: "bold", fontSize: 15 }}
                />
              );
            }}
          />
        )}
        <View style={{ flex: 6 }}>
          {!url ? null : <LeaveAppModal web={url} />}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.icon}
        >
          <FontAwesome style={{ color: "#1DA1F2" }} name="home" size={30} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "rgba(0,0,0,0.0)"
  },
  icon: {
    alignItems: "center",
    paddingBottom: 30
  }
});
