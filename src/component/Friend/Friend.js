import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) =>{
        history.push(`/friend/${friendId}`)
    }

    const friendsStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={friendsStyle}>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            {/* <Link to={`/friend/${id}`}> Show detail of {id}</Link> */}
                {/* or */}
                {/* <button>Show detail of {id}</button>     */}
                {/* or */}
                {/* <div>
                    <h4>Show detail of {id}</h4>
                    <p>Click Me</p>
                </div> */}
                {/* or */}
                <button onClick={() => handleClick(id)}>Click Me</button>
            
        </div>
    );
};

export default Friend;