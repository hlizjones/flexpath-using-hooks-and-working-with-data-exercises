import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { SquareCalculator } from "./components/SquareCalculator";
import DataFetcher from "./components/DataFetcher";
import ErrorBoundary from "./components/ErrorBoundary";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/pages/UserProfile";
import NotFound from "./components/pages/NotFound";
import NavigationButton from "./components/NavigationButton";
import SimpleForm from "./components/SimpleForm";
import EventLogger from "./components/EventLogger";
import AsyncDataFetcher from "./components/AsyncDataFetcher";
import EnhancedDataFetcher from "./components/EnhancedDataFetcher";
import CallbackDemo from "./components/CallbackDemo";
import MemoizationDemo from "./components/MemoizationDemo";
import CustomHookDemo from "./components/CustomHookDemo";
import ReducerCounter from "./components/ReducerCounter";
import DebouncedInput from "./components/DebouncedInput";
import ThrottledScrollLogger from "./components/THrottledScrollLogger";
import FragmentExample from "./components/FragmentExample";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "} 
        <Link to="/user/1">User 1</Link> |{" "}
        <Link to="/form">Form</Link> |{" "}
        <Link to="/event">Event</Link> |{" "}
        <Link to ="/post/random">Random Post</Link> |{" "}
        <Link to="/post/3">Post 3</Link> |{" "}
        <Link to="/post/5">Post 5</Link> |{" "}
        <Link to="/callback">Callback</Link> |{" "}
        <Link to="/memo">Memo</Link> |{" "}
        <Link to="/reducer">Reducer</Link> |{" "}
        <Link to="/debounce">Debounce</Link> |{" "}
        <Link to="/scroll">Scroll Logger</Link> |{" "}
        <Link to="/quote">Quote</Link>
        </nav>
        <hr/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/user/:userId" element={<UserProfile/>}/>
          <Route path="/form" element={<SimpleForm/>}/>
          <Route path="/event" element={<EventLogger/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/post/random" element={<AsyncDataFetcher/>}/>
          <Route path="/post/3" element={<CustomHookDemo/>}/>
          <Route path="/post/5" element={<EnhancedDataFetcher/>}/>
          <Route path="/callback" element={<CallbackDemo/>}/>
          <Route path="/memo" element={<MemoizationDemo/>}/>
          <Route path="/reducer" element={<ReducerCounter/>}/>
          <Route path="/debounce" element={<DebouncedInput/>}/>
          <Route path="/scroll" element={<ThrottledScrollLogger/>}/>
          <Route path="/quote" element={<FragmentExample/>}/>
        </Routes>
      {/* <Counter />
      <SquareCalculator />
      <ErrorBoundary>
        <DataFetcher />
      </ErrorBoundary> */}
      <NavigationButton/>
    </div>
  )
}

export default App;
