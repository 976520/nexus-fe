import { useEffect, useState } from "react";
import { getAllProjectEntity } from "../../test/TestVariables.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import { BestProjectList } from "../content/BestProjectList.tsx";
import Introduce from "./introduce.tsx";
import { useUserStore } from "../../shared/userStore.ts";

export default function HomeMain() {

  const [projects, setProjects] = useState<ProjectEntity[]>([]);
  const {isLogin,user} = useUserStore((state) => state);

  console.log(isLogin,user);

  function loadProjects() {
    getAllProjectEntity(20).then((newProjects) => {
      setProjects([...projects,...newProjects]);
    });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadProjects,[]);

  return <main>
    <Introduce/>
    <BestProjectList projects={projects}/>
  </main>;
}