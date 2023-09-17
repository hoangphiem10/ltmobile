import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik, FormikProps } from "formik";
import TQPKTextInput from "../../components/TextInput/TQPKTextInput";
import { signInStyles } from "./style";
import { SignInProps } from "../../navigators/Stack/StackNavigatorType";
import TPQKLoadingBtn from "../../components/LoadingButton/TPQKLoadingBtn";
import {
  ISignInRequest,
  ISignInResponse,
  IUser,
  authService,
  signInValidationSchema,
} from "../../services/auth.service";
import Toast from "react-native-toast-message";
import { useAppDispatch } from "../../redux/hooks";
import { userLoggedIn } from "../../redux/features/auth/authSlice";
import { AxiosResponse } from "axios";
import { Helper } from "../../helper/helper";
const SignIn = ({ route, navigation }: SignInProps) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: ISignInRequest) => {
    authService
      .signin(values)
      .then(async (res: AxiosResponse<ISignInResponse>) => {
        const {
          user: { _id, fullname, email },
          accessToken,
        } = res.data;
        const _userLoggedIn: IUser = {
          _id,
          fullname,
          email,
        };
        await Helper.Secure.setString("accessToken", accessToken);
        dispatch(userLoggedIn(_userLoggedIn));
        Toast.show({
          text1: "Sign in successfully",
          type: "success",
          onHide: () => navigation.navigate("Home"),
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
    <SafeAreaView style={signInStyles.container}>
      <View style={signInStyles.content}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInValidationSchema}
          onSubmit={(values: ISignInRequest, actions) => {
            handleSubmit(values);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props: FormikProps<ISignInRequest>) => {
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
                </View>
                <TPQKLoadingBtn
                  text="Sign In"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  onPress={() => handleSubmit()}
                />
              </>
            );
          }}
        </Formik>
        <View style={signInStyles.navigate}>
          <Text
            style={signInStyles.naviagteText}
            onPress={() => navigation.push("SignUp")}
          >
            Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
