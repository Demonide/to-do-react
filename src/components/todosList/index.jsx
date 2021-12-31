import React, { useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const TodosList = (props) => {

    const films = useSelector(state => state.todoList);
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const renderFilms = useMemo(() => {
        return films.map((el, index) => {
            return (<div key={index} >{el.title}</div>)
        })
    }, [films])

    return (
        <>
        {renderFilms}
        </>
    )
}

export default TodosList;