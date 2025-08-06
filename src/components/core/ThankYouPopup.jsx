const { FaRegCircleCheck, FaXmark } = require("react-icons/fa6");
const { default: Modal } = require("./Modal");

export default function THankYouMessage({
  onClose,
}) {
  return <Modal onClose={onClose} open={true} className="flex items-center justify-center">
    <div className="max-w-[500px] w-full bg-white p-4 rounded-md relative">
      <FaXmark onClick={onClose} className="absolute top-4 right-4 cursor-pointer" />
      <h2 className="text-center text-[28px] font-bold">Thanks You</h2>
      <FaRegCircleCheck className="text-green-600 w-[64px] h-[64px] mt-8 mx-auto" />
      <div className="mt-8 flex items-center justify-center">
      </div>
    </div>
  </Modal>
}