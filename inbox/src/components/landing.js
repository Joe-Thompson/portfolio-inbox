import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Landing() {

    useEffect(() => {
        axios.get('https://portfolio-thompson.herokuapp.com/message')
        .then(res => {
            console.log(res.data)

            setMessages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

    const [messages, setMessages] = useState(null);

    if (!messages) {
        return (
            <div>Loading</div>
        )
    } else {
        return (
            <div>
                {messages.map(arr => {
                    <div>
                        <p>{messages.email}</p>
                        <p>{messages.subject}</p>
                        <p>{messages.message}</p>
                    </div>
                })}
            </div>
        )
    }
}
