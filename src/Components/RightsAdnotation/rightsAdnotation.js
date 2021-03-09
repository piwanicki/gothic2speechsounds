import React from "react";
import classes from './rightsAdnotation.module.scss';

const rightsAdnotation = props => {
  return (
    <div className={classes.rightsAdnotation}>
        Autorem oraz właścicielem praw autorskich polonizacji jest CD Projekt. W
        aplikacji jedynie udostępnione zostały próbki dzwiękowe do posłuchania wypakowane bezpośrednio z plików gry.
    </div>
  );
};

export default rightsAdnotation;
