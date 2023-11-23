import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from "@react-native-firebase/dynamic-links";
import { Linking } from "react-native";
class DLService {
  buildLink = async (deepLink: string) => {
    const link = await dynamicLinks().buildShortLink(
      {
        link: `https://ltmobile.page.link/TPQKcute?deeplink=${deepLink}`,
        domainUriPrefix: "https://ltmobile.page.link",
        android: {
          packageName: "com.hcmut.ltmobile",
        },
      },
      dynamicLinks.ShortLinkType.DEFAULT
    );
    console.log("link: ", link);
    return link;
  };

  dynamicLinksListener = async () => {
    const link = await dynamicLinks().getInitialLink();
    if (link) this.handleDynamicLink(link);
  };

  handleDynamicLink = (link: FirebaseDynamicLinksTypes.DynamicLink) => {
    const navigateLink = link.url.slice(link.url.indexOf("=") + 1);
    setTimeout(() => {
      if (navigateLink) Linking.openURL(navigateLink);
    }, 2000);
  };
}
export default new DLService();
