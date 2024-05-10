import "./App.scss"
import { CgMathPlus } from "react-icons/cg"
import AddEditTaskForm from "./components/AddEditTaskForm"
import Button from "./components/Button"
import DeleteModal from "./components/DeleteModal"
import TaskCard from "./components/TaskCard"
import { taskList } from "./siteData/taskList"
import { useCallback, useState } from "react"

const App = () => {
  const [showAddEditModal, setShowAddEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleOpenAddEditModal = useCallback(() => {
    setShowAddEditModal(true)
  }, [])

  const handleCloseAddEditModal = useCallback(() => {
    setShowAddEditModal(false)
  }, [])

  const handleOpenDeleteModal = useCallback(() => {
    setShowDeleteModal(true)
  }, [])

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false)
  }, [])

  return (
    <div className="container">
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Task List</h2>
          <Button
            title="Add Task"
            icon={<CgMathPlus />}
            onClick={() => {
              handleOpenAddEditModal()
            }}
          />
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard key={task.id} task={task} handleOpenDeleteModal={handleOpenDeleteModal} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskForm onClose={handleCloseAddEditModal} />}
      {showDeleteModal && <DeleteModal onClose={handleCloseDeleteModal} />}
    </div>
  )
}

export default App
