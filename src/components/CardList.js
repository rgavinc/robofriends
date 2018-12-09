import React from "react";
import Card from "./Card";

const CardList = ({ robots }) =>
    <div>{robots.map(({ id, name, email, username }) =>
        (
            < Card key={id}
                id={id}
                name={name}
                username={username}
                email={email}
            />
        )
    )}
    </div>


export default CardList;