import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import useHasFocus from "../customHooks/useHasFocus";
import {
  AddCounter,
  Newcounter,
  Subcounter,
  counterData,
  deleteCounter,
} from "../features/counterSlice";
import toast from "react-hot-toast";

function Home() {
  const data = useSelector((state) => state.counter.Usercounter);
  console.log(data, "counter data");
  const [spin, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("couldBeAnything");
  const focus = useHasFocus();
  console.log(focus);
  const [change, setChange] = useState(false);
  useEffect(() => {
    (() => {
      channel.postMessage(data);
      channel.onmessage = function (e) {
        console.log(e.data, "data from channel");
      };
    })();
  }, [change === true]);

  useEffect(() => {
    (() => {
      channel.onmessage = function (e) {
        console.log(e.data, "data from channel");
        dispatch(counterData(e.data));
      };
    })();
  }, [focus === false]);

  useEffect(() => {
    (() => {
      axios
        .get(process.env.REACT_APP_SERVER_DOMAIN + "/counter")
        .then((response) => {
          if (response.data.alert && response.data.result.length > 0) {
            console.log(response.data.result);
            dispatch(counterData(response.data.result));
            setChange(true);
            setTimeout(()=>{
                setChange(false);
            },1000)
          }
        });
    })();
  }, []);

  function newCounter() {
    setSpinner(true);
    const count = {
      counter: 0,
    };
    axios
      .post(process.env.REACT_APP_SERVER_DOMAIN + "/add", count)
      .then((response) => {
        console.log(response.data);
        if (response.data.alert) {
          dispatch(Newcounter(response.data.result));
          setChange(true);
          setSpinner(false);
          setTimeout(() => {
            setChange(false);
          }, 1000);
        }
      });
  }

  function handleClickAdd(_id, counter) {
    dispatch(AddCounter(_id));
    setChange(true);
    const count = {
      _id: _id,
    };
    axios
      .patch(process.env.REACT_APP_SERVER_DOMAIN + "/increment", count)
      .then((response) => {
        if (response.data.alert) {
          setChange(false);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClickSub(_id, counter) {
    if (counter > 0) {
      dispatch(Subcounter(_id));
      setChange(true);
      const count = {
        _id: _id,
      };
      axios
        .patch(process.env.REACT_APP_SERVER_DOMAIN + "/decrement", count)
        .then((response) => {
          if (response.data.alert) {
            setChange(false);
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast("Counter cannot be Negative");
    }
  }
  function handleDelete(_id) {
    dispatch(deleteCounter(_id));
    setChange(true);
    const count = {
      _id: _id,
    };
    console.log(count);
    axios
      .delete(process.env.REACT_APP_SERVER_DOMAIN + "/delete", { data: count })
      .then((response) => {
        if (response.data.alert) {
          setChange(false);
          console.log("hello");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="main w-full  flex flex-col justify-start items-start p-10">
      <article className="flex items-center justify-start lg:gap-6 gap-3">
        {" "}
        <h1 className="font-display font-normal lg:text-4xl text-2xl ">
          Add a New Counter
        </h1>
        {spin ? (
          <Spinner className="w-14 h-14 bg-[#f5ba13] rounded-full p-5" />
        ) : (
          <AiFillPlusCircle
            size={60}
            className="fill-[#f5ba13] cursor-pointer"
            onClick={newCounter}
          ></AiFillPlusCircle>
        )}
      </article>
      <main className="w-full flex justify-start items-center flex-wrap mt-10">
        {data.map((post, index) => {
          return (
            <Card
              key={index}
              _id={post._id}
              counter={post.counter}
              onAdd={handleClickAdd}
              onSub={handleClickSub}
              ondelete={handleDelete}
            ></Card>
          );
        })}
      </main>
    </section>
  );
}

export default Home;
