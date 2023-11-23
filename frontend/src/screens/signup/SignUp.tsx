import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik, FormikProps } from "formik";
import TQPKTextInput from "../../components/TextInput/TQPKTextInput";
import { SignUpStyles } from "./style";
import { SignUpProps } from "../../navigators/Stack/StackNavigatorType";
import TPQKButton from "../../components/Button/TPQKButton";
import {
  ISignUpRequest,
  authService,
  signUpValidationSchema,
} from "../../services/auth.service";
import Toast from "react-native-toast-message";
import { Screens } from "../../constants/Screens";
const SignUp = ({ route, navigation }: SignUpProps) => {
  const handleSubmit = async (values: ISignUpRequest) => {
    authService
      .signup(values)
      .then(() => {
        Toast.show({
          text1: "Sign up successfully",
          type: "success",
          onHide: () => navigation.navigate(Screens.SIGN_IN),
        });
      })
      .catch((err) => {
        Toast.show({
          text1: err.response.data.message,
          type: "error",
        });
      });
  };
  return (
    <View style={SignUpStyles.container}>
      <View style={SignUpStyles.content}>
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={(values: ISignUpRequest, actions) => {
            handleSubmit(values);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 500);
          }}
        >
          {(props: FormikProps<ISignUpRequest>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
              handleSubmit,
            } = props;
            return (
              <>
                <View>
                  <TQPKTextInput
                    label="Full name"
                    onChangeText={handleChange("fullname")}
                    onBlur={handleBlur("fullname")}
                    value={values.fullname}
                    placeholder="Please provide your fullname"
                    error={touched.fullname && errors.fullname}
                  />
                  <TQPKTextInput
                    label="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Please provide your email"
                    error={touched.email && errors.email}
                  />
                  <TQPKTextInput
                    label="Password"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Please provide your password"
                    error={touched.password && errors.password}
                  />
                  <TQPKTextInput
                    label="Confirm Password"
                    secureTextEntry
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    placeholder="Please confirm your password"
                    error={touched.confirmPassword && errors.confirmPassword}
                  />
                </View>
                <TPQKButton
                  text="Sign Up"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  onPress={() => handleSubmit()}
                />
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default SignUp;
