import React from "react";
import "./NoteCard.css";
import { MenuCollapse } from "./MenuAnim.js";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

function NoteCard() {
  return (
    <div className="note-card" id="new1">
      <h1>title</h1>
      <div id="btns">
        <button className="btn" id="menu" onClick={MenuCollapse}>
          <MoreVertIcon className="btn-icon" />
        </button>
        <button className="btn-a" id="edit">
          <EditOutlinedIcon className="btn-icon" />
        </button>
        <button className="btn-a" id="star">
          <StarRoundedIcon className="btn-icon" />
        </button>
        <button className="btn-a" id="delete">
          <DeleteOutlineRoundedIcon className="btn-icon" />
        </button>
      </div>
      <p>this is note content how is it beautiful nah how are you doing</p>
      <h2>4 September, 2020 11:13am</h2>
    </div>
  );
}

export default NoteCard;
