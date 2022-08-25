import React, { useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const ListsCards = () => {
  const { id, name } = useParams();
  const [data, setData] = useState<any[any]>();
  const [isFatch, setIsFatch] = useState<any[any]>(true);

  const ComprandoCards = () => {
    axios
      .get(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
      .then((response) => setData(response.data))
      .finally(() => setIsFatch(false));
    // const { data, isFatch, error } = useFetch<any[any]>(`${id}/draw/?count=5 `);
    // setData(data)
  };

  useEffect(() => {
    ComprandoCards();
  }, []);

  if (isFatch) {
    return <h1> Carregando... </h1>;
  }

  console.log(data);

  return (
    <div>
      <h1 className="name">{name}</h1>
      <ul>
        {data.cards.map((cards: any, index: number) => (
          <li key={index}>
            <img src={cards.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
