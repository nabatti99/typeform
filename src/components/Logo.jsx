export default function Logo({ style }) {
  return (
    <div className={`row ${style}`}>
      <div className="col-12">
        <div className="row justify-content-center mb-3">
          <div className="col-auto">
            <img src="main.png" className="img-fluild" width="100px" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <h5 className="text-yellow-light">- ROUND 01 -</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
