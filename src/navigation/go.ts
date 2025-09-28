import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

export type NavOf<S extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, S>;

/** Permite navegar sem exigir `undefined` em rotas sem params */
export function goFactory<N extends NavOf<any>>(navigation: N) {
  return function go<T extends keyof RootStackParamList>(
    screen: T,
    ...args: RootStackParamList[T] extends undefined ? [] : [RootStackParamList[T]]
  ) {
    // @ts-expect-error cast controlado para casar a sobrecarga
    navigation.navigate(screen, ...(args as [any]));
  };
}
