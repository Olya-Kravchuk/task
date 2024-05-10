import React, { useState } from "react"
import classNames from "classnames"
import { IoIosClose } from "react-icons/io"
import Button from "../Button"
import Input from "../Input"
import Modal from "../Modal"
import "./style.scss"

const AddEditTaskForm = ({ onClose, onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("")
  const [priority, setPriority] = useState("medium")

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value)
  }

  const handlePriorityChange = (newPriority) => {
    setPriority(newPriority)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Передача даних про задачу та пріоритет на вищий рівень
    onSubmit({ title: taskTitle, priority })
    // Закриття модального вікна
    onClose()
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">Add Task </span>
            <IoIosClose className="cp" onClick={onClose} />
          </div>
          <Input
            label="Task"
            placeholder="Type your task here..."
            onChange={handleTitleChange}
            name="title"
            value={taskTitle}
          />
          <div className="modal-priority">
            <span>Priority</span>
            <ul className="priority-buttons">
              {["high", "medium", "low"].map((priorityOption) => (
                <li
                  key={priorityOption}
                  className={classNames({
                    [`${priorityOption}-selected`]: priority === priorityOption,
                  })}
                  onClick={() => handlePriorityChange(priorityOption)}
                >
                  {priorityOption}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Add" type="submit" />
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default AddEditTaskForm
