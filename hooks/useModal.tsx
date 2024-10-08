import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const toggleModal = () => setOpen((prev) => !prev);

  return { open, openModal, closeModal, toggleModal };
};

export default useModal;
