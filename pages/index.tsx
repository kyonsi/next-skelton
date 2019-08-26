import axios from "axios";

const Index = ({USD}) => {
  return (
    <div>
      {USD.code} {USD.rate}
    </div>
  );
};

Index.getInitialProps = async ()=>{
  const response = await axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json');
  return response.data.bpi
}

export default Index;
