import { useEffect, useRef } from "react";

export function getSectionListData(data){
    const mocData = [];
    data.forEach((ele) => {
        isMatched = false;
        mocData.forEach((ele1) => {
        if (ele1.title == ele.category) {
            ele1.data = [
            ...ele1.data,
            {
                id: ele.id, 
                name: ele.name, 
                price: ele.price, 
                description: ele.description, 
                image: ele.image
            },
            ];
            isMatched = true;
        }
        });
        if (!isMatched) {
        mocData.push({
            title: ele.category,
            data: [{ id: ele.id, name: ele.name, price: ele.price, description: ele.description, image: ele.image}],
        });
        }
    });
    return mocData;
}

export function useUpdateEffect(effect, dependencies = []) {
    const isInitialMount = useRef(true);
  
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        return effect();
      }
    }, dependencies);
  }
  