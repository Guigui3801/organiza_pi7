import React from "react";
import { useParams } from "react-router-dom";
import AppTask from "../../components/AppTask/AppTask";

export default function Kanban() {
  const { id } = useParams();
  return (
    <>
      <h2>PAGINA KANBAN</h2>
      <div>Kanban id: {id}</div>
      <AppTask/>
    </>
  );
}
