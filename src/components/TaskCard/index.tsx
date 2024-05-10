import classNames from "classnames"
// import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg"
// import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg"
import { TiEdit } from "react-icons/ti"
import { RiDeleteBin5Line } from "react-icons/ri"
import CircularProgressBar from "../CircularProgressBar"
import "./style.scss"

const TaskCard = ({ task, handleOpenDeleteModal }: any) => {
  const { id, title, priority, status, progress } = task

  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Task</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Priority</span>
        <span className={classNames(`${priority}-priority`, "priority")}>{priority}</span>
      </div>
      <div className="task-status-wrapper">
        <button className="status">{status}</button>
      </div>
      <div className="progress">
        <CircularProgressBar strokeWidth={2} sqSize={24} percentage={progress} />
      </div>
      <div className="actions">
        <TiEdit className="mr-20 cp" />
        <RiDeleteBin5Line className="cp" onClick={handleOpenDeleteModal} />
        {/* <EditIcon className="mr-20 cp" />
        <DeleteIcon className="cp" /> */}
      </div>
    </div>
  )
}

export default TaskCard
