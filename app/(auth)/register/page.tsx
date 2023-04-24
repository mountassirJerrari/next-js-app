'use client';
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Login() {

    let [input, setInput] = useState({
        username: '',
        pwd1: '',
        pwd2: ''
    })
    let [message, setMessage] = useState({

        error: false,
        value: ""

    })

    const router = useRouter();
    function inputHandler(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setInput(old => {
            return {
                ...old, [name]: value
            }
        })
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        if (input.pwd1!==input.pwd2) {
            setMessage({

                error: true,
                value: "passwords are not matching"

            })
            setTimeout(() => {
                setMessage({

                    error: false,
                    value: ''

                })
            }, 4000);
            return
        }

        try {


            const response = await axios.post('http://localhost:3000/api/register', { username: input.username, password: input.pwd1 });
            console.log(response.data); // handle success response
            if (response.data.success == false) {
                setMessage({

                    error: true,
                    value: response.data.message

                })
                setTimeout(() => {
                    setMessage({

                        error: false,
                        value: ''
    
                    })
                }, 4000);
               

            }
            else{
                setMessage({

                    error: false,
                    value: ""

                })
                router.push('/')
            }
        } catch (error) {
            console.error(error); // handle error response
        }
    };

    return (
        <div className=" flex flex-row w-10/12 h-5/6   bg-white " >
            <div className=" flex-1">
                <img className="h-full" src="/img/todo.jpg" alt="" ></img>
            </div>
            <div className="flex flex-1 flex-col pb-6 justify-around p-5  items-center">
                <h1 className="text-4xl  w-8/12"> register </h1>
                {
                    message.error && <div className="text-red-600 border-solid  border w-3/5 p-3 border-red-600 rounded text-center  "> {message.value}</div>
                }
                <div className="flex flex-col w-8/12">
                    <label className="text-lg"> username  </label>
                    <input className="mt-2 p-2 bg-slate-200" name="username" value={input.username} onChange={inputHandler} type="text" />
                </div>
                <div className="flex flex-col  w-8/12">
                    <label className="text-lg" > password</label>
                    <input className="mt-2 bg-slate-200 border-solid border-black p-2" name="pwd1" value={input.pwd1} onChange={inputHandler} type="password" />
                </div>
                <div className="flex flex-col  w-8/12">
                    <label className="text-lg" > confirm  password</label>
                    <input className="mt-2 bg-slate-200 border-solid border-black p-2" name="pwd2" value={input.pwd2} onChange={inputHandler}type="password" />
                </div>
                <div className="flex flex-col  w-8/12">
                    <button className="w-full hover:bg-blue-500 h-10 mb-2 bg-blue-600 text-white" onClick={handleRegister}> register</button>
                    <Link href="/login" className="text-gray-700"> already have an account ? <b> login .</b></Link>
                </div>
            </div>
        </div>
    )

}