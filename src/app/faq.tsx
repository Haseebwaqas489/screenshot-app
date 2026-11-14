
import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Pressable,
} from "react-native";

import { useRouter } from "expo-router";

const Faq = () => {

  const router = useRouter();

  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "How to use?",
      answer: [
        "Start capturing screen by pressing the shutter icon at the top.",
        "Grant permission to draw over other apps.",
        "Grant permission to allow capturing content of display.",
        "Save screenshot by pressing the orange shutter icon.",
        "Stop capturing using the shutter icon or notification from the status bar."
      ]
    },

    {
      question: "Which capture method to choose?",
      answer: [
        "Screen recording: The system asks for permission every time the capture starts.",
        "Accessibility service: Enable it once in system settings. The system allows only one screenshot per second."
      ]
    },

    {
      question: "Where are screenshots saved?",
      answer: [
        "You can find your saved screenshots in the app's screenshot gallery."
      ]
    },

    {
      question: "How to recover deleted files?",
      answer: [
        "Check whether your app provides a recently deleted or trash section to restore your files."
      ]
    },

    {
      question: "Privacy and Security",
      answer: [
        "The app uses the accessibility service only to take a screenshot when requested.",
        "The app never reads what you type and does not collect your data."
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#0785D1"
        barStyle="light-content"
      />


      <View style={styles.header}>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.backArrow}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>
          FAQ
        </Text>

      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.heading}>
          About Frequently Asked Questions
        </Text>

       

        {questions.map((item, index) => (

          <View style={styles.card} key={index}>

            <Pressable
              style={styles.questionRow}
              onPress={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
            >

              <Text style={styles.question}>
                {item.question}
              </Text>

              <Text style={styles.arrow}>
                {openIndex === index ? "−" : "+"}
              </Text>

            </Pressable>

        
            {openIndex === index && (

              <View style={styles.answerContainer}>

                {item.answer.map((answer, answerIndex) => (

                  <Text
                    style={styles.answer}
                    key={answerIndex}
                  >
                    {item.question === "How to use?"
                      ? `${answerIndex + 1}. ${answer}`
                      : `• ${answer}`}
                  </Text>

                ))}

              </View>

            )}

          </View>

        ))}

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
    height: 60,
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
    fontSize: 22,
    fontWeight: "600",
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  heading: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },

  questionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    flex: 1,
  },

  arrow: {
    fontSize: 25,
    color: "#0785D1",
    marginLeft: 10,
  },

  answerContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingTop: 12,
  },

  answer: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 24,
    marginBottom: 10,
  },

});

export default Faq;
