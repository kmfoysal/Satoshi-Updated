import { useEffect, useState } from "react";

const useSatoshi = () => {


    const email = "lmatsinde@gmail.com"

    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    // const [coins, setCoins] = useState([]);

    // const [bnCoins, setBnCoins] = useState([]);
    // const [bnUsCoins, setBnUsCoins] = useState([]);


    useEffect(()=>{
        fetch('https://tranquil-beyond-13898.herokuapp.com/table1')
        .then(res => res.json())
        .then(data =>  setUsers(data) )
    },[])


    

    return {email, users, isLoading, setIsLoading}
};

export default useSatoshi;