import {
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  View,
} from "react-native";
import React, { useRef } from "react";
import OnboardItem, { IBoardingItem } from "../../components/Onboarding";
import { OnboardingProps } from "../../navigators/Stack/StackNavigatorType";
import { SafeAreaView } from "react-native-safe-area-context";
import { Constants } from "../../constants/constants";
import { Strings } from "../../constants/Strings";
import { Screens } from "../../constants/Screens";
const items: IBoardingItem[] = [
  {
    id: 1,
    img: Constants.Images.onboarding_1,
    title: Strings.Onboarding.Onboarding_1.title,
    description: Strings.Onboarding.Onboarding_1.description,
  },
  {
    id: 2,
    img: Constants.Images.onboarding_2,
    title: Strings.Onboarding.Onboarding_2.title,
    description: Strings.Onboarding.Onboarding_2.description,
  },
  {
    id: 3,
    img: Constants.Images.onboarding_3,
    title: Strings.Onboarding.Onboarding_3.title,
    description: Strings.Onboarding.Onboarding_3.description,
  },
];
const Onboarding = ({ route, navigation }: OnboardingProps) => {
  const { width } = Dimensions.get("window");
  const [currIndex, setIndex] = React.useState<number>(1);
  const flatListRef = useRef<any>();
  const handleGoToNext = () => {
    if (currIndex != items.length) {
      const offset = currIndex * 408;
      flatListRef && flatListRef.current.scrollToOffset({ offset });
      setIndex(currIndex + 1);
    } else {
      navigation.navigate(Screens.SIGN_IN);
    }
  };
  const handleSkip = () => {
    const lastSlideIndex = items.length;
    const offset = lastSlideIndex * (width + 20);
    flatListRef && flatListRef.current.scrollToOffset({ offset });
    setIndex(lastSlideIndex);
  };
  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setIndex(currentIndex);
  };
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => String(item.id)}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        renderItem={({ item }) => (
          <OnboardItem
            item={item}
            handleGoToNext={handleGoToNext}
            handleSkip={handleSkip}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        snapToAlignment="center"
      />
    </View>
  );
};

export default Onboarding;
