/* eslint-disable react/prop-types */
import chartUp from '../../assets/chart-up.svg';
import chartDown from '../../assets/chart-down.svg';

import styles from '../../styles/TableCoin.module.css';

const TableRow = ({coin : {name, 
                           image, 
                           symbol, 
                           current_price,  
                           total_volume,
                           price_change_percentage_24h}}) => {
    return (
        <tr>
        <td>
            <div className={styles.symbol}>
                <img src={image} alt={name}/>
                <span>{symbol.toUpperCase()}</span>
            </div>
        </td>

        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
        <td className={price_change_percentage_24h > 0 ? styles.success : styles.error}>{price_change_percentage_24h.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td><img src={price_change_percentage_24h > 0 ? chartUp : chartDown} /></td>
    </tr>
    )
};


export default TableRow;