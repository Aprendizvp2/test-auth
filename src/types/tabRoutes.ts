import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList, RootStackScreenProps} from '@/types/stackRoutes';

export enum TabsHomeRoutes {
  BREEDS = 'BREEDS',
  NEWSPAPER = 'NEWSPAPER',
  JOURNALS = 'JOURNALS',
  EXCHANGE = 'EXCHANGE',
}

export type TabsHomeParamList = {
  [TabsHomeRoutes.BREEDS]: undefined;
  [TabsHomeRoutes.NEWSPAPER]: undefined;
  [TabsHomeRoutes.JOURNALS]: undefined;
  [TabsHomeRoutes.EXCHANGE]: undefined;
};

export type TabsHomeScreenProps<T extends keyof TabsHomeParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsHomeParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
