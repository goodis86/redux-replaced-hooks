import React, { useState } from "react";

// created a react context object!

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {}
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

const toggleFav = productId => {
    setProductsList(currentProdList => {
        const prodIndex = currentProdList.findIndex(
            p => p.id === productId
          );
          const newFavStatus = !currentProdList[prodIndex].isFavorite;
          const updatedProducts = [...currentProdList];
          updatedProducts[prodIndex] = {
            ...currentProdList[prodIndex],
            isFavorite: newFavStatus
          };
        return updatedProducts;
    });
}

  return (
    <ProductsContext.Provider value={{products: productsList, toggleFav: toggleFav}}>
      {props.children}
    </ProductsContext.Provider>
  );
};
// context API is good for elements that are changing rarely...expmls: theme, authentication...
// something that is not rerendered with high frequency..
// in our basic project here changing the favourite product is not the best idea to implement using 
// context API...it's arguable


// CONTEXT API IS GOOD FOR CHUNKS OF STATE WHICH OCCURS WITH LOW FREQUENCY...
//it does rerender all it's children and has no way to manage rendering the smart way...