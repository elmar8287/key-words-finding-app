import "./Result.css"
import 'antd/dist/antd.css';
import { Button } from 'antd';

const Result = ({word, full, fullHandle }) => {
  return (
    <div>
    {
    <table className="result-table">
        <tr>
          <th>Word</th>
          <th>Times</th>
        </tr>
        {word!==undefined && word!==null &&
          word.map((e) => (
            <tr key={e[0]}>
              <td>{e[0]}</td>
              <td>{e[1]}</td>
            </tr>
          )).slice(0, full)
        }
      </table>
    }
    {
      word!==undefined && word!==null && word.length>7 &&
      <Button type="primary" onClick={fullHandle} className="button">Show full list</Button>
    }
    </div>
  )};

export default Result;
