import React from 'react'; 

const ComponentWithUncontrolledInput = () => {
        return (
            <>
                <form>
                    <label>Name:</label>
                    <input type="text" name="username" />
                </form>
            </>
        )
}

export default ComponentWithUncontrolledInput;