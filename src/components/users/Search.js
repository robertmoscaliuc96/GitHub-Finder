import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';
import {Form,Col,Button} from 'react-bootstrap'



const Search =() => {
    const githubContext =useContext(GithubContext);
    const alertContext =useContext(AlertContext);

    const [text, setText] = useState("");

    const onChange = (e) => setText(e.target.value);

    const onSubmit =(e)=>{
        e.preventDefault();
        if(text ===""){
            alertContext.setAlert("Please enter something" , "light");
        }else {
            // pass the text to the main App.js
            githubContext.searchUsers(text);
            setText("");

        }
    }
        return (
            <Form onSubmit={onSubmit} className="mb-4">
                <Form.Row>
                        <Form.Group  as={Col}>
                            <Form.Control onChange={onChange} type="text" name="text" placeHolder="Search Users..." value={text}/>
                            <Button size="lg" block type="submit" value="Search" variant="primary">Search</Button>
                        </Form.Group>
                </Form.Row>

                    {githubContext.users.length > 0 && (
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>

                )}
            </Form>
        )
    }

export default Search;
