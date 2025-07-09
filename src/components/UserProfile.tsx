import React from "react";

export type userProfile = {
  map(arg0: (userProfile: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
  contactInfo: any;
  location: any;
  userName: string;
  userDescription: string;
  email: string;
  phone: number;
  city: string;
  country: string;
  address: string;
  interests: any;
  openForWork: boolean;
  protoUrl: boolean;
};
       
        export const userProfile: userProfile = {
        userName: 'Дэн', // обязательное свойство
        protoUrl: null, // необязательное свойство
        userDescription: 'Любитель React и фронтенд разработки', // обязательное свойство
        openForWork: true, // необязательное свойство
        contactInfo: {
          // обязательное свойство
          email: 'abramov@example.com', // обязательное свойство
          phone: '+1234567890', // необязательное свойство
        },

        location: {
          // необязательное свойство
          city: 'Москва', // обязательное свойство
          country: 'Россия', // обязательное свойство
          address: 'Большая полянка 44', // необязательное свойство
        },

        interests: ['программирование', 'путешествия', 'фотография'], // необязательное свойство
      };
      


export default userProfile;