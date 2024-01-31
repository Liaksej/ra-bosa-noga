export default function Table({ data }: { data: any }) {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>{data.sku ? data.sku : ""}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{data.manufacturer ? data.manufacturer : ""}</td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>{data.color ? data.color : ""}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{data.material ? data.material : ""}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{data.season ? data.season : ""}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{data.reason ? data.reason : ""}</td>
        </tr>
      </tbody>
    </table>
  );
}
