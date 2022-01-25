import './Card.css';

const Card=(props)=>{
    const classes1 = 'card ' + props.className;
    return(
        <div className={classes1}>{props.children}</div>
    );
}
export default Card;