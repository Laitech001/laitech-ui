'use client';
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button varient="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>This is a modal component.</p>
        <Button varient="secondary" onClick={() => setIsModalOpen(false)}>
          Close Modal
        </Button>
      </Modal>
    </>
  )

}