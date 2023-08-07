const TablaEventos = ({ items }) => {
  return (
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr className="table-dark">
                <th scope="col">#</th>
                <th scope="col">Fecha</th>
                <th scope="col">Idioma</th>
                {/*<th scope="col">Eliminado</th>*/}
                <th scope="col">Descripcion</th>
              </tr>
              </thead>
              <tbody>
              {items && items.map((item, index) => {
                return (
                    <tr key={`item-${index}`}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.fecha}</td>
                      <td>{item.idioma}</td>
                      <td dangerouslySetInnerHTML={{__html: item.descripcion}}></td>
                    </tr>
                )
              })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
  )
};

export default TablaEventos;

