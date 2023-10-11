
const DescriptionCell = ({ isEditing }) => {

    return isEditing ? (
        <td>
            <input type="text" value="description" />
        </td>
  ) : (
        <td>Description</td>
  )
}

export default DescriptionCell