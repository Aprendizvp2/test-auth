import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {StackScreenProps} from '@react-navigation/stack';

export const useActions = ({
  navigation,
}: StackScreenProps<RootStackParamList>) => {
  const handleNavigateTabs = () => {
    navigation.navigate(RootStackRoutes.TABS_HOME);
  };

  return {handleNavigateTabs};
};
