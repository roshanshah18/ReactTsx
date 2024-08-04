
interface ITest1{
    name:string;
    address:string;
}
const Test1 = (props:ITest1) => { //{name, address}
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.address}</p>
    </div>
  )}

export default Test1
