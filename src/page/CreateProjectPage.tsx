import { useState } from "react"
import CreateNewProject from "../component/createProject/CreateNewProject.tsx";
import SelectCreateMode from "../component/createProject/SelectCreateMode.tsx";
import CreateFromGithub from "../component/createProject/CreateFromGithub.tsx";

export default function CreateProjectPage() {
  const [viewPage,setViewPage] = useState(0);
  const pages:JSX.Element[] = [
    <SelectCreateMode setViewPage={setViewPage}/>,
    <CreateNewProject setViewPage={setViewPage}/>,
    <CreateFromGithub setViewPage={setViewPage}/>
  ]
  return <main className="flex justify-center h-fit">
    {pages[viewPage]}
  </main>
}