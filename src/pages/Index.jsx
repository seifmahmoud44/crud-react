import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, editProduct } from "../store/addSlice";

const Index = () => {
  const state = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandel = (id) => {
    dispatch(deleteProduct(id));
  };
  const editHandel = (item) => {
    dispatch(editProduct(item));
    navigate(`/edit/${item.id}`);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.length !== 0 ? (
          state.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button className="edit" onClick={() => editHandel(item)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteHandel(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>no data avilanle</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Index;
