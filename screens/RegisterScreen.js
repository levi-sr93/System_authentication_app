import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import * as authAction from "../redux/actions/authAction";
import { useDispatch } from "react-redux";

const formSchema = yup.object({
  fullName: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const RegisterScreen = (navData) => {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
          onSubmit={(formValues) => {
            // console.log(formValues);
            dispatch(authAction.registerUser(formValues))
              .then(() => {
                navData.navigation.navigate("Home");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          {(props) => (
            <View style={styles.container}>
              <View style={styles.logo}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/authSystem.jpg")}
                />
              </View>
              <View>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Fullname"
                  placeholderTextColor="#fff"
                  onChangeText={props.handleChange("fullName")}
                  value={props.values.fullName}
                  onBlur={props.handleBlur("fullName")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.fullName && props.errors.fullName}
                </Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Email"
                  placeholderTextColor="#fff"
                  keyboardType="email-address"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={props.handleBlur("password")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.password && props.errors.password}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navData.navigation.navigate("Login")}
                  >
                    <Text>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 80,
    borderRadius: 15,
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "#b6bfc4",
    borderRadius: 25,
    padding: 14,
    fontSize: 14,
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: "#728289",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
  registerContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  registerText: {
    color: "#738289",
    fontSize: 16,
    marginLeft: 12,
  },
  registerButton: {
    color: "#738289",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
  },
});
export default RegisterScreen;
