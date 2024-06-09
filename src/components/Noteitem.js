 import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import myImage1 from "../img/nav2.jpg";
import "./login.css";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                   
                    <img src={myImage1} className="nt-b" alt="notes img" width="50" height="50"/>
                        <h5 className="card-title arrange">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2 arrange" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2 arrange" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
