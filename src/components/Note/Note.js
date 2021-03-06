import React from 'react'
import styles from './Note.module.css';

function Note(props) {
  return (
    <div
      className={styles.Note + ' edit col-md-10  col-sm-10 col-8'}
      onClick={e => props.edit(e, props.id)}
    >
      <h4 className={styles.MiniTitle}>{props.id + 1}. {props.title.substr(0, 15) || "Enter title here"} ...
      <span
          className={(props.width > 575 ? styles.Delete : styles.Show) + ' delete'}
          onClick={e => props.delete(e, props.id)}>
          X
      </span></h4>
      <p className={styles.MiniBody}>{props.body.substr(0, 30) || "Enter body here"} ...</p>
    </div>
  );
}

export default Note
