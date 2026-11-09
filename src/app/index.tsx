
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#0785D1"
        barStyle="light-content"
      />

    
      <View style={styles.header}>
        <Text style={styles.backArrow}>‹</Text>
        <Text style={styles.headerTitle}>Start guide</Text>
      </View>

      <ScrollView style={styles.content}>

     
        <View style={styles.card}>
          <Text style={styles.cardIcon}>📸</Text>

          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>
              Save your screenshots
            </Text>

            <Text style={styles.description}>
              Save images that you capture yourself
              and keep your screenshots organized
              in one place.
            </Text>
          </View>
        </View>

       
        <View style={styles.card}>
          <Text style={styles.cardIcon}>🖼️</Text>

          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>
              Manage your images
            </Text>

            <Text style={styles.description}>
              Import images you choose, organize
              your gallery and easily find your
              saved screenshots.
            </Text>
          </View>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.faqIcon}>?</Text>

          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>FAQ</Text>

            <Text style={styles.description}>
              How does it work?{"\n"}
              Where are the files saved?{"\n"}
              How to recover deleted files?
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: 65,
    backgroundColor: "#0785D1",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  backArrow: {
    color: "white",
    fontSize: 38,
    marginRight: 25,
  },

  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },

  content: {
    padding: 15,
  },

  card: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
    minHeight: 175,
  },

  cardIcon: {
    fontSize: 45,
    marginRight: 20,
  },

  cardText: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 22,
    color: "#555",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 23,
  },

  faqCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    elevation: 3,
    minHeight: 160,
    marginBottom: 20,
  },

  faqIcon: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: "#168ED5",
    color: "white",
    fontSize: 65,
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: 20,
  },

});

export default Index;


