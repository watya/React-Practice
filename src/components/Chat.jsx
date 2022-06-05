import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function AlignItems(props) {
  //質問と回答でアイコンを左右分けする
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem>
        <ListItemAvatar className={classes}>
        {/* if文 */}
        {isQuestion ? (
            <Avatar
            alt="icon"
            src="https://stat.ameba.jp/user_images/20120215/06/tomoe0511/4e/4e/j/t02000445_0200044511795273064.jpg?caw=800"
            />
        ) : (
            <Avatar
            alt="icon"
            src="https://raw.githubusercontent.com/deatiger/chatbot-demo/develop/src/assets/img/no-profile.png"
            />
        )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
    );
}

// const Chat =()=>{

// }

// export default Chat
