// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react'

import { Router, Scene } from 'react-native-router-flux'

import BasePage from './src/components/BasePage'
import ShopDetailPage from './src/components/ShopDetailPage'
import PhotoGalleryPage from './src/components/PhotoGalleryPage'

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="BaseContents" initial={true} component={BasePage} hideNavBar={true} />
                <Scene key="ShopDetailContents" component={ShopDetailPage} hideNavBar={true} />
                <Scene key="PhotoGalleryContents" component={PhotoGalleryPage} hideNavBar={true} />
            </Scene>
        </Router>
    )
}

export default App