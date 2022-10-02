

import { Box, Container, Flex, Grid,Image,Button, HStack, Spacer ,} from "@chakra-ui/react"
import { useEffect, useState } from "react"
// import { useState } from "react"


   
    let  hotdeals=  [
       {
         id:1,
           imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002136.jpg?ver=20.89",
           number:"5+5 Bucket",
           price:619.05,
           descrip:"Save 15% on special combo of 5pc Hot & Crispy Chicken + 5 Peri Peri Strips"
       },
       {
         id:2,
           imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002141.jpg?ver=20.89",
           number:"10 Peri Peri Leg Piece + 4 Dips",
           price:868.57,
           descrip:"Save 22% on this Leg Piece Bucket with 10 KFC Peri Peri Leg Piece with 4 dips"
       },
       {
         id:3,
           imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002100.jpg?ver=20.89",
           number:"Buddy Popcorn Nachos Meal",
           price:379.00,
           descrip:"2 Popcorn Nachos + 2 Reg Pepsi"
       },
       {
         id:4,
           imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002137.jpg?ver=20.89",
           number:"Mingles Meal",
           price:488.57,
           descrip:"21% off on-4 Wings + 2 Peri Peri Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
       },
       {
         id:11,
           imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002137.jpg?ver=20.89",
           number:"Mingles Meal",
           price:488.57,
           descrip:"21% off on-4 Wings + 2 Peri Peri Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
       },
       {
         id:12,
           imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002137.jpg?ver=20.89",
           number:"Mingles Meal",
           price:488.57,
           descrip:"21% off on-4 Wings + 2 Peri Peri Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
       },
   ]
 
  let chickenbucket= [
      {
         id:5,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002136.jpg?ver=20.89",
         number:"4pc Hot & Crispy + 2",
         price:544.76,
         descrip:"4pc Hot & Crispy + 2 Pepsi"
     },
     {
      id:6,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00002137.jpg?ver=20.89",
         number:"Mingles Meal",
         price:488.57,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     }, 
     {
      id:7,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K009.jpg?ver=20.89",
         number:"Mingles Meal",
         price:699.05,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     }, 
     {
      id:8,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00002145.jpg?ver=20.89",
         number:"Mingles Meal",
         price:699.05,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     {
      id:9,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00002146.jpg?ver=20.89",
         number:"Mingles Meal",
         price:699.05,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     {
      id:10,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00002148.jpg?ver=20.89",
         number:"Mingles Meal",
         price:389.52,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     {
      id:10,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K445.jpg?ver=20.89",
         number:"Mingles Meal",
         price:428.57,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     {
      id:11,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K008.jpg?ver=20.89",
         number:"Mingles Meal",
         price:399.05,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     {
      id:12,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K008.jpg?ver=20.89",
         number:"Mingles Meal",
         price:399.05,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     {
      id:13,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K008.jpg?ver=20.89",
         number:"Mingles Meal",
         price:399.05,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     {
      id:14,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K008.jpg?ver=20.89",
         number:"Mingles Meal",
         price:399.05,
         descrip:"Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi"
     },
     
   ]

       let hotlaunches=[
         {
            id:31,
              imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K701.jpg?ver=20.89",
              number:"Chocolate Lava Cake",
              price:99.05,
              descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
          },
          {
          id:32,
          imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00002099.jpg?ver=20.89",
          number:"Popcorn Nachos Meal (1 Popcorn Nachos+1 Regular Pepsi",
          price:189.00,
          descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
      },
      {
         id:33,
         imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00002100.jpg?ver=20.89",
         number:"Buddy Popcorn Nachos Meal( 2 Popcorn Nachos + 2 Reg Pepsi",
         price:189.00,
         descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
     },
     {
      id:34,
      imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K672.jpg?ver=20.89",
      number:"Buddy Popcorn Nachos Meal( 2 Popcorn Nachos + 2 Reg Pepsi",
      price:182.00,
      descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
  },
  {
   id:35,
   imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K672.jpg?ver=20.89",
   number:"Buddy Popcorn Nachos Meal( 2 Popcorn Nachos + 2 Reg Pepsi",
   price:182.00,
   descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
},
{
   id:36,
   imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K672.jpg?ver=20.89",
   number:"Buddy Popcorn Nachos Meal( 2 Popcorn Nachos + 2 Reg Pepsi",
   price:182.00,
   descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
},
{
   id:37,
   imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K672.jpg?ver=20.89",
   number:"Buddy Popcorn Nachos Meal( 2 Popcorn Nachos + 2 Reg Pepsi",
   price:182.00,
   descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
},
{
   id:38,
   imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K672.jpg?ver=20.89",
   number:"Buddy Popcorn Nachos Meal( 2 Popcorn Nachos + 2 Reg Pepsi",
   price:182.00,
   descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
},
{
   id:39,
   imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K672.jpg?ver=20.89",
   number:"Buddy Popcorn Nachos Meal( 2 Popcorn Nachos + 2 Reg Pepsi",
   price:182.00,
   descrip:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal"
},


       ]

       let boxmeals=[
         {
            id:41,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000992.jpg?ver=20.89",
            number:"All Chicken Box Meal",
            price:159.05,
            descrip:"Value Meal with 2 piece Hot Wings, 1 piece Hot & Crispy and Pepsi"
         },
         {
            id:42,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00001042.jpg?ver=20.89",
            number:"Popcorn Biryani Box",
            price:279.05,
            descrip:"Value Meal with 2 piece Hot Wings, 1 piece Hot & Crispy and Pepsi"
         },
         {
            id:43,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000994.jpg?ver=20.89",
            number:"Classic Zinger Box Meal",
            price:268.57,
            descrip:"Value Meal with 2 piece Hot Wings, 1 piece Hot & Crispy and Pepsi"
         },
         {
            id:44,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000995.jpg?ver=20.89",
            number:"Tandoori Zinger Box Meal",
            price:268.57,
            descrip:"Value Meal with 2 piece Hot Wings, 1 piece Hot & Crispy and Pepsi"
         },
         {
            id:45,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002150.jpg?ver=20.89",
            number:"Tandoori Zinger Box Meal",
            price:159.05,
            descrip:"1pc Hot & Crispy + 2 Peri Peri Strips + Reg Pepsi"
         },
         {
            id:46,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002150.jpg?ver=20.89",
            number:"Tandoori Zinger Box Meal",
            price:159.05,
            descrip:"1pc Hot & Crispy + 2 Peri Peri Strips + Reg Pepsi"
         },
         {
            id:47,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002150.jpg?ver=20.89",
            number:"Tandoori Zinger Box Meal",
            price:159.05,
            descrip:"1pc Hot & Crispy + 2 Peri Peri Strips + Reg Pepsi"
         },
         {
            id:48,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002150.jpg?ver=20.89",
            number:"Tandoori Zinger Box Meal",
            price:159.05,
            descrip:"1pc Hot & Crispy + 2 Peri Peri Strips + Reg Pepsi"
         },
         {
            id:49,
            imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002150.jpg?ver=20.89",
            number:"Tandoori Zinger Box Meal",
            price:159.05,
            descrip:"1pc Hot & Crispy + 2 Peri Peri Strips + Reg Pepsi"
         },

       ]

            let burgers=[
               {
                  id:51,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K492.jpg?ver=20.89",
                  number:"Tandoori Zinger Box Meal",
                  price:79.05,
                  descrip:"Value burger with a veg patty, lettuce and mayo"
               },
               {
                  id:52,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K493.jpg?ver=20.89",
                  number:"Spicy Veg Krisper",
                  price:79.05,
                  descrip:"Value burger with a veg patty, lettuce and mayo"
               },
               {
                  id:53,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K493.jpg?ver=20.89",
                  number:"Classic Chicken Krisper",
                  price:99.05,
                  descrip:"Value burger with a chicken fillet, lettuce and mayo"
               },
               {
                  id:54,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K491.jpg?ver=20.89",
                  number:"Spicy Chicken Krisper",
                  price:99.05,
                  descrip:"Value burger with a chicken fillet, lettuce and mayo"
               },
               {
                  id:55,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00001019.jpg?ver=20.89",
                  number:"Classic Veg Krisper, Fries & Pepsi combo",
                  price:99.05,
                  descrip:"Value burger with a chicken fillet, lettuce and mayo"
               },
               {
                  id:56,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K491.jpg?ver=20.89",
                  number:"Spicy Chicken Krisper",
                  price:99.05,
                  descrip:"Value burger with a chicken fillet, lettuce and mayo"
               },
               {
                  id:57,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K491.jpg?ver=20.89",
                  number:"Spicy Chicken Krisper",
                  price:99.05,
                  descrip:"Value burger with a chicken fillet, lettuce and mayo"
               },
               {
                  id:58,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K491.jpg?ver=20.89",
                  number:"Spicy Chicken Krisper",
                  price:99.05,
                  descrip:"Value burger with a chicken fillet, lettuce and mayo"
               },
            ]


            let biriyanibuckets=[

               {
                  id:51,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:52,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:53,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:54,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:55,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:56,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:57,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:58,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:59,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               {
                  id:50,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001052.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:248.57,
                  descrip:"New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi"
               },
               
            ]

            let snack=[
               {
                  id:600,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:60,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:61,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:62,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:63,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:64,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:65,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:66,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:67,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:68,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
               {
                  id:69,
                  imag:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-PR00000976.jpg?ver=20.89",
                  number:"Classic Chicken Biryani Bucket & Pepsi combo",
                  price:175.24,
                  descrip:"Our signature snack served with the new Tandoori Masala dip"
               },
            ]


            
            // localStorage.setItem("menudatas",JSON.stringify(menudata)) 
            //  const Addtocart=(item)=>{
               // //    console.log("done")
               // //    console.log(item)
               // }
               // let menuarr= JSON.parse(localStorage.getItem("menudatas"))||[]
               function Kfcmenu(){
                  const  [cart, setCart] = useState([]);
                  const addtocart=(el)=>setCart([...cart,el])
                  // menuarr.push(cart)
                  localStorage.setItem("menudatas",JSON.stringify(cart)) 
  console.log(cart)

    return(
        <>

<Container maxW='85%'  marginTop={40}   position="static"  >
        <Flex >
         <Box  h="400px" position="sticky"  top="100px" >
         <Grid gap={5}>
            <h1 style={{fontSize:"30px"}}>KFC MENU</h1>
            <h2>HOT DEALS</h2>
            <h2>CHICKEN BUCKETS</h2>
            <h2>HOT LAUNCHES</h2>
            <h2>BOX MEALS</h2>
            <h2>BURGERS</h2>
            <h2>BIRIYANI BUCKETS</h2>
            <h2>DESSERTS</h2>
            <h2>SNACK</h2>
            </Grid>
         </Box>
           <Spacer/>
         <Box  width="70%" display="grid" justifyContent="end" >


            <Box display={{display:"drid"}}>
            <h1 style={{fontSize:"25px"}} >HOT DEALS</h1>
            <br/>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              
               {
                 hotdeals.map((item)=>(<><div key={item.id} ><img src={item.imag}/>
                  <h4>{item.number}</h4> 
                  <Box>
                 <Flex>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Image>
                    <p>Non veg.Serves 2-3</p>
                    </Flex>
                 </Box>
                   <h3>&#8377;{item.price}</h3>
                   <p>{item.descrip}</p>
                   <Button onClick={() => addtocart(item)} colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button>
                   </div></>)) 
               }
               </Grid>
            </Box>
        
       
       
            <Box paddingTop={20}>
            <h1 style={{fontSize:"25px",paddingBottom:"20px"}}  >CHICKEN BUCKETS</h1>
            <br/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              
               {
                    chickenbucket.map((item)=>(<div ><div key={item.id} ><img src={item.imag}/>
                  <h4>{item.number}</h4> 
                  <Box>
                 <Flex>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Image>
                    <p>Non veg.Serves 2-3</p>
                    </Flex>
                 </Box>
                   <h3>&#8377;{item.price}</h3>
                   <p>{item.descrip}</p>
                   <br />
                   <Button onClick={() => addtocart(item)} colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button>
                   </div></div>)) 
               }
               </Grid>
            </Box>


            <Box paddingTop={20}>
            <h1 style={{fontSize:"25px",paddingBottom:"20px"}}  >HOT LAUNCHES</h1>
            <br/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              
               {
                    hotlaunches.map((item)=>(<div ><div key={item.id} ><img src={item.imag}/>
                  <h4>{item.number}</h4> 
                  <Box>
                 <Flex>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Image>
                    <p>Non veg.Serves 2-3</p>
                    </Flex>
                 </Box>
                   <h3>&#8377;{item.price}</h3>
                   <p>{item.descrip}</p>
                   <br />
                   <Button onClick={() => addtocart(item)} colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button>
                   </div></div>)) 
               }
               </Grid>
            </Box>


            
            <Box paddingTop={20}>
            <h1 style={{fontSize:"25px",paddingBottom:"20px"}}  >BOX MEALS</h1>
            <br/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              
               {
                    boxmeals.map((item)=>(<div ><div key={item.id}><img src={item.imag}/>
                  <h4>{item.number}</h4> 
                  <Box>
                 <Flex>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Image>
                    <p>Non veg</p>
                    </Flex>
                 </Box>
                   <h3>&#8377;{item.price}</h3>
                   <p>{item.descrip}</p>
                   <br />
                   <Button onClick={() => addtocart(item)} colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button>
                   </div></div>)) 
               }
               </Grid>
            </Box>
                   

            <Box paddingTop={20}>
            <h1 style={{fontSize:"25px",paddingBottom:"20px"}}  >BURGERS</h1>
            <br/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              
               {
                    burgers.map((item)=>(<div  ><div key={item.id}><img src={item.imag}/>
                  <h4>{item.number}</h4> 
                  <Box>
                 <Flex>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Image>
                    <p>Non veg</p>
                    </Flex>
                 </Box>
                   <h3>&#8377;{item.price}</h3>
                   <p>{item.descrip}</p>
                   <br />
                   <br/>
                   <Button onClick={() => addtocart(item)}  colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button>
                   </div></div>)) 
               }
               </Grid>
            </Box>



            
            <Box paddingTop={20}>
            <h1 style={{fontSize:"25px",paddingBottom:"20px"}}  >BIRYANI BUCKETS</h1>
            <br/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              
               {
                    biriyanibuckets.map((item)=>(<div  ><div key={item.id} ><img src={item.imag}/>
                  <h4>{item.number}</h4> 
                  <Box>
                 <Flex>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Image>
                    <p>Non veg</p>
                    </Flex>
                 </Box>
                   <h3>&#8377;{item.price}</h3>
                   <p>{item.descrip}</p>
                   <br />
                   <br/>
                   <Button onClick={() => addtocart(item)} colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button>
                   </div></div>)) 
               }
               </Grid>
            </Box>
                     

                     
            <Box paddingTop={20}>
            <h1 style={{fontSize:"25px",paddingBottom:"20px"}}  >SNACK</h1>
            <br/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              
               {
                    snack.map((item)=>(<div  ><div key={item.id}><img src={item.imag}/>
                  <h4>{item.number}</h4> 
                  <Box>
                 <Flex>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Image>
                    <p>Non veg</p>
                    </Flex>
                 </Box>
                   <h3>&#8377;{item.price}</h3>
                   <p>{item.descrip}</p>
                   <br />
                   <br/>
                   <Button onClick={() => addtocart(item)}  colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button>
                   </div></div>)) 
               }
               </Grid>
            </Box>


        </Box>
       
         </Flex>
         </Container>
        </>
    )
}
export{Kfcmenu}

