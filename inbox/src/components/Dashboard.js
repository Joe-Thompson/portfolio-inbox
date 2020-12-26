import React, {useEffect, useState } from 'react';
import axios from 'axios';
import dummy_messages from '../dummy_messages.json';


function Dashboard() {

    const [messages, setMessages] = useState(dummy_messages)

    useEffect(() => {
        axios.get('https://portfolio-thompson.herokuapp.com/message')
            .then(res => {
                console.log(res.data)
                setMessages(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    },[])

    if (!messages) return <p>Loading</p>
    else
    return (
        <div className='dashboard_container'>
            <h1 className='main_title'>Messages</h1>
            {messages.map((arr, index) => {
                return (
                <div key={index} className='message_container'>
                    <p className='title'>Email:</p>
                    <p className='info'>{arr.email}</p>
                    <p className='title'>Subject:</p>
                    <p className='info'>{arr.subject}</p>
                    <p className='title'>Message:</p>
                    <p className='info'>{arr.message}</p>
                    <button>Delete</button>
                </div>
                )
            })}
        </div>
    )
}

export default Dashboard;