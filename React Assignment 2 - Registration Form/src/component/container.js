import React from 'react';
function container() {
    return ( 
 <div>
    <div>
        <h2>Registration form</h2>
    </div>
    <div>
        <input type='text' placeholder='Full Name'></input>
        <input type='username' placeholder='User name'></input>
        <input type='email' placeholder='Email'></input>
        <input type='text' placeholder='Password'></input>
        <input type='text' placeholder='Address'></input>

        <input type='button'>Submit</input>
    </div>
</div>
     );
}

export default container;
