import {StackScreenProps} from '@react-navigation/stack';

export enum RootStackRoutes {
  LOGIN = 'LOGIN',
  TABS_HOME = 'TABS_HOME',
}

export type RootStackParamList = {
  [RootStackRoutes.LOGIN]: undefined;
  [RootStackRoutes.TABS_HOME]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
