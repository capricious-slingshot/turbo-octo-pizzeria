export default function Main(props){
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            {props.view}
          </div>
        </div>
      </div>
    </main>
  )
 }