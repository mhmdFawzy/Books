import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { Colors } from "_styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import RedBtn from "_components/sharedComp/RedBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import bookContext from "_context/bookContext";
import { bookItem } from "./BookItem";
import styles from "./BookList.component.style";
import useFetch from "_utils/useFetch";

//uncomment for redux
// import { loadBooks } from "_redux/actions/books";
// import { useDispatch, useSelector } from "react-redux";

const BookList = ({ navigation }) => {
  const BooksContext = React.useContext(bookContext);
  const { getBooks, books } = BooksContext;
  //uncomment for redux
  // const books = useSelector(state => state.books);
  // const dispatch = useDispatch();

  const { error, loading, response } = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&&startIndex=0&&maxR",
    {}
  );
  React.useEffect(() => {
    response?.items.length >= 1 && getBooks(response?.items);
  }, [response?.items]);
  //uncomment for redux
  // React.useEffect(() => {
  //   response?.items.length >= 1 && dispatch(loadBooks(response?.items));
  // }, [response?.items]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeHeader}>
        <RedBtn
          to="AddBook"
          onPress={() => {
            navigation.navigate("AddBook");
          }}>
          <Text>Add Book</Text> <Ionicons name="add-sharp" size={16} color={Colors.WHITE} />
        </RedBtn>
      </View>
      <Text style={styles.headline}>Book List:</Text>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.RED} />
      ) : (
        <FlatList
          data={books}
          renderItem={bookItem}
          keyExtractor={item => item.id}
          columnWrapperStyle={{ justifyContent: "space-evenly", paddingHorizontal: 12 }}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};

export default BookList;
