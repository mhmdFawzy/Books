import AddBook from "_scenes/addBook";
import BookState from "_context/bookState";
import HomeScreen from "_scenes/booklist";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// uncomment for redux
// import { Provider } from "react-redux";
// import store from "_redux/store";

const Stack = createStackNavigator();

function App() {
  return (
    // <Provider store={store}>
    <BookState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddBook" component={AddBook} options={{ title: "Add Book" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookState>
    // </Provider>
  );
}

export default App;
