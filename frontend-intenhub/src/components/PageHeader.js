export default function PageHeader({title, btnType, btnText, target}) {
  return (
    <div className="page-header d-print-none">
    <div className="container-xl">
      <div className="row g-2 align-items-center">
        <div className="col">
          <h2 className="page-title">
            {title}
          </h2>
        </div>
        {btnText && <div className="col">
          <button className={`btn btn-${btnType} float-end`} data-bs-toggle="modal" data-bs-target={target}>
            {btnText}
          </button>
        </div>}
      </div>
    </div>
  </div>
  )
}
