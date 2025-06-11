import { useEffect, useRef, useState } from "react";

export function useFormVisibility() {
  const [showForm, setShowForm] = useState(false);

  const formRef = useRef(null);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const toggleForm = () => setShowForm((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        closeForm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    formRef,
    showForm,
    openForm,
    closeForm,
    toggleForm,
    setShowForm,
  };
}
