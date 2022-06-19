import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BlogContext } from "../context/BlogContext";

export const IndexScreen: React.FC = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title={"add blog"} onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
