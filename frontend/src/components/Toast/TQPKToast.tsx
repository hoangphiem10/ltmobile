import Toast, {
  BaseToast,
  ErrorToast,
  BaseToastProps,
} from "react-native-toast-message";

/*
  1. Create the config
*/
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green", backgroundColor: "#C1FFD5" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        textAlign: "center",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "red", backgroundColor: "#FFCCCB" }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        textAlign: "center",
      }}
    />
  ),
};

const TQPKToast = () => {
  return <Toast config={toastConfig} autoHide={true} visibilityTime={1000} />;
};

export default TQPKToast;
