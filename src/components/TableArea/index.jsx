import "./index.css";
import {TableItem }from '../TableItem'
// Insira a prop list
export const TableArea = ({ list }) => {
  return (
    /*
        Crie uma table com className="table".
        Crie uma thead.
        Crie uma tr e dentro dela insira os th para Data, Categoria, Título, Valor. Eles devem ter className="tableHeadColumn".
        Abaixo do fechamento do thead insira um tbody.
        Dentro do tbody faça um map em list e dentro do map chame o componente TasbleItem, passando as props necessárias.
      */
        <table className="table">
          <thead>
            <tr>
              <th className="tableHeadColumn"> Data </th>
              <th className="tableHeadColumn"> Categoria </th>
              <th className="tableHeadColumn"> Título </th>
              <th className="tableHeadColumn"> Valor </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return <TableItem key={index} item={item} />
            })}
          </tbody>
         </table>
         )
};
