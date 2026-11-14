
import { Link } from "expo-router";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#0785D1"
        barStyle="light-content"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>‹</Text>
        <Text style={styles.headerTitle}>Start guide</Text>
      </View>

      <ScrollView style={styles.content}>

        {/* Save Screenshots Card */}
        <View style={styles.card}>

          <View style={styles.logoContainer}>

            <Image
              source={require("../../assets/images/snapchat-logo.jpg")}
              style={styles.logoIcon}
              resizeMode="contain"
            />

            <Image
              source={require("../../assets/images/instagram-logo.jpg")}
              style={styles.logoIcon}
              resizeMode="contain"
            />

          </View>

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

        {/* Manage Images Card */}
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

        {/* FAQ Card */}
        <Link href="/faq" asChild>
          <Pressable style={styles.faqCard}>

            <Text style={styles.faqIcon}>?</Text>

            <View style={styles.cardText}>

              <Text style={styles.cardTitle}>
                Frequently Asked Questions
              </Text>

              <Text style={styles.description}>
                How does it work?{"\n"}
                Where are the files saved?{"\n"}
                How to recover deleted files?
              </Text>

              <Text style={styles.faqButton}>
                View FAQs →
              </Text>

            </View>

          </Pressable>
        </Link>

        {/* Feedback Card */}
        <Link href="/feedback" asChild>
          <Pressable style={styles.feedbackCard}>

            <Text style={styles.feedbackIcon}>💬</Text>

            <View style={styles.cardText}>

              <Text style={styles.cardTitle}>
                Feedback
              </Text>

              <Text style={styles.description}>
                Share your experience and help us
                improve the app.
              </Text>

              <Text style={styles.faqButton}>
                Give Feedback →
              </Text>

            </View>

          </Pressable>
        </Link>

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

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  logoIcon: {
    width: 45,
    height: 45,
    marginRight: 5,
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

  faqButton: {
    color: "#0785D1",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
  },

  feedbackCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    elevation: 3,
    minHeight: 150,
    marginBottom: 20,
  },

  feedbackIcon: {
    fontSize: 45,
    marginRight: 20,
  },

});

export default Index;
