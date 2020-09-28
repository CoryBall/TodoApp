import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NativeRouter, Switch, Route} from "react-router-native";

import {StateProvider} from "./store";
import { COLORS } from "./utils/constants/Colors";

import Footer from "./components/footer";
import {HomeView} from "./views/HomeView";
import {TodoView} from "./views/TodoView";
import {CompletedView} from "./views/CompletedView";
import {ApolloHOC} from './utils/Apollo';



const App = () => (
    <StateProvider>
      <ApolloHOC>
        <NativeRouter>
          <SafeAreaView style={styles.body}>
            <View style={styles.content}>
              <Switch>
                <Route exact path="/" component={HomeView}/>
                <Route exact path="/todo" component={TodoView}/>
                <Route exact path="/completed" component={CompletedView}/>
              </Switch>
            </View>
          </SafeAreaView>
          <Footer/>
        </NativeRouter>
      </ApolloHOC>
    </StateProvider>
);

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.primary,
    flex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center"
  },
  content: {
    backgroundColor: COLORS.primary,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  }
});

export default App;
