import React from "react";
import ReduxExamples from "./ReduxExamples";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import TodoList from "./ReduxExamples/todos/TodoList";
export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }    
    return(
      <div id="wd-lab4">
        <h3>Lab 4</h3>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        <ReduxExamples/>
        <TodoList/>
      </div>
    );
  }