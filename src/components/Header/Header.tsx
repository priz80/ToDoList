import classes from '../Header/Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.container}>
        <a href="/" className={classes.link}>ToDo</a>
      </div>
    </header>
  );
};
