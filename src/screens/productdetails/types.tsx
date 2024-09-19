import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type productdetailsRouteProp = RouteProp<AppNavigationProps, 'Productdetails'>;
export type RoutesProps = {
  route: productdetailsRouteProp
};

export type StateFormProps = {
  title:string;
  decription:string;
  category:string;
  _id:string;
};
