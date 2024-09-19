import {useGetProductQuery, useGetProdDetailsQuery} from '@/service/slice/producSlice';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';

export const useProductDetails=()=>{
    const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
    const {
        data: product,
        isLoading,
        isSuccess,
        isError,
        error,
      } = useGetProductQuery<{
        refetch: () => void;
        data: any;
        isLoading: boolean;
        isSuccess: string;
        isError: boolean;
        error: any;
      }>('getProduct');
    return{
        product,
        isLoading,
        isSuccess,
        isError,
        error,
        navigation
    }
}