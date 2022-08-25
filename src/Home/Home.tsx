import { useFetch } from "../Hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ListsCards } from "../listCarts/ListsCards";
import Form from "../components/Form";
import "./home.css";

type deck = {
  deck_id: String;
  success: Boolean;
  shuffled: Boolean;
  remaining: Number;
};

const Home = () => {
  const {
    data: deck,
    isFatch,
    error,
  } = useFetch<deck>(`new/shuffle/?deck_count=1`);
  const [name, setName] = useState<string>("");




  return (
    <Form
      deck_id={deck?.deck_id}
      remaining={deck?.remaining}
      shuffled={deck?.shuffled}
      success={deck?.success}
      OnChange = {(a: any) => setName(a.target.value) }
      name = {name}
    />
  );
};

export default Home;
