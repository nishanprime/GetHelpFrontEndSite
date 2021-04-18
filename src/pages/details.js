import React, { useEffect, useState } from "react";
import Header from "../header";
import Body from "../body";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

function Details() {
  let { email } = useParams();
  const [data, setData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (email) {
      const getData = async () => {
        try {
          const response = await axios.get(
            `https://getahelp.herokuapp.com/users/${email}`
          );
          setData(response.data);
        } catch (error) {
          error.response.data?.errors?.map((msg) => alert(msg));
          history.push("/");
        }
      };

      getData();
    }
  }, [email, history]);

  return (
    <div>
      <Header />
      <Body userData={data?.user} />
    </div>
  );
}

export default Details;
