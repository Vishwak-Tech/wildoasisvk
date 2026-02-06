import Button from "../../ui/Button"
import Modal from "../../ui/Modal"
import CreateCabinForm from "./CreateCabinForm"

function Addcabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>

        <Modal.Window name="cabin-form">
          <CreateCabinForm/>
        </Modal.Window>
      </Modal>
    </div>
  )
}

export default Addcabin



















// function AddCabin() {
//   const [isOpenModal, setIsopenModel] = useState(false)
//   return (
//     <div>
//       <Button onClick={() => setIsopenModel((show) => !show)}>Add New Cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsopenModel(false)}>
//           <CreateCabinForm onCloseModal={() => setIsopenModel(false)}/>
//         </Modal>
//       )}
//     </div>
//   )
// }

// export default AddCabin
