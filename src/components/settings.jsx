import {
  HelpCircle,
  LogOutIcon,
  PanelTopClose,
  Settings2Icon,
} from "lucide-react";

export const Settings = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="flex justify-end-safe mr-42.5 mt-13">
        <div className="bg-gray-300 flex flex-col gap-5   p-3 rounded-tr-2xl rounded-b-2xl ">
          <p className="flex gap-3 p-2 cursor-pointer">
            <Settings2Icon />
            Setting & privacy
          </p>
          <p className="flex gap-3 p-2 cursor-pointer">
            <HelpCircle />
            Help & support
          </p>
          <p className="flex gap-3 p-2 cursor-pointer">
            <LogOutIcon />
            Log Out
          </p>

          <p className="flex gap-3 p-2 cursor-pointer" onClick={onClose}>
            <PanelTopClose />
            Close
          </p>
        </div>
      </div>
    </>
  );
};
