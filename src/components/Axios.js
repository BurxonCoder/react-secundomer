import {useState , useEffect} from 'react';
import axios from "axios";
const Hook = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then((res) =>{
                console.log(res);
                setPosts(res.data);
            })
    }, [])



    return (
        <div className="container">

                {posts.map((item, index) =>{
                    return(
                        <div className="col-4 mt-3" key={item.id}>
                            <div className="card">
                                <div className="card-header">
                                    <h3> {item.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


    );
};

export default Hook;