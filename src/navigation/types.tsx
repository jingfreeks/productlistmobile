export type RootNavigationProps = {
    BottomTab: AppNavigationProps;
    Product: undefined;
    Productdetails:undefined;
  };
  
  export type AppNavigationProps = {
    Product: undefined;
    Productdetails:{
      title:string;
      decription:string;
      image?:string;
      category:string;
      price:string;
      _id:string;
    };
  };
  