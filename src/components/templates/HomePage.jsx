import { useEffect, useState } from "react";

import TableCoin from '../modules/TableCoin.jsx';
import { getCoinList } from "../../services/cryptoApi.js";
import Pagination from "../modules/Pagination.jsx";

const HomePage = () => {

 const[coins, setCoins] = useState([]);
 const[isLoading, setIsLoading] = useState([true]);
 const[page, setPage] = useState(1);

 useEffect(() => {
        setIsLoading(true);
        const getData = async() => {
        const res = await fetch (getCoinList(page));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
    };

    getData();
 }, [page]);

 

    return (
        <div>
            <TableCoin coins={coins} isLoading={isLoading}/>
            <Pagination page={page} setPage={setPage} />
        </div>
    );
};

export default HomePage;