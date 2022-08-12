import { useEffect, useState } from "react";

import fa from "../../src/loc/fa";
import en from "../../src/loc/en";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/counterSlice";
import { fetchUsers } from "../../redux/usersSlice";
import store from "../../redux/store";

const MyTest = (props: any) => {
  const [lang, setLang] = useState("en");

  console.log(props.data.data.users);
  return (
    <>
      {props.data.data.users.map((data: any, index: number) => (
        <p key={index}>{data.name}</p>
      ))}
    </>
  );
};

export default MyTest;
