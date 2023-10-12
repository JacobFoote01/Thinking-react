import ModeButtons from "./ModeButtons"
import DescriptionCell from "./DescriptionCell"
import RateCell from "./RateCell"
import HoursCell from "./HoursCell"
import formatCurrency from "../utils/formatCurrency"
import { useState } from "react"

const TableRow = ({ initialIsEditing, initialInvoiceData, deleteFunc }) => {

  const [editMode, setEditMode] = useState(initialIsEditing)
  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)


  const changeNormalMode = () => setEditMode(false)
  const changeEditMode = () => setEditMode(true)

  return (
    <tr>
      <ModeButtons 
        isEditing={editMode} 
        saveClick={changeNormalMode}
        editClick={changeEditMode}
        funkyDelete={deleteFunc}
      />
      <DescriptionCell 
        isEditing={editMode} 
        value={description}
        onValueChange={setDescription}
      />
      <RateCell 
        isEditing={editMode} 
        value={rate}
        onValueChange={setRate}
      />
      <HoursCell 
        isEditing={editMode} 
        value={hours}
        onValueChange={setHours}
      />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  )
}

export default TableRow
