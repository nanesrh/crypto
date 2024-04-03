import { RotatingLines }from 'react-loader-spinner';
import TableRow from './TableRow';

import styles from '../../styles/TableCoin.module.css';

const TableCoin = ( {coins, isLoading} ) => {
    
    return (
        <div className={styles.container}>
            {isLoading ? <RotatingLines /> : (
                <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Coins</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Total Volume</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {coins.map ( (coin) => (
                    <TableRow coin={coin} key={coin.id}/>
                ) )}
                </tbody>
            </table>
            )
            }
        </div>
    );
};

export default TableCoin;